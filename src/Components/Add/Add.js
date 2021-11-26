import React from 'react';
import './Add.css'

const Add = (props) => {


    const { add } = props;


    console.log(add);
    let total = 0;
    for (const member of add) {
        total = total + member.cost;


    }



    return (
        <div className='add-section'>

            <h3><span className='text-color'>Total guest:</span>{props.add.length}</h3>

            <h4><span className='text-color'>Total Cost</span>: ${total}</h4>
            <ul className='name-list'>

                {
                    add.map(guest => <li key={guest.key}>
                        {guest.name} </li>)
                }
            </ul>

        </div>
    );
};

export default Add;