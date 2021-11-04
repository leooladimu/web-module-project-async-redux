import axios from 'axios'; 

export const FETCH_START = "FETCH_START";
export const fetchStart = () => {
    return({type: FETCH_START});
}

export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const fetchSuccess = (res) => {
    return({type: FETCH_SUCCESS, payload: res});
}

export const FETCH_ERROR = "FETCH_ERROR";
export const fetchError = (errorMessage)=> {
    return({type: FETCH_ERROR, payload: errorMessage});
}

export const fetchSongs = () => {
    return (dispatch) => {
        dispatch(fetchStart()); 
        axios.get('https://api.kraken.com/0/public/Ticker?pair=xbtusd')
          .then(r => {
            dispatch(fetchSuccess(r.data.results));
        })
        .catch(err => {
            dispatch(fetchError(err));
        });
    }
}

