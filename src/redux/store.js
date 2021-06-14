import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(
    reducer,
    {
        name: 'FullName',
        age: 'Age',
        city: 'City',
        email: 'Email',
        telephoneNumber: 'TelephoneNumber'
    }
)
export default store;