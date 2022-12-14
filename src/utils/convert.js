var fx = require("money");

const APP_ID = "05b34da61e09423ca2fd783cd2dea7bf";
// Assign the money.js library to a global money object:

async () => {
	const f = await fetch("https://openexchangerates.org/api/latest.json");
	const data = await f.json();
	const convertValutesOnArray = Object.entries(data.Valute).map((el) => el[1]);
	this.tickers = convertValutesOnArray;
};
