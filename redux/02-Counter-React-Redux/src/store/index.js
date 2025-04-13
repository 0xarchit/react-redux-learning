import { createStore } from 'redux';

const INITIAL_VALUE = 
    {
        counter: 0,
};
    
const counterReducer = (store = INITIAL_VALUE, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {...store, counter: store.counter + 1};
        case "DECREMENT":
            return {...store, counter: store.counter - 1};
        case "RESET":
            return {...store, counter: 0 };
        case "ADD":
            return {...store, counter: store.counter + Number(action.payload)};
        default:
            return store;
    }
}
const counterStore = createStore(counterReducer);

export default counterStore;