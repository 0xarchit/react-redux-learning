import { createStore } from 'redux';

const INITIAL_VALUE = 
    {
        counter: 0,
};
    
const counterReducer = (store = INITIAL_VALUE, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {counter: store.counter + 1};
        case "DECREMENT":
            return { counter: store.counter - 1 };
        case "RESET":
            return { counter: 0 };
        case "ADD":
            return { counter: store.counter + Number(action.payload) };
        default:
            return store;
    }
}
const counterStore = createStore(counterReducer);

export default counterStore;