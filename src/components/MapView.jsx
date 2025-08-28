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
import L from "leaflet";
//
import appliedPin from "../assets/location-appliedx.png";
import selectedPin from "../assets/location-selectedx.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import iconDefault from "leaflet/dist/images/marker-icon.png";

const defaultIcon = L.icon({
	iconUrl: iconDefault,
	shadowUrl: iconShadow,
	iconSize: [25, 41], // size of the icon
	iconAnchor: [12, 41], // point of the icon which corresponds to marker's location
	popupAnchor: [1, -34], // point from which the popup should open relative to the iconAnchor
});

const appliedIcon = L.icon({
	iconUrl: appliedPin,
	shadowUrl: iconShadow,
	iconSize: [33, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
});

const selectedIcon = L.icon({
	iconUrl: selectedPin,
	shadowUrl: iconShadow,
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
});

function SetSelectedJobView({ selectedJobId, selectedJobMarker }) {
	const map = useMap();

	useEffect(() => {
		if (selectedJobId && selectedJobMarker) {
			// map.setView(selectedJobMarker, 10);
			map.flyTo(selectedJobMarker, 10);
		} else if (!selectedJobId) {
			map.flyTo([-24.099, 134.1816], 5);
		}

		// [selectedJob.latitude, selectedJob.longitude]
	}, [selectedJobId, selectedJobMarker, map]);
}

const MapView = ({
	jobs,
	selectedJob,
	setSelectedJob,
	statefilters,
	appliedJobs,
}) => {
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
			<div className="w-[100%] h-[calc(100svh-240px)] bg-sky-100">
				<MapContainer
					center={[-24.099, 134.1816]}
					zoom={2}
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

					{jobs.map((job) => {
						let icon = defaultIcon;

						const isApplied = appliedJobs.includes(job.companyId);
						if (selectedJobId === job.companyId) {
							icon = selectedIcon;
						} else if (isApplied) {
							icon = appliedIcon;
						}

						return (
							<Marker
								key={job.companyId}
								position={[job.latitude, job.longitude]}
								icon={icon}
								eventHandlers={{
									click: () => setSelectedJob(job),
								}}
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
						);
					})}
				</MapContainer>
			</div>
		</div>
	);
};

export default MapView;
