import React from "react";

const JobCard = ({ company }) => {
	return (
		<li
			key={company.companyId}
			className="my-1 border border-indigo-600 rounded-sm p-3"
		>
			<div className="flex justify-between items-center">
				<h3 className="text-2xl font-semibold mb-3">
					{company.companyName}
				</h3>

				<h6 className="text-md font-semibold">{company.state}</h6>
			</div>

			<div className="flex justify-between">
				<p className="text-lg font-semibold mb-3 px-3 py-1 bg-accent rounded-3xl">
					{company.industry}
				</p>
			</div>
		</li>
	);
};

export default JobCard;
