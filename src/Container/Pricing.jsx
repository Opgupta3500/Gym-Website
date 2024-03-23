import React from 'react';

function Pricing() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className=" ">
        <div className="text-center font-semibold">
          <h1 className="text-5xl">
            <span className="text-white ml-28">Pricing</span>
            <span>Plans</span>
          </h1>
          <p className="pt-6 text-xl text-gray-400 font-normal w-full px-8 md:w-full">
            Choose a plan that works best for You
          </p>
        </div>
        <div className="pt-24 flex flex-row ">
          <div className="w-96 p-8 bg-white text-center rounded-3xl pr-16 shadow-xl hover:scale-125 transition duration-100 hover:z-10">
            <h1 className="text-black font-semibold text-2xl">Monthly</h1>
            <p className="pt-2 tracking-wide">
              <span className="text-gray-400 align-top">₹</span>
              <span className="text-3xl font-semibold">1000</span>
              <span className="text-gray-400 font-medium">/ user</span>
            </p>
            <hr className="mt-4 border-1"/>
            <div className="pt-8">
              <p className="font-semibold  text-start">
                <span>
                  Have Access of All gyming Tools
                </span>
              </p>
              <p className="font-semibold  text-start pt-5">
                <span>
                  Trainer Support
                </span>
              </p>
              <p className="font-semibold  text-start pt-5">
                <span>
                  Can play table tennis
                </span>
              </p>

              <a href="#" className="">
                <p className="w-full py-4 bg-indigo-500 mt-8 rounded-xl text-white hover:bg-indigo-700">
                  <span className="font-medium">
                    Choose Plan
                  </span>
                </p>
              </a>
            </div>
          </div>
          <div className="w-80 p-8 bg-gray-900 text-center rounded-3xl text-white border-4 shadow-xl border-white transform scale-110 hover:scale-125 transition duration-100">
            <h1 className="text-white font-semibold text-2xl">Yearly</h1>
            <p className="pt-2 tracking-wide">
              <span className="text-gray-400 align-top">₹</span>
              <span className="text-3xl font-semibold">10000</span>
              <span className="text-gray-400 font-medium">/ user</span>
            </p>
            <hr className="mt-4 border-1 border-gray-600"/>
            <div className="pt-8">
              <p className="font-semibold  text-start">
                <span>
                  Have Access of All gyming Tools
                </span>
              </p>
              <p className="font-semibold  text-start pt-5">
                <span>
                  Trainer Support
                </span>
              </p>
              <p className="font-semibold  text-start pt-5">
                <span>
                  Can play table tennis
                </span>
              </p>

              <a href="#" className="">
                <p className="w-full py-4 bg-indigo-500 mt-8 rounded-xl text-white hover:bg-indigo-700">
                  <span className="font-medium">
                    Choose Plan
                  </span>
                </p>
              </a>
            </div>
            <div className="absolute top-4 right-4 ">
              <p className="bg-blue-700 font-semibold px-4 py-1 rounded-full uppercase text-xs">Popular</p>
            </div>
          </div>
          <div className="w-96 p-8 bg-white text-center rounded-3xl pl-16 shadow-xl hover:scale-125 transition duration-100 hover:z-10">
            <h1 className="text-black font-semibold text-2xl">Quaterly</h1>
            <p className="pt-2 tracking-wide">
              <span className="text-gray-400 align-top">₹</span>
              <span className="text-3xl font-semibold">2500</span>
              <span className="text-gray-400 font-medium">/ user</span>
            </p>
            <hr className="mt-4 border-1"/>
            <div className="pt-8">
              <p className="font-semibold  text-start">
                <span>
                  Have Access of All gyming Tools
                </span>
              </p>
              <p className="font-semibold  text-start pt-5">
                <span>
                  Trainer Support
                </span>
              </p>
              <p className="font-semibold  text-start pt-5">
                <span>
                  Can play table tennis
                </span>
              </p>

              <a href="#" className="">
                <p className="w-full py-4 bg-indigo-500 mt-8 rounded-xl text-white hover:bg-indigo-700">
                  <span className="font-medium">
                    Choose Plan
                  </span>
                  <span className="pl-2 material-icons align-middle text-sm">
                    east
                  </span>
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
