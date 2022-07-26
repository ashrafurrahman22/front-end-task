import { faTruckDroplet, faTruckMonster, faTruckPickup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Cart = () => {
  return (
    <div>
      <div>
        <h3 className="text-xl">Your Cart</h3>

        <div className="flex justify-center items-center flex-col">
        {/* first div */}
        <div className="flex justify-center items-center gap-3 my-5">
          {/* image */}
          <div class="w-10 rounded-full">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
          </div>
          {/* info */}
          <div>
            <h4>T-Shirt</h4>
            <p>Summer Vibes</p>
            <p>
              <small>#261311</small>
            </p>
          </div>
          {/* total */}
          <div>
            <h3 className="text-left font-semibold text-xl">$89.99</h3>
          </div>
        </div>

        {/* first div */}
        <div className="flex justify-center items-center gap-3 my-5">
          {/* image */}
          <div class="w-10 rounded-full">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="lg:w-10 rounded-full">
                <img src="https://static.fibre2fashion.com/MemberResources/LeadResources/1/2017/9/Seller/17133153/Images/17133153_0_men-s-t-shirt.jpg" />
              </div>
            </label>
          </div>
          {/* info */}
          <div>
            <h4>Basic Slim</h4>
            <p>Summer Vibes</p>
            <p>
              <small>#212315</small>
            </p>
          </div>
          {/* total */}
          <div>
            <h3 className="text-left font-semibold text-xl">$69.99</h3>
          </div>
        </div>
        
        </div>

        <button className="btn btn-info ml-5 lg:flex md:mx-auto w-full justify-center gap-5 rounded-full px-10">
          <h3 className="text-red-400">Total Cost:</h3>
          <h3>$159,98</h3>
        </button>

        <div className="my-5 flex justify-center items-center gap-5">
          <FontAwesomeIcon className="text-2xl" icon={faTruckDroplet}></FontAwesomeIcon>
          <h3 className="text-center">You are $30,02 away <br /> from free shipping! </h3>
        </div>
      </div>
    </div>
  );
};

export default Cart;
