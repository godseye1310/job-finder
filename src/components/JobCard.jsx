// import React from "react";

import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";

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
			className={`my-1 max-w-[600px] border hover:card-shadow border-indigo-600 rounded-sm p-3 ${
				isApplied ? "bg-green-300" : "bg-white"
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
						<p className=" w-fit text-base text-white text-left font-bold px-3 py-1 bg-accent rounded-3xl ">
							{company.industry}
						</p>
					</div>
				</div>
				<div className="flex justify-between flex-wrap items-end  gap-3">
					<div className="">
						<p className="text-sm">
							<a
								href={`mailto:${company.email}`}
								className="text-blue-600 hover:underline inline-flex items-center gap-1.5 "
							>
								<span>
									<IoMdMail />
								</span>
								{company.email}
							</a>
						</p>
						<p className="text-sm">
							<a
								href={`tel:${company.phoneNumber}`}
								className="text-blue-600 font-semibold hover:underline inline-flex items-center gap-1.5"
							>
								<span>
									<BiSolidPhoneCall />
								</span>
								{company.phoneNumber}
							</a>
						</p>
						<p className="text-sm ">
							<span className="text-blue-600 inline-flex items-center gap-1.5">
								<MdLocationPin className="" />
								{company.address}
							</span>
						</p>
					</div>
					<div className="">
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
