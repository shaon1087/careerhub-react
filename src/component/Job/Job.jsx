import PropTypes from "prop-types";

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
      <div>
        <img src={logo} alt="" />
        <h3 className="text-xl ">{job_title}</h3>
        <h2>{ company_name}</h2>
        

      </div>
    </div>
  );
};

Job.propTypes = {
  job: PropTypes.object.isRequired
};

export default Job;
