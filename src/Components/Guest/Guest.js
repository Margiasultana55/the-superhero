import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './Guest.css'

const Guest = (props) => {


    const { picture, name, age, gender, company, email, cost } = props.guest;
    const element = <FontAwesomeIcon icon={faUserPlus} />
    // console.log(props.guest.cost);
    return (
        <div className='guest'>
            <img src={picture} alt="" srcset="" />
            <h4 className='guest-name'>Name: {name}</h4>
            <h5><small>Age:{age}</small></h5>
            <h5><small>Gender:{gender}</small></h5>
            <h5><small>Company: {company}</small></h5>
            <h5><small>Email: {email}</small></h5>
            <h4 className='cost'>Cost: ${cost}</h4>
            <button
                onClick={() => props.handleAdd(props.guest)}
            >{element} <span className='add-btn'>Add</span></button>

        </div>
    );
};

export default Guest;