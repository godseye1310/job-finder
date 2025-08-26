import { useState } from "react";
import companies from "./data/companies.json";
import JobsPannel from "./components/JobsPannel";
import MapView from "./components/MapView";
import Filters from "./components/Filters";

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
			<div className="text-center bg-indigo-600 py-5 mb-1">
				<h1 className="text-white text-5xl font-bold">Job Finder</h1>
			</div>

			<div className="container mx-auto">
				<Filters filters={filters} setFilters={setFilters} />
				<div className="mt-5 flex justify-center gap-5">
					<section className="w-1/2">
						<JobsPannel
							jobs={filteredJobs}
							selectedJob={selectedJob}
							setSelectedJob={setSelectedJob}
							appliedJobs={appliedJobs}
							setAppliedJobs={setAppliedJobs}
						/>
					</section>

					<section className="w-1/2">
						<MapView
							jobs={filteredJobs}
							selectedJob={selectedJob}
						/>
					</section>
				</div>
			</div>
		</>
	);
}

export default App;
