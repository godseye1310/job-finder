import JobCard from "./JobCard";

//
const JobList = ({ jobs, setSelectedJob, appliedJobs, setAppliedJobs }) => {
	return (
		<div className=" flex justify-center h-full pb-6 ">
			<ul className=" overflow-y-auto overflow-x-clip">
				{jobs.map((company) => (
					<JobCard
						key={company.companyId}
						company={company}
						setSelectedJob={setSelectedJob}
						appliedJobs={appliedJobs}
						setAppliedJobs={setAppliedJobs}
					/>
				))}
			</ul>
		</div>
	);
};

export default JobList;
