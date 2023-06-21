import {combineReducers} from "redux";

function CounterReducer(state=0,Action){
    switch (Action.type) {
        case "increment":
            return state + Action.payload;
        default:
            return state;
    }
}
function AddCartReducer(state=[],Action){
    switch (Action.type) {
        case "AddCart":
            return [...state,Action.payload];
        case "RemoveCart":
            return state.filter(data=>data.id != Action.payload.id)

        default:
            return state;
    }
}

const rootreducer = combineReducers({CounterReducer, AddCartReducer})

export default rootreducer