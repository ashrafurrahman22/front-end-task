import { faTruckFast, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Payment = () => {
    return (
        <div>
            <div class="flex bg-base-100 my-7 p-4">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case lg:text-xl text-base">Shipping & Payment</a>
  </div>

  <div class="flex">

    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle">
        <div class="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          
        </div>
      </label>

    </div>

        <div className='flex justify-center items-center mx-4'>
        <div className='h-0.5 w-16 bg-red-200'>
            </div>
        </div>
    

    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 flex justify-center items-center rounded-full">
          <FontAwesomeIcon className='text-3xl rounded-full  text-red-600' icon={faTruckFast}></FontAwesomeIcon>
        </div>
      </label>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Payment;