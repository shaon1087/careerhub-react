import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../../Utility/localStorage";

const AppliedJobs = () => { 
  const [appliedJobs,setAppliedJobs] = useState([]);

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
      console.log(jobs, storedJobs, jobApplied);
    }
  },[])


  return (
    <div>
      <h1>jobs i applied: {appliedJobs.length}</h1>
      <details className="dropdown">
        <summary className="m-1 btn">open or close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li>
            <a>All</a>
          </li>
          <li>
            <a>Remote</a>
          </li>
          <li>
            <a>Onsite</a>
          </li>
        </ul>
      </details>

      <ul>
        {appliedJobs.map((job) => (
          <li key={job.id}>
            <span>
              {job.job_title}: {job.remote_or_onsite}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;
