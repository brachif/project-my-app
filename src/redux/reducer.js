import {SET_NAME} from './actions';
import {SET_AGE} from './actions';
import {SET_CITY} from './actions';
import {SET_EMAIL} from './actions';
import {SET_PHONE} from './actions';

const initialState = {
    name: 'FullName',
    age: 'Age',
    city: 'City',
    email: 'Email',
    telephoneNumber: 'TelephoneNumber'
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case SET_NAME :
            return {...state, name:action.payload};
        case SET_AGE :
            return {...state, age:action.payload};
        case SET_CITY :
            return {...state, city:action.payload};
        case SET_EMAIL :
            return {...state, email:action.payload};
        case SET_PHONE :
            return {...state, telephoneNumber:action.payload};
        default:
            return state;
    }
}