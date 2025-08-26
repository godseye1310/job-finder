import Filters from "./Filters";
import JobList from "./JobList";

const JobsPannel = ({
	jobs,
	filters,
	setFilters,
	selectedJob,
	setSelectedJob,
	appliedJobs,
	setAppliedJobs,
}) => {
	return (
		<div>
			<Filters filters={filters} setFilters={setFilters} />
			<JobList
				jobs={jobs}
				filters={filters}
				selectedJob={selectedJob}
				setSelectedJob={setSelectedJob}
				appliedJobs={appliedJobs}
				setAppliedJobs={setAppliedJobs}
			/>
		</div>
	);
};

export default JobsPannel;
