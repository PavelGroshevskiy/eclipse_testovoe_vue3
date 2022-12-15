import { createStore } from "vuex";
import { valuteModule } from "./valuteModule";

export default createStore({
	modules: {
		valute: valuteModule,
	},
});
