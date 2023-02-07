import axios from "axios";
import { reducerCases } from "./Constants";

export const initialState = [{
    firstName: null,
    lastName: null,
    phoneNumber: 0,
    age: 0,
}]

const reducer = (state = initialState, action={}) => {
    switch (action.type) {
        case reducerCases.INITIAL:
            const getdata = axios.get('https://blue-journalist-bbrpv.ineuron.app:4000/users');
            getdata.then(() => console.log('successfully stored'))
            return action.payload;

        case reducerCases.CREATE:
            const data = axios.post('https://blue-journalist-bbrpv.ineuron.app:4000/user/create', action.payload);
            data.then(() => console.log('successfully added'))
            return [
                ...state,
                action.payload
            ];

        case reducerCases.UPDATE:
            const updatedata = axios.post('https://blue-journalist-bbrpv.ineuron.app:4000/user/' + action.id, action.payload);
            updatedata.then(() => console.log('successfully updated'))
            return [
                ...state,
                ...action.payload
            ];
        
        case reducerCases.USER_INFO:
            const user = axios.get('https://blue-journalist-bbrpv.ineuron.app:4000/user/' + action.payload)
            .then((res) => {
                return res.data.data;
            });
              
            return {
                ...state,
                user: user
            };
        case reducerCases.DELETE:
            axios.delete(`https://blue-journalist-bbrpv.ineuron.app:4000/user/${action.payload}`)
                .then(() => console.log('successfully deleted'))
            return state.filter((item) => item._id !== action.payload)

        default:
            return state;
    }
}

export default reducer;