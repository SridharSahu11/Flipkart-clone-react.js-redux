import { legacy_createStore as createStore } from "redux";
import rootreducer from "../Reducer/Reducer";

let store=createStore(rootreducer)


export default store;