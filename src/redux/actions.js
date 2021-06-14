export const SET_NAME = 'SET NAME';
export const SET_AGE = 'SET AGE';
export const SET_CITY = 'SET CITY';
export const SET_EMAIL = 'SET EMAIL';
export const SET_PHONE = 'SET PHONE';


export function setName(newName){
    return{
        type: SET_NAME,
        payload: newName
    }
};

export function setAge(newAge){
    return{
        type: SET_AGE,
        payload: newAge
    }
};

export function setCity(newCity){
    return{
        type: SET_CITY,
        payload: newCity
    }
};

export function setEmail(newEmail){
    return{
        type: SET_EMAIL,
        payload: newEmail
    }
};

export function setPhone(newPhone){
    return{
        type: SET_PHONE,
        payload: newPhone
    }
}

