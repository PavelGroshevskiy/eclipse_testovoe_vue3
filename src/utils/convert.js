var fx = require("money");

const APP_ID = "05b34da61e09423ca2fd783cd2dea7bf";
// Assign the money.js library to a global money object:

export default (num) => {
	fx.base = "USD";
	fx.settings = { from: "USD", to: "GBP" };
	fx.convert(1000); // 647.71034

	// With options:
	fx.convert(1000, { to: "HKD" }); // 7781.91949 (default `from` currency)
	fx.convert(1000, { from: "GBP", to: "HKD" }); // 12014.50549
};
