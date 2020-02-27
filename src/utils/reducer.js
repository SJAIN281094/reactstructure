export default (state, action) => {
	switch(action.type){
		case 'IS_LOGGED_IN' :
		return({
			...state,
			isLogin: true
		});
		default:
		return state;
	}
}