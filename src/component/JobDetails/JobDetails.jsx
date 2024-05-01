import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    const {
      job_title,
      salary,
      job_description,
      job_responsibility,
      educational_requirements,
      experiences,
      contact_information,
    } = job;
    return (
      <div>
        <h2>this is job details</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="grid md:col-span-2">
            <p className="text-sm font-extrabold">
              Job Description:{job_description}
            </p>
            <p className="text-sm font-extrabold">
              Job Responsibility:{job_responsibility}
            </p>
            <p className="text-sm font-extrabold">
              Educational Requirements:{educational_requirements}
            </p>
            <p className="text-sm font-extrabold">Experiences:{experiences}</p>
          </div>
          <div className="grid md:col-span-1">
            <div className="border rounded-xl bg-[#4287f5] p-8">
              <h3 className="text-[#1A1919] text-xl font-extrabold my-7 ">
                Job Details
              </h3>
              <hr />
              <p
                className="my-3
              "
              >
                salary:{salary}(per month)
              </p>
              <p className="my-3">Job Title:{job_title}</p>
              <h3 className="text-[#1A1919] text-xl font-extrabold my-7 ">
                Contact Information
              </h3>
              <hr />
              <p className="my-3">Phone:{contact_information.phone}</p>
              <p className="my-3">Email:{contact_information.email}</p>
              <p className="my-3">Address:{contact_information.address}</p>
            </div>

            <div>
              <button className="btn w-full mt-2 bg-purple-600 text-white ">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default JobDetails;