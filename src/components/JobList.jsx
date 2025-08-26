import JobCard from "./JobCard";

//
const JobList = ({ jobs, setSelectedJob, appliedJobs, setAppliedJobs }) => {
	return (
		<div>
			<ul>
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
