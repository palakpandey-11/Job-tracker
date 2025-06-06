// src/pages/EditJob.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Jobform from '../components/Jobform';

const EditJob = () => {
  const { id } = useParams(); // get job id from route
  const jobId = Number(id);
  const navigate = useNavigate();
  const [jobData, setJobData] = useState(null);

  useEffect(() => {
    const jobs = JSON.parse(localStorage.getItem('jobs')) || [];
    const selectedJob = jobs.find((job) => job.id === jobId);
    if (selectedJob) {
      setJobData(selectedJob);
    } else {
      alert('Job not found!');
      navigate('/');
    }
  }, [jobId, navigate]);

  const handleUpdateJob = (updatedJob) => {
    const jobs = JSON.parse(localStorage.getItem('jobs')) || [];
    const updatedJobs = jobs.map((job) =>
      job.id === jobId ? { ...job, ...updatedJob } : job
    );
    localStorage.setItem('jobs', JSON.stringify(updatedJobs));
    // alert('Job updated!');
    navigate('/');
  };

  return (
    <div>
      {/* <h2>Edit Job</h2> */}
      {jobData && <Jobform onSubmit={handleUpdateJob} initialData={jobData} />}
    </div>
  );
};

export default EditJob;
