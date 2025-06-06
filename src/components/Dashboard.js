// src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import Jobcard from '../components/Jobcard';

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
const [filterStatus, setFilterStatus] = useState('');
const [sortOption, setSortOption] = useState('');

 

  // Load jobs from localStorage on page load
  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem('jobs')) || [];
    setJobs(storedJobs);
  }, []);

  const filteredJobs = jobs
  .filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = filterStatus === '' || job.status === filterStatus;

    return matchesSearch && matchesStatus;
  })

   .sort((a, b) => {
    switch (sortOption) {
      case 'date-desc':
        return new Date(b.date) - new Date(a.date);
      case 'date-asc':
        return new Date(a.date) - new Date(b.date);
      case 'company-asc':
        return a.company.localeCompare(b.company);
      case 'company-desc':
        return b.company.localeCompare(a.company);
      case 'title-asc':
        return a.title.localeCompare(b.title);
      case 'title-desc':
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });

 return (
  <div style={{ padding: '20px', backgroundImage: `url('https://img.freepik.com/free-photo/job-hiring-vacancy-team-interview-career-recruiting_53876-121268.jpg')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',position: 'relative'}}>
     <div style={{position: 'absolute',top: 0,left: 0,width: '100%',height: '100%',backgroundColor: 'rgba(0, 0, 0, 0.6)',zIndex: '0'}}></div>
   <div style={{ position: 'relative', zIndex: 1 }}>
   <div style={{ display: 'flex', backdropFilter: 'blur(5px)', justifyContent: 'space-between', alignItems: 'center' }}>
  <h2 style={{ marginBottom: '10px' }}>Job Vacancy</h2>
  <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
  <input
    type="text"
    placeholder="Search by title or company..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    style={{ padding: '8px', flex: 1 }}
  />

  <select
    value={filterStatus}
    onChange={(e) => setFilterStatus(e.target.value)}
    style={{ padding: '8px' }}
  >
    <option value="">All</option>
    <option value="Applied">Applied</option>
    <option value="Interviewing">Interviewing</option>
    <option value="Rejected">Rejected</option>
    <option value="Offer">Offer</option>
  </select>

   <select
  value={sortOption}
  onChange={(e) => setSortOption(e.target.value)}
  style={{ padding: '8px' }}
>
  <option value="">Sort by</option>
  <option value="date-desc">Date (Newest First)</option>
  <option value="date-asc">Date (Oldest First)</option>
  <option value="company-asc">Company (A-Z)</option>
  <option value="company-desc">Company (Z-A)</option>
  <option value="title-asc">Title (A-Z)</option>
  <option value="title-desc">Title (Z-A)</option>
</select>

</div>

 <div style={{
  // backgroundColor: 'white',
  padding: '20px 30px',
  // borderRadius: '12px',
  // boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  textAlign: 'center',
  minWidth: '150px',
}}>
  <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#1a73e8' }}>
    {jobs.length.toLocaleString()}
  </div>
  <div style={{ fontSize: '14px', color: '#888' }}>
    Jobs Added
  </div>
</div>

</div>

    {filteredJobs.length === 0 ? (
      <p style={{ color: 'white' }}>No jobs added yet.</p>
      
    ) : (
      
     filteredJobs.map((job, index) => (
        <Jobcard key={job.id} job={job} />
      ))
    )}
  </div>
  </div>
);
};

export default Dashboard;
