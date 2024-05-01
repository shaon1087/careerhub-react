import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs,setJobs] = useState([]);
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
        <div>
            {
                jobs.map(job => <Job key={job.id} job={job}></Job>)
            }
        </div>
      </div>
    );
};

export default FeaturedJobs;