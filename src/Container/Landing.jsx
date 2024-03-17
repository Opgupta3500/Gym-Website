import React, { useState, useEffect } from 'react';
import gymImage from "./gym.png";

function Landing() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className='h-16 w-full flex justify-center items-center fixed z-20'>
          <div className="container mx-auto flex items-center justify-around">
            <div className="text-purple-600 text-4xl font-bold italic">
              <span>Op Fitness</span>
            </div>
            <div>
              <ul className="flex space-x-4 gap-3 text-white text-xl">
                <li><a href="#" className="hover:bg-gray-900 hover:bg-opacity-35 transition duration-100 px-6 py-2 rounded-full font-bold">Home</a></li>
                <li><a href="#" className="hover:bg-gray-900 hover:bg-opacity-35 transition duration-100 px-6 py-2 rounded-full font-bold">About Us</a></li>
                <li><a href="#" className="hover:bg-gray-900 hover:bg-opacity-35 transition duration-100 px-6 py-2 rounded-full font-bold">Pricing</a></li>
                <li><a href="#" className="hover:bg-gray-900 hover:bg-opacity-35 transition duration-100 px-6 py-2 rounded-full font-bold">Trainers</a></li>
                <li><a href="#" className="hover:bg-gray-900 hover:bg-opacity-35 transition duration-100 px-6 py-2 rounded-full font-bold">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <button className='bg-indigo-500 text-white px-6 py-2 rounded-full hover:bg-indigo-700 focus:outline-none focus:shadow-outline-indigo active:bg-indigo-800'>Join Now</button>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-fit bg-center min-h-screen flex items-center relative  justify-start z-10">
          <img src={gymImage} alt="Gym Background" className="absolute inset-0 w-full h-full object-cover" />
          <div className={`text-white text-left z-10 flex flex-col items-start ml-24 transition-all duration-1000 ${showContent ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
            <h1 className="text-4xl font-bold mb-4">Unleash Your Strength: <br />Elevate Your Fitness Journey with Us!</h1>
            <p className="text-lg mb-6">
              Embark on a transformative fitness journey at our gym, where body and <br /> mind unite. Expert trainers, cutting-edge facilities, and a supportive community <br /> await. Start your empowering adventure today.
            </p>
            <button className="bg-indigo-500 text-white px-6 py-3 rounded-full hover:bg-indigo-700 focus:outline-none focus:shadow-outline-indigo active:bg-indigo-800">
              Start Now
            </button>
          </div>
        </div>
    </>
  );
}

export default Landing;

