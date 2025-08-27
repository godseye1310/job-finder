import React, { useEffect, useState } from "react";

const Filters = ({ setFilters, setSelectedJob }) => {
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
		<div className="pt-8 pb-2 w-full flex justify-center">
			<label
				className="font-semibold text-lg text-neutral-600 hidden"
				htmlFor="search"
			>
				Find Jobs{" "}
			</label>
			<input
				className="input-field mx-auto"
				type="text"
				placeholder="Type State / Industry"
				id="search"
				name="search"
				onChange={(e) => setDebouncedInput(e.target.value)}
			/>
		</div>
	);
};

export default Filters;
