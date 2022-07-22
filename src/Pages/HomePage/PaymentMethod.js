import React from 'react';
import paypal from '../../assets/pament-card/paypal-logo-png-transparent.png';
import mastercard from '../../assets/pament-card/master.png';
import fedx from '../../assets/pament-card/fedx.png';
import visa from '../../assets/pament-card/visa.png';
import dhl from '../../assets/pament-card/DHL-Emblem.png';
import inpost from '../../assets/pament-card/inpost.png';
import dpd from '../../assets/pament-card/DPD_logo_(2015).svg.png';
import ideal from '../../assets/pament-card/ideal.png';
import discover from '../../assets/pament-card/discover.png';

const PaymentMethod = () => {
    return (
        <div>
            
            {/* payment method */}
            <div>
            <h3 className='text-xl'>Payment Method</h3>
            <div className='flex items-center gap-5 my-5'>
            <button style={{backgroundColor : 'white'}} className='btn btn-info px-6 rounded-full'>
                <img className='w-10' src={paypal} alt="" />
            </button>
            <button style={{backgroundColor : 'white'}} className='btn btn-info px-6 rounded-full'>
                <img className='w-10' src={visa} alt="" />
            </button>
            <button style={{backgroundColor : 'white'}} className='btn btn-info px-6 rounded-full'>
                <img className='w-10' src={mastercard} alt="" />
            </button>
            
            </div>


            <div className='flex items-center gap-5 my-5'>
            <button style={{backgroundColor : 'white'}} className='btn btn-info px-6 rounded-full'>
                <img className='w-10' src={mastercard} alt="" />
            </button>
            <button style={{backgroundColor : 'white'}} className='btn btn-info px-6 rounded-full'>
                <img className='w-10' src={discover} alt="" />
            </button>
            <button style={{backgroundColor : 'white'}} className='btn btn-info px-6 rounded-full'>
                <img className='w-10' src={ideal} alt="" />
            </button>
            </div>
            </div>

            {/* delivery method */}
            <div>
            <h3 className='text-xl'>Delivery Method</h3>
            <div className='flex items-center gap-5 my-5'>
            <button style={{backgroundColor : 'white'}} className='btn btn-info px-6 gap-5 rounded-full'>
                <img className='w-10' src={inpost} alt="" />
                <h3 className='normal-case text-sm'>$20.00</h3>
            </button>
            <button style={{backgroundColor : 'white'}} className='btn btn-info px-6 gap-5 rounded-full'>
                <img className='w-10' src={dpd} alt="" />
                <h3 className='normal-case text-sm'>$12.00</h3>
            </button>
            
            </div>


            <div className='flex items-center gap-5 my-5'>
            <button style={{backgroundColor : 'white'}} className='btn btn-info px-6 gap-5 rounded-full'>
                <img className='w-10' src={dhl} alt="" />
                <h3 className='normal-case text-sm'>$15.00</h3>
            </button>
            <button style={{backgroundColor : 'white'}} className='btn btn-info px-6 gap-5 rounded-full'>
                <img className='w-10' src={fedx} alt="" />
                <h3 className='normal-case text-sm'>$10.00</h3>
            </button>
            </div>
            </div>

        </div>
    );
};

export default PaymentMethod;