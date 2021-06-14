import React from 'react';
import {connect} from  'react-redux';
  
function StepTwo(props){
    return(
        <h1>my name: {props.username} and i {props.userage} years old from: {props.usercity} my email: {props.useremail} and my TelephoneNumber: {props.userphone}</h1>
    );
}

export default connect(
    (state) => {
        return{
            username: state.name,
            userage: state.age,
            usercity: state.city,
            useremail: state.email,
            userphone: state.telephoneNumber,
        }
    },
    null
)(StepTwo);