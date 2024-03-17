import React, { useState, useEffect } from 'react';
import gymImage2 from "./gym2.jpg";

function Aboutme() {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 500);

        return () => clearTimeout(timer);
    });

    return (
        <div className="flex justify-end items-center min-h-screen relative bg-cover bg-center" style={{ backgroundImage: `url(${gymImage2})` }}>
            <div className={`text-white text-left flex flex-col items-start p-8 ${showContent ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
                <h1 className="text-4xl font-bold mb-4">About Us!</h1>
                <p className="text-lg mb-6">
                Welcome to <span className='text-purple-600 text-xl font-bold italic'>Op Fitness</span>, where fitness meets community. <br />
                We're dedicated to helping you reach your goals.<br />
                Our experienced trainers offer personalized programs.<br />
                From one-on-one sessions to group classes, we cater to all levels.<br />
                We believe in holistic wellness—mind, body, and spirit.<br />
                Join our supportive community for motivation and camaraderie.<br />
                Beyond workouts, we offer nutrition counseling and recovery services.<br />
                At <span className='text-purple-600 text-xl font-bold italic'>Op Fitness</span>, you're not just a member, you're family.<br />
                Start your journey to a stronger, healthier you today.<br />
                Discover the difference at <span className='text-purple-600 text-xl font-bold italic'>Op Fitness</span>.
                </p>
            </div>
        </div>
    )
}

export default Aboutme;



