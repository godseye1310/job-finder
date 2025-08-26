import { useState } from "react";
import companies from "./data/companies.json";
import JobsPannel from "./components/JobsPannel";
import MapView from "./components/MapView";

function App() {
	const jobs = companies;
	const [filters, setFilters] = useState({
		search: "",
		state: "",
		industry: "",
	});
	const [selectedJob, setSelectedJob] = useState(null);
	const [appliedJobs, setAppliedJobs] = useState([]);

	// console.log(filters.search);
	// console.log(appliedJobs);
	// console.log(selectedJob);

	const filteredJobs = jobs.filter((job) => {
		return (
			job.state
				.toLowerCase()
				.includes(filters.search.toLowerCase().trim()) ||
			job.industry
				.toLowerCase()
				.includes(filters.search.toLowerCase().trim())
		);
	});

	return (
		<>
			<div className="text-center">
				<h1 className="text-indigo-600 text-5xl font-bold">
					Job Finder
				</h1>
			</div>

			<div className="mt-10 flex justify-center gap-5">
				<section className="w-1/2">
					<JobsPannel
						jobs={filteredJobs}
						filters={filters}
						setFilters={setFilters}
						selectedJob={selectedJob}
						setSelectedJob={setSelectedJob}
						appliedJobs={appliedJobs}
						setAppliedJobs={setAppliedJobs}
					/>
				</section>

				<section className="w-1/2">
					<MapView jobs={filteredJobs} selectedJob={selectedJob} />
				</section>
			</div>
		</>
	);
}

export default App;
