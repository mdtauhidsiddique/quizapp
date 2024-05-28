// import React, { useState, useEffect } from 'react';
// import logo from '../assets/images/logoimg.png';
// import '../App.css';

// const Header = () => {
//   const [timeLeft, setTimeLeft] = useState(20* 60); // 20 minutes in seconds

//   // Function to format time to display as MM:SS
//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
//   };

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft((prevTime) => {
//         if (prevTime === 0) {
//           clearInterval(timer);
//           // Optionally, you can perform an action when the timer reaches 0
//           // For example: console.log("Timer finished");
//         }
//         return prevTime > 0 ? prevTime - 1 : prevTime;
//       });
//     }, 1000);

//     // Cleanup function to clear the interval when the component unmounts
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div>
//       <header className='flex h-20 text-white items-center justify-between px-20 gap-2 bg-blue-950'>
//         <div>
//           <img className='w-28 h-16 rounded-md' src={logo} alt="" />
//         </div>
//         {/* <marquee behavior="scroll" scrollamount="10" direction="" className="name text-2xl">Venture Consultancy Services</marquee> */}
//         <div className='text-2xl shadow-lg'>
//            Venture Consultancy Services Pvt.Ltd.
//         </div>
//         <div className='text-nowrap'>Timer: {formatTime(timeLeft)}</div>
//       </header>
//     </div>
//   );
// };

// export default Header;

import React from 'react';
import logo from '../assets/images/logoimg.png';
import '../App.css';

const Header = ({ timeLeft }) => {
  return (
    <div>
      <header className='flex h-20 text-white items-center justify-between px-20 gap-2 bg-blue-950'>
        <div>
          <img className='w-28 h-16 rounded-md' src={logo} alt="" />
        </div>
        <div className='text-2xl shadow-lg'>
           Venture Consultancy Services Pvt.Ltd.
        </div>
        <div className='text-nowrap'>Timer: {timeLeft}</div>
      </header>
    </div>
  );
};

export default Header;

