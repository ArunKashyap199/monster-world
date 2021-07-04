import * as actionTypes from "./../types/types";
import { handleResponse } from "./../helpers/userServices";

export const MonsterListing = () => {
	return (dispatch) => {
		const request = new Request("https://jsonplaceholder.typicode.com/users", {
			method: "GET",
			headers: new Headers({
				"Content-Type": "application/json",
			}),
		});
		return fetch(request)
			.then(handleResponse)
			.then((data) => {
				dispatch({
					type: actionTypes.FETCH_MONSTER_DATA,
					payload: data,
				});
				return 1;
			})
			.catch((error) => {
				return 0;
			});
	};
};
