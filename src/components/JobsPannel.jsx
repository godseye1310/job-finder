import JobList from "./JobList";

const JobsPannel = ({
	jobs,
	selectedJob,
	setSelectedJob,
	appliedJobs,
	setAppliedJobs,
}) => {
	return (
		<div className=" bg-indigo-600 px-0.5 pt-3 pb-1 rounded-xl shadow-2xl h-[calc(100svh-210px)] overflow-y-hidden">
			<JobList
				jobs={jobs}
				selectedJob={selectedJob}
				setSelectedJob={setSelectedJob}
				appliedJobs={appliedJobs}
				setAppliedJobs={setAppliedJobs}
			/>
		</div>
	);
};

export default JobsPannel;
