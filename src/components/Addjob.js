import React from 'react';
import Jobform from './Jobform';
import { useNavigate } from 'react-router-dom';

const Addjob = () => {
   const navigate = useNavigate();

  const handleAdd = (jobData) => {
    const storedJobs = JSON.parse(localStorage.getItem('jobs')) || [];
    storedJobs.push(jobData);
    localStorage.setItem('jobs', JSON.stringify(storedJobs));
    navigate('/');
    // alert('Job Added!');
  };

  return (
    <div>
      <Jobform onSubmit={handleAdd} />
    </div>
  );
};

export default Addjob;