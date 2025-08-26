import React from "react";

const Filters = () => {
	return (
		<div className="mb-10">
			<label htmlFor="search">Search Job :</label>
			<input
				className="p-2 bg-sky-50 rounded-3xl"
				type="text"
				id="search"
				name="search"
			/>
		</div>
	);
};

export default Filters;
