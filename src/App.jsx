import { useState } from "react";
import companies from "./data/companies.json";
import JobsPannel from "./components/JobsPannel";
import MapView from "./components/MapView";

function App() {
	const [jobs, setJobs] = useState(companies); // all jobs
	const [filters, setFilters] = useState({ state: "", industry: "" });
	const [selectedJob, setSelectedJob] = useState(null);
	const [contactedJobs, setContactedJobs] = useState([]);
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
						jobs={jobs}
						filters={filters}
						setFilters={setFilters}
						selectedJob={selectedJob}
						setSelectedJob={setSelectedJob}
						contactedJobs={contactedJobs}
						setContactedJobs={setContactedJobs}
					/>
				</section>

				<section className="w-1/2">
					<MapView />
				</section>
			</div>
		</>
	);
}

export default App;
