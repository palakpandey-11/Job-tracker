import React, { useState } from 'react';
// import {  } from 'react-router-dom';


//Initializes form fields using useState
//Supports editing existing data (with initialData) and creating new entries
//Each field has its own state for flexibility and easy form control.
const Jobform = ({ onSubmit, initialData = {} }) => {
  const [company, setCompany] = useState(initialData.company || '');
  const [title, setTitle] = useState(initialData.title || '');
  const [status, setStatus] = useState(initialData.status || 'Applied');
  const [date, setDate] = useState(initialData.date || '');
  const [location, setLocation] = useState(initialData.location || '');
  const [notes, setNotes] = useState(initialData.notes || '');
  // const navigate = useNavigate();

//stops the form from refreshing then gathers all current form field value into a jobData object and supports both creating and editing an existing job,usign the id logic
const handleSubmit = (e) => {
    e.preventDefault();

    const jobData = {
      id: initialData.id || Date.now(),
      company,
      title,
      status,
      date,
      location,
      notes,
    };

    onSubmit(jobData);
//this block checks whether we're creating a new job entry or editing an exiting one,and clear the form fields if it's a new entry
    if (!initialData.id) {
      setCompany('');
      setTitle('');
      setStatus('Applied');
      setDate('');
      setLocation('');
      setNotes('');
    }
  };

//This JSX code defines a Job Application Form using React.It allows users to either add a new job or edit an existing one depending on whether initialData.id is present

    return (

        <form className="job-form" onSubmit={handleSubmit}>
      <h2>{initialData.id ? 'Edit Job' : 'Add Job'}</h2>

      <label>Company Name</label>
      <input
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        required
      />

      <label>Job Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <label>Status</label>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Applied">Applied</option>
        <option value="Interviewing">Interviewing</option>
        <option value="Rejected">Rejected</option>
        <option value="Offer">Offer</option>
      </select>

      <label>Application Date</label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <label>Location</label>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <label>Notes</label>
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      ></textarea>

      <button type="submit">{initialData.id ? 'Update Job' : 'Add Job'}</button>
    </form>
  
  );
};


export default Jobform;