// import React from "react";

const JobCard = ({ company, setSelectedJob, appliedJobs, setAppliedJobs }) => {
	const isApplied = appliedJobs.includes(company.companyId);
	// console.log(isApplied);

	const handleApplyBtn = (e) => {
		e.stopPropagation();

		if (!isApplied) {
			setAppliedJobs((prev) => [...prev, company.companyId]);
		}
	};

	return (
		<li
			className={`my-1 max-w-[600px] border border-indigo-600 rounded-sm p-3 ${
				isApplied ? "bg-green-200" : ""
			}`}
			onClick={() => setSelectedJob(company)}
		>
			<div className="">
				<div className="flex justify-between items-baseline gap-5">
					<div className="w-2/3">
						<h6 className="text-md font-semibold">
							<span>{company.firstName}</span>{" "}
							<span>{company.lastName}</span>
						</h6>
						<h3 className="text-2xl font-semibold mb-3 ">
							{company.companyName},
							<span className="ml-1.5 -mt-0.5 text-base font-semibold bg-black text-white px-3 py-1">
								{company.state}
							</span>
						</h3>
					</div>

					<div className="w-1/3 flex justify-end">
						<p className="w-fit text-base text-neutral-600 text-end font-bold px-3 py-1 bg-accent rounded-3xl">
							{company.industry}
						</p>
					</div>
				</div>
				<div className="flex justify-between items-end">
					<div>
						<p className="text-sm text-neutral-600">
							{company.email}
						</p>
						<p className="text-sm text-neutral-600">
							{company.phoneNumber}
						</p>
						<p className="text-sm text-neutral-600">
							{company.address}
						</p>
					</div>
					<div>
						<button
							className="cbtn disabled:opacity-50 disabled:cursor-auto"
							type="button"
							onClick={handleApplyBtn}
							disabled={isApplied}
						>
							{isApplied ? "Applied ✅" : "Apply"}
						</button>
					</div>
				</div>
			</div>
		</li>
	);
};

export default JobCard;
