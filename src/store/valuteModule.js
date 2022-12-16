import { loadValutesData } from "../utils/api";
import { ELEMENT_OF_VALUTE_ARRAY } from "../utils/constants";

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
	},

	actions: {
		convertValute({ commit, state, dispatch }) {
			try {
				//FIND VALUTES ON ARRAY
				const findTickerOnSelect =
					state.valutes.find((item) => item.CharCode === state.selectedValute) ??
					dispatch("fetchValutes");
				const findTickerOnSelectValue = findTickerOnSelect.Value;
				// REBILD THE OBJECT OF VALUTES FOR CONVERTING AND SEND ON STATE
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
		async fetchValutes({ commit, state }) {
			try {
				commit("setLoading", true);
				const dataValutes = await loadValutesData();
				const convertValutesOnArray = Object.entries(dataValutes.Valute).map(
					(el) => el[ELEMENT_OF_VALUTE_ARRAY]
				);

				commit("setValutes", convertValutesOnArray);
				commit(
					"setValuteOptions",
					convertValutesOnArray.map((valute) => ({ valute }))
				);
				commit("setLoading", false);
				commit((state.selectedValute = "RUB"));
			} catch (e) {
				console.log(e);
			}
		},
	},

	namespaced: true,
};
