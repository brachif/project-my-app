import React, {useState} from 'react';
import {connect} from 'react-redux';
import {setName} from '../redux/actions';
import {setAge} from '../redux/actions';
import {setCity} from '../redux/actions';
import {setEmail} from '../redux/actions';
import {setPhone} from '../redux/actions';


function StepOne(props ,{history}){
    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [city,setCity] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');


    const handleName =(e) => {
        setName(e.target.value);
    }
    const handleAge =(e) => {
        setAge(e.target.value);
    }
    const handleCity =(e) => {
        setCity(e.target.selected);
    }
    const handleEmail =(e) => {
        setEmail(e.target.value);
    }
    const handlePhone =(e) => {
        setPhone(e.target.value);
    }

    const goToStepTwo = () => {
        props.changeName(name);
        props.changeAge(age);
        props.changeCity(city);
        props.changeEmail(email);
        props.changePhone(phone);
    }
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <div className="mb-3">
                        <label for="formGroupExampleInput" className="form-label">FullName</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" onChange={handleName} placeholder={name}></input>
                    </div>
                    <div className="mb-3">
                        <label for="formGroupExampleInput2" className="form-label">Age</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" onChange={handleAge} placeholder={age}></input>
                    </div>
                    <div className="mb-3">
                        <label for="formGroupExampleInput" className="form-label">City</label>
                        <select class="form-select" aria-label="Default select example" onSelect={handleCity}>
                            <option selected>{city}</option>
                            <option value="Jerusalem">Jerusalem</option>
                            <option value="Bne-Brak">Bne-Brak</option>
                            <option value="Tel-Aviv">Tel-Aviv</option>
                            <option value="Modiin-ilit">Modiin-ilit</option>
                            <option value="Ashdod">Ashdod</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label for="formGroupExampleInput2" className="form-label">Email</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" onChange={handleEmail} placeholder={email}></input>
                    </div>
                    <div className="mb-3">
                        <label for="formGroupExampleInput2" className="form-label">TelephoneNumber</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" onChange={handlePhone} placeholder={phone}></input>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={goToStepTwo}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default connect(
    undefined,
    (dispatch) => {
        return{
            changeName: function (newName){
                dispatch(setName(newName))
            },
            changeAge: function (newAge){
                dispatch(setAge(newAge))
            },
            changeCity: function (newCity){
                dispatch(setCity(newCity))
            },
            changeEmail: function (newEmail){
                dispatch(setEmail(newEmail))
            },
            changePhone: function (newPhone){
                dispatch(setPhone(newPhone))
            },
        }
    }
)(StepOne);