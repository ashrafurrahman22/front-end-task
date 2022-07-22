import { faArrowLeft, faArrowRotateBack } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Procede = () => {
    return (
        <div className='my-5 lg:flex md:flex justify-between'>
            <div className='flex items-center gap-5 cursor-pointer'>
                <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                <h3>Back</h3>
            </div>

            <div className='lg:flex md:flex gap-5'>
            <button style={{backgroundColor: 'white'}} className='btn btn-none px-9 text-black rounded-full'>Continue shopping</button>
            <button style={{backgroundColor: '#7AD0A7'}} className='btn btn-info text-white px-9 rounded-full'>Procede to payment</button>
            </div>
        </div>
    );
};

export default Procede;