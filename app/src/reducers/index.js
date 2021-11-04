import { FETCH_START, FETCH_ERROR, FETCH_SUCCESS } from './../actions';

const initialState = {
    isLoading: false,
    error: '',

}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:  
            return {
                ...state,
                isLoading: true,
            }

        case FETCH_SUCCESS:  
            return {
                ...state,
                isLoading: true,
            }
        
        case FETCH_ERROR:  
            return {
                ...state,
                error: action.payload,
            }
    }
}