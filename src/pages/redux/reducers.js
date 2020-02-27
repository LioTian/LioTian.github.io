import counter from './actions/counter';

export default function combineReducers(state={}, action) {
    return {
        counter: counter(state.counter, action)
    }
}