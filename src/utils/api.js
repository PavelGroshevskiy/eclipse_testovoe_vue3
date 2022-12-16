export const loadValutesData = () => {
	return fetch("https://www.cbr-xml-daily.ru/daily_json.js").then((data) => data.json());
};
