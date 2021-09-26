import React, { useEffect, useState } from 'react';
import Add from '../Add/Add';
import Guest from '../Guest/Guest';
import './People.css';

const People = () => {
    const [guests, setGuests] = useState([]);

    const [add, setAdd] = useState([]);


    useEffect(() => {
        fetch('./product.json')
            .then(res => res.json())
            .then(data => setGuests(data));
    }, [])

    const handleAdd = (guest) => {

        const newAdd = [...add, guest]
        setAdd(newAdd);
        console.log(add);
    }
    return (
        <div className='people-container'>
            <div>
                <div className='guest-container'>
                    {
                        guests.map(guest => <Guest
                            key={guest.key}
                            guest={guest}
                            handleAdd={handleAdd}

                        ></Guest>)

                    }
                </div>
            </div>
            <div className="add-guest">

                <Add add={add}></Add>
            </div>

        </div>
    );
};

export default People;