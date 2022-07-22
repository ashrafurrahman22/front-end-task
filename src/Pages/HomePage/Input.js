import React from 'react';
import { Link } from 'react-router-dom';

const Input = () => {
    return (
        <div>
            <div className='flex items-center gap-5 my-5'>
            <Link to='/login' style={{backgroundColor: '#7AD0A7'}} className='btn btn-info text-white px-9 rounded-full'>Log in</Link>
            <Link to='/signup' style={{backgroundColor: 'white'}} className='btn btn-info px-9 rounded-full'>Sign Up</Link>
            </div>

            <h3 className='text-xl'>Shipping Information</h3>

            {/* inputs */}
          <div className='flex gap-5'>
          <div className='my-5 flex flex-col gap-5'>
                <input className='border rounded-full h-10 text-xl p-5' type="email" placeholder='Email' />
                <input className='border rounded-full h-10 text-xl p-5' type="text" placeholder='First name' />
                <input className='border rounded-full h-10 text-xl p-5' type="text" placeholder='Last name' />
                <input className='border rounded-full h-10 text-xl p-5' type="number" placeholder='Phone number' />
            </div>
            <div className='my-5 flex flex-col gap-5'>
                <input className='border rounded-full h-10 text-xl p-5' type="text" placeholder='Address' />
                <input className='border rounded-full h-10 text-xl p-5' type="text" placeholder='City' />
                <input className='border rounded-full h-10 text-xl p-5' type="number" placeholder='Postal Code/Zip' />
                <input className='border rounded-full h-10 text-xl p-5' type="text" placeholder='Country' />
            </div>
          </div>

        </div>
    );
};

export default Input;