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

	console.log(filters);
	// console.log(appliedJobs);
	// console.log(selectedJob);

	const filteredJobs = jobs.filter((job) => {
		return (
			(job.companyName
				.toLowerCase()
				.includes(filters.search.toLowerCase().trim()) ||
				job.state
					.toLowerCase()
					.includes(filters.search.toLowerCase().trim()) ||
				job.industry
					.toLowerCase()
					.includes(filters.search.toLowerCase().trim())) &&
			//
			job.state
				.toLowerCase()
				.includes(filters.state.toLowerCase().trim()) &&
			job.industry
				.toLowerCase()
				.includes(filters.industry.toLowerCase().trim())
		);
	});

	const stateSet = new Set(jobs.map((job) => job.state));
	const industrySet = new Set(jobs.map((job) => job.industry));
	// console.log(industrySet);

	return (
		<>
			<div className="text-center bg-indigo-600 py-5 mb-1">
				<h1 className="text-white text-5xl font-bold">Job Finder</h1>
			</div>

			<div className="mx-auto px-5">
				<Filters
					filters={filters}
					setFilters={setFilters}
					setSelectedJob={setSelectedJob}
					states={[...stateSet]}
					industries={[...industrySet]}
				/>
				<div className="mt-5 flex justify-center gap-5 max-md:flex-col">
					<section className="max-md:w-full">
						<JobsPannel
							jobs={filteredJobs}
							selectedJob={selectedJob}
							setSelectedJob={setSelectedJob}
							appliedJobs={appliedJobs}
							setAppliedJobs={setAppliedJobs}
						/>
					</section>

					<section className="w-2/3 max-md:w-full">
						<MapView
							jobs={filteredJobs}
							selectedJob={selectedJob}
							setSelectedJob={setSelectedJob}
							statefilter={filters.state}
							appliedJobs={appliedJobs}
						/>
					</section>
				</div>
			</div>
		</>
	);
}

export default App;
