import React from 'react';
import { Link , useNavigate} from 'react-router-dom';

const Jobcard = ({ job }) => {
   const navigate = useNavigate();

  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this job?");
    if (!confirmDelete) return;

    const jobs = JSON.parse(localStorage.getItem('jobs')) || [];
    const updatedJobs = jobs.filter((j) => j.id !== job.id);
    localStorage.setItem('jobs', JSON.stringify(updatedJobs));
    // alert("Job deleted successfully!");
    navigate(0);
  };
  return (
    <div style={styles.card}>
      <h3>{job.title}</h3>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Status:</strong> {job.status || 'Pending'}</p>
      <p><strong>Date:</strong> {job.date}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Notes:</strong> {job.notes}</p>

      <Link to={`/edit/${job.id}`}>
  <button>Edit</button>
</Link>
 <button 
          onClick={handleDelete} 
          style={{ backgroundColor: '#e74c3c',display:'flex', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '4px', marginLeft: 'auto' }}
        >
          Delete
        </button>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '16px',
    borderRadius: '10px',
    marginBottom: '12px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: 'white',
    backdropFilter: 'blur(5px)',
    boxShadow: '2px 2px 6px black',
  },
};


export default Jobcard;
