import JobCard from "./JobCard";

//
const JobList = ({
	jobs,
	filters,
	selectedJob,
	setSelectedJob,
	contactedJobs,
	setContactedJobs,
}) => {
	return (
		<div>
			<ul>
				{jobs.map((company) => (
					<JobCard key={company.companyId} company={company} />
				))}
			</ul>
		</div>
	);
};

export default JobList;
