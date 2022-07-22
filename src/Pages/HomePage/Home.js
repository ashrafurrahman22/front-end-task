import React from 'react';
import Cart from './Cart';
import Input from './Input';
import Payment from './Payment';
import PaymentMethod from './PaymentMethod';
import Procede from './Procede';

const Home = () => {
    return (
        <div>
            <Payment></Payment>

            <div className='lg:flex font-light normal-case  items-center justify-center gap-8'>
            <Input></Input>
            <PaymentMethod></PaymentMethod>
            <Cart></Cart>
            </div>
            
            <Procede></Procede>
        </div>
    );
};

export default Home;