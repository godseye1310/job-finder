import React, { useEffect, useState } from "react";

const Filters = ({ setFilters }) => {
	const [debouncedInput, setDebouncedInput] = useState("");

	useEffect(() => {
		let timeID = setTimeout(() => {
			setFilters((prev) => ({ ...prev, search: debouncedInput }));
		}, 1000);

		return () => {
			clearTimeout(timeID);
		};
	}, [debouncedInput, setFilters]);

	return (
		<div className="mb-10">
			<label htmlFor="search">Search Job :</label>
			<input
				className="p-2 bg-sky-50 rounded-3xl"
				type="text"
				id="search"
				name="search"
				onChange={(e) => setDebouncedInput(e.target.value)}
			/>
		</div>
	);
};

export default Filters;
