import axios from 'axios';

export const START_FETCHING = "fetching";
export const SUCCESS_FETCHED = "success_fetched";

export const FAILED_FETCHED = "failed_fetched";

export function startFetching() {
    return {
        type: START_FETCHING
    }
}

export function successFetched(data) {
    return {
        type: SUCCESS_FETCHED,
        data
    }
}

export function failedFetched(err) {
    return {
        type: FAILED_FETCHED,
        err
    }
}

export function Fetcher(uri) {
    return dispatch => {
        dispatch(startFetching()); // start fetching

        axios.get(uri).then(res =>{
            dispatch(successFetched(res.data));
        }).catch(err => {
            dispatch(failedFetched(err));
        })

    }
}