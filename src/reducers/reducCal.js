import { INCREASE_NUMBER, DROP_NUMBER } from '../actions/ActionCal';


const initState = {
    num: 0
}

function reducCal(state = initState, action) {
    switch(action.type) {
        case INCREASE_NUMBER:
            return {
                ...state,
                num: state.num + 1
            }
        case DROP_NUMBER:
            return Object.assign({}, state, { num: state.num - 1});

        default:
            return state;
    }

}

export default reducCal;