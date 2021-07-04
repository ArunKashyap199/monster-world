import * as types from "./../types/types";

const initalState = {
	monsterList: [],
};

const adminReducer = (state = initalState, action) => {
	switch (action.type) {
		case types.FETCH_MONSTER_DATA:
			return {
				...state,
				monsterList: action.payload,
			};
		default:
			return state;
	}
};

export default adminReducer;
