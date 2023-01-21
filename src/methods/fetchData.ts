const axios = require("axios");

export async function getRandomLyric(artist: string) {
	try {
		const data = await fetch(
			`${process.env.API_URL}/${artist}/song/random/info`
		);
		return data.json();
	} catch (error) {
		console.error(error);
	}
}

export function getCurrentDate() {
	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, "0");
	var mm = months[today.getMonth()];
	var yyyy = today.getFullYear();

	return mm + " " + dd + ", " + yyyy;
}

export function getCurrentTime() {
	var today = new Date();
	var hour = today.getHours();
	let minutes = today.getMinutes();
	var ampm = hour >= 12 ? "PM" : "AM";
	hour = hour % 12;
	hour = hour ? hour : 12;
	let strMinutes = minutes < 10 ? String("0" + minutes) : String(minutes);

	return String(hour) + ":" + strMinutes + " " + ampm;
}

export function getRandomInteractionNum() {
	return Math.floor(Math.random() * 1_000);
}
