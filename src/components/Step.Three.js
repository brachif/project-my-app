import React from 'react';
import {connect} from 'react-redux';

function StepThree(props){
    return(
        <div>
            <ul class="list-group">
            {/* {//הייתי באמצע לעבוד על זה
                props.users.map(singleUser => <option key={singleUser.idUser} onClick={(e) => handleSelected(v => e, singleUser)}>{singleUser.name} {singleUser.email}</option>)
            } */}
            <li class="list-group-item">{props.username} {props.useremail}</li>
            </ul>
        </div>
    );
}

export default connect(
    (state) =>
        ({
            username: state.name,
            useremail: state.email
        }),
    // {
    //     users: 
    // }
)(StepThree);