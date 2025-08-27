// import React from "react";
import { useEffect, useState } from "react";
import {
	MapContainer,
	Marker,
	Popup,
	TileLayer,
	Tooltip,
	useMap,
} from "react-leaflet";

function SetSelectedJobView({ selectedJobId, selectedJobMarker }) {
	const map = useMap();

	useEffect(() => {
		if (selectedJobId && selectedJobMarker) {
			map.setView(selectedJobMarker, 10);
		} else if (!selectedJobId) {
			map.setView([-24.099, 134.1816], 5);
		}
		// [selectedJob.latitude, selectedJob.longitude]
	}, [selectedJobId, selectedJobMarker, map]);
}

const MapView = ({ jobs, selectedJob }) => {
	// console.log(jobs);
	// console.log(selectedJob);

	let selectedJobId = null;
	let selectedJobMarker = [-24.099, 134.1816];
	if (selectedJob) {
		const { latitude, longitude, companyId } = selectedJob;
		selectedJobMarker = [latitude, longitude];
		selectedJobId = companyId;
	}

	//
	return (
		<div className="p-3 bg-white shadow-2xl">
			<div className="w-[100%] h-[600px] bg-sky-100">
				<MapContainer
					center={[-24.099, 134.1816]}
					zoom={5}
					scrollWheelZoom={false}
					style={{ height: "100%", width: "100%" }}
				>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>

					<SetSelectedJobView
						selectedJobId={selectedJobId}
						selectedJobMarker={selectedJobMarker}
					/>

					{jobs.map((job) => (
						<Marker
							key={job.companyId}
							position={[job.latitude, job.longitude]}
						>
							<Popup>
								{/* {` ${job.latitude}, ${job.longitude}`} */}
								<div>
									<h5 className="font-bold">
										{job.companyName}
									</h5>
									<h6 className="bg-blue-500 -ml-0.5 text-xs font-semibold text-white rounded-lg uppercase w-fit px-2 py-0.5">
										{job.industry}
									</h6>
								</div>
							</Popup>
						</Marker>
					))}
				</MapContainer>
			</div>
		</div>
	);
};

export default MapView;
