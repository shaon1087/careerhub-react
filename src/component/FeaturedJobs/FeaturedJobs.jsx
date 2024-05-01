import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs,setJobs] = useState([]);
    const [dataLength,setDataLength] = useState(4);
    useEffect(() =>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data));
    
    },[]);

    return (
      <div>
        <div className="items-center text-center">
          <h2 className="text-5xl">Featured Jobs: {jobs.length}</h2>
          <p className="text-sm">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {jobs.slice(0, dataLength).map((job) => (
            <Job key={job.id} job={job}></Job>
          ))}
        </div>
        <div
          className={`text-center mt-10 mb-28 ${
            dataLength === jobs.length ? "hidden" : ""
          }`}
        >
          <button onClick={() => setDataLength(jobs.length)} className="btn">
            Show all jobs
          </button>
        </div>
      </div>
    );
};

export default FeaturedJobs;