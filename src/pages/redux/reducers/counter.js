import {INCREMENT, DECRENENT, RESET} from '../actions/counter';

const initState = {
    count: 0
}

export default function counter(state = initState, action) {
    switch (action.type) {
        case INCREMENT: 
            return {
                count: state.count + 1
            };
        case DECRENENT: 
            return {
                count: state.count - 1
            };
        case RESET: 
            return { count: 0 };
        default:
            return state;
    }
}