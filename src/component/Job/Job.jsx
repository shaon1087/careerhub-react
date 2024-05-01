import PropTypes from "prop-types";
import { MdOutlineLocationOn } from "react-icons/md";
import { CiDollar } from "react-icons/ci";


const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,

  } = job;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow">
        <figure>
          <img src={logo} alt="" />
        </figure>
        <div className="card-body">
          <h3 className="card-title">{job_title}</h3>
          <h2>{company_name}</h2>
          <div>
            <button className="px-5 py-2 font-extrabold border rounded border-[#7e90fe] text-[#7E90FE] mr-4">
              {remote_or_onsite}
            </button>
            <button className="px-5 py-2 font-extrabold border rounded text-[#7E90FE] border-[#7e90fe]">
              {job_type}
            </button>
          </div>
          <div className="flex mt-4 mb-6 ">
            <h2 className="flex mr-2">
              <MdOutlineLocationOn className="text-2xl" />
              {location}
            </h2>
            <h2 className="flex">
              <CiDollar className="text-2xl"></CiDollar>salary:{salary}
            </h2>
          </div>
          <div className="card-actions">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
      {/* <div>
        <img src={logo} alt="" />
        <h3 className="text-xl ">{job_title}</h3>
        <h2>{ company_name}</h2>


      </div> */}
    </div>
  );
};

Job.propTypes = {
  job: PropTypes.object.isRequired
};

export default Job;
