import React, { useEffect, useState } from "react";
import { BiSolidMapAlt } from "react-icons/bi";
import { LiaIndustrySolid } from "react-icons/lia";
import { SiOpenstreetmap } from "react-icons/si";

const Filters = ({ setFilters, setSelectedJob, states, industries }) => {
	const [debouncedInput, setDebouncedInput] = useState("");

	useEffect(() => {
		let timeID = setTimeout(() => {
			setFilters((prev) => ({ ...prev, search: debouncedInput }));
			setSelectedJob(null);
		}, 1000);

		return () => {
			clearTimeout(timeID);
		};
	}, [debouncedInput, setFilters, setSelectedJob]);

	return (
		<div className="pt-8 pb-2 w-full flex justify-center items-center">
			<div className="flex justify-center items-center gap-3 max-md:flex-col ">
				<div className="max-md:w-full inline-flex items-center relative">
					<label
						className="font-semibold text-lg text-neutral-600 absolute left-3 top-1/2 transform -translate-y-1/2"
						htmlFor="search"
					>
						<SiOpenstreetmap className="text-2xl text-indigo-600" />
					</label>
					<input
						className="input-field mx-auto pl-10"
						type="text"
						placeholder="Find Jobs"
						id="search"
						name="search"
						onChange={(e) => setDebouncedInput(e.target.value)}
					/>
				</div>

				<div className="max-md:w-full inline-flex items-center relative">
					<label
						className="font-semibold text-lg text-neutral-600 absolute left-3 top-1/2 transform -translate-y-1/2"
						htmlFor="states"
					>
						<BiSolidMapAlt className="text-3xl text-indigo-600" />
					</label>
					<select
						name="states"
						id="states"
						onChange={(e) => {
							setSelectedJob(null);
							setFilters((prev) => ({
								...prev,
								state: e.target.value,
							}));
						}}
						className="input-field pl-10"
					>
						<option value="">All</option>
						{states.map((state) => (
							<option key={state} value={state}>
								{state}
							</option>
						))}
					</select>
				</div>

				<div className="max-md:w-full inline-flex items-center relative">
					<label
						className="font-semibold absolute left-3 top-1/2 transform -translate-y-1/2 "
						htmlFor="industry"
					>
						<LiaIndustrySolid className="text-3xl text-indigo-600" />
					</label>
					<select
						name="industry"
						id="industry"
						onChange={(e) => {
							setSelectedJob(null);
							setFilters((prev) => ({
								...prev,
								industry: e.target.value,
							}));
						}}
						className="input-field pl-10"
					>
						<option value="">All</option>
						{industries.map((industry) => (
							<option key={industry} value={industry}>
								{industry}
							</option>
						))}
					</select>
				</div>
			</div>
		</div>
	);
};

export default Filters;
