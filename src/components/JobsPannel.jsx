import Filters from "./Filters";
import JobList from "./JobList";

const JobsPannel = ({
	jobs,
	filters,
	setFilters,
	selectedJob,
	setSelectedJob,
	contactedJobs,
	setContactedJobs,
}) => {
	return (
		<div>
			<Filters filters={filters} setFilters={setFilters} />
			<JobList
				jobs={jobs}
				filters={filters}
				selectedJob={selectedJob}
				setSelectedJob={setSelectedJob}
				contactedJobs={contactedJobs}
				setContactedJobs={setContactedJobs}
			/>
		</div>
	);
};

export default JobsPannel;
