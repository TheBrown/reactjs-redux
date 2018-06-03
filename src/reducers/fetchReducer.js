import { 
    START_FETCHING, 
    SUCCESS_FETCHED, 
    FAILED_FETCHED} from '../actions/FetchAction';

const nameInitialState = {
    is_loading: false,
    is_failed: false,
    is_success: false,
    data: null
}

function fetchReducer(state = nameInitialState, action) {
    switch(action.type) {
        case START_FETCHING:
            return {
                ...state,
                is_loading: true
            }
        case SUCCESS_FETCHED:
            return Object.assign({}, state, {
                is_loading: false, is_success: true, data: action.data
            })
        case FAILED_FETCHED:
            return Object.assign({}, state, {
                is_loading: false, is_success: true, is_failed: true,
            })
        default:
            return state;
    }

}

export default fetchReducer;