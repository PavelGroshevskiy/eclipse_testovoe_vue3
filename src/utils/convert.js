var fx = require("money");

// const APP_ID = "05b34da61e09423ca2fd783cd2dea7bf";
// 	const f = await fetch("https://openexchangerates.org/api/latest.json");

export const convert = (base, rates, nominal) => {
	fx.base = "USD";
	fx.rates = {
		EUR: 0.745101, // eg. 1 USD === 0.745101 EUR
		GBP: 0.64771, // etc...
		HKD: 7.781919,
		USD: 1, // always include the base rate (1:1)
	};

	// Check money.js has finished loading:
	if (typeof fx !== "undefined" && fx.rates) {
		fx.rates;
		fx.base;
	} else {
		// If not, apply to fxSetup global:
		const fxSetup = {
			rates: fx.rates,
			base: fx.base,
			nominal: nominal,
		};
	}
	console.log(fx(100).from("USD").to("GBP"));
	// return (convertValute = fx(nominal).from("USD").to("GBP"));
};

export const convertO = (commit, state) => {
	const findTickerOnSelect = state.valutes.find(
		(item) => item.CharCode === state.selectedValute
	);
	const findTickerOnSelectValue = findTickerOnSelect.Value;

	// REBILD THE OBJECT OF VALUTES AND SEND ON STATE
	const changedRate = state.valutes.map((el) => {
		const curse = el.Value / el.Nominal;
		const Value =
			el.Nominal > 1
				? findTickerOnSelectValue / curse
				: findTickerOnSelectValue / el.Value;
		const CharCode = el.CharCode;
		const Name = el.Name;
		return { Name: Name, CharCode: CharCode, Value: Value, Nominal: el.Nominal };
	});
	commit("setValutes", changedRate);
};
