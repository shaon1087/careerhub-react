import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../../Utility/localStorage";

const AppliedJobs = () => { 
  const [appliedJobs,setAppliedJobs] = useState([]);
  const [displayJobs,setDisplayJobs] = useState([]);

  const handleJobsFilter = filter =>{
    if(filter==='all'){
      setDisplayJobs(appliedJobs);
  }
   else if(filter==='remote'){
      const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
      setDisplayJobs(remoteJobs);
  }
   else if(filter==='onsite'){
      const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
       setDisplayJobs(onsiteJobs);
  }}
    

  const jobs = useLoaderData();
  useEffect(()=> {
    const storedJobs = getStoredApplication();
    if(jobs.length > 0){
      // const jobsApplied = jobs.filter(job => storedJobs.includes(job.id)); 
      const jobApplied = [];
      for (const id of storedJobs) {
        const job = jobs.find(job => job.id === id);
        if(job) {
          jobApplied.push(job);
        }
      }
      
      
      setAppliedJobs(jobApplied);
      setDisplayJobs(jobApplied);
    }
  },[jobs]);


  return (
    <div>
      <h1>jobs i applied: {appliedJobs.length}</h1>
      <details className="dropdown">
        <summary className="m-1 btn">open or close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={()=> handleJobsFilter('all')}>
            <a>All</a>
          </li>
          <li onClick={()=> handleJobsFilter('remote')}>
            <a>Remote</a>
          </li>
          <li onClick={()=> handleJobsFilter('onsite')}>
            <a>Onsite</a>
          </li>
        </ul>
      </details>

      <ul>
        {
        displayJobs.map((job) => (
          <li key={job.id}>
            <span>
              {job.job_title}: {job.remote_or_onsite}
            </span>
          </li>
        ))
        }
      </ul>
    </div>
  );
};

export default AppliedJobs;
