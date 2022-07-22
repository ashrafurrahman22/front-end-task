import React from 'react';

const PaymentMethod = () => {
    return (
        <div>
            
            {/* payment method */}
            <div>
            <h3 className='text-xl'>Payment Method</h3>
            <div className='flex items-center gap-5 my-5'>
            <button style={{backgroundColor: 'lightcoral'}} className='btn btn-none px-6 rounded-full'>Log in</button>
            <button style={{backgroundColor: 'white'}} className='btn btn-info px-6 rounded-full'>Sign Up</button>
            <button style={{backgroundColor: 'white'}} className='btn btn-info px-6 rounded-full'>Sign Up</button>
            </div>


            <div className='flex items-center gap-5 my-5'>
            <button style={{backgroundColor: 'lightcoral'}} className='btn btn-none px-6 rounded-full'>Log in</button>
            <button style={{backgroundColor: 'white'}} className='btn btn-info px-6 rounded-full'>Sign Up</button>
            <button style={{backgroundColor: 'white'}} className='btn btn-info px-6 rounded-full'>Sign Up</button>
            </div>
            </div>

            {/* delivery method */}
            <div>
            <h3 className='text-xl'>Delivery Method</h3>
            <div className='flex items-center gap-5 my-5'>
            <button style={{backgroundColor: 'lightcoral'}} className='btn btn-none px-10 rounded-full'>Log in</button>
            <button style={{backgroundColor: 'white'}} className='btn btn-info px-10 rounded-full'>Sign Up</button>
            </div>


            <div className='flex items-center gap-5 my-5'>
            <button style={{backgroundColor: 'lightcoral'}} className='btn btn-none px-10 rounded-full'>Log in</button>
            <button style={{backgroundColor: 'white'}} className='btn btn-info px-10 rounded-full'>Sign Up</button>
            </div>
            </div>

        </div>
    );
};

export default PaymentMethod;