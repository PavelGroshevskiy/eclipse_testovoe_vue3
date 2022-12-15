import { convert } from "money";

export const valuteModule = {
	state: () => ({
		valutes: [],
		valuteOptions: [],
		filter: "",
		selectedValute: "",
		isValuteLoading: false,
	}),

	getters: {
		filteredValuteList(state) {
			let filteredArray = [];
			for (let valute of state.valutes) {
				valute.Name.includes(state.filter) ? filteredArray.push(valute) : "";
			}
			return filteredArray;
		},
	},

	mutations: {
		setValutes(state, valutes) {
			state.valutes = valutes;
		},
		setFilter(state, filter) {
			state.filter = filter;
		},
		setLoading(state, bool) {
			state.isValuteLoading = bool;
		},
		setValuteOptions(state, options) {
			state.valuteOptions = options;
		},
		setSelect(state, select) {
			state.selectedValute = select;
		},
		setValutesConvert(state, valute) {
			state.valutes = valute;
		},
	},

	actions: {
		convertValute({ commit, state }) {
			try {
				//FIND VALUTES ON ARRAY
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
			} catch (e) {
				console.log(e);
			}
		},
		// FETCHING VALUTE DATA
		fetchValutes({ commit, state }) {
			try {
				commit("setLoading", true);
				setTimeout(async () => {
					const f = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
					const data = await f.json();
					const convertValutesOnArray = Object.entries(data.Valute).map((el) => el[1]);
					commit("setValutes", convertValutesOnArray);
					commit(
						"setValuteOptions",
						convertValutesOnArray.map((valute) => ({ valute }))
					);
					commit("setLoading", false);
					commit((state.selectedValute = "RUB"));
				}, 1000);
			} catch (e) {
				console.log(e);
			}
		},
	},

	namespaced: true,
};
