// import React from 'react'
// import Section from '../components/Section'
// import Heading from '../components/Heading'
// import { check, service1, service2, service3 } from '../assets'
// import { brainwaveServices, brainwaveServicesIcons } from '../constants'
// import { PhotoChatMessage, VideoBar, VideoChatMessage } from '../components/design/Services'
// import { Gradient } from '../components/design/Hero'

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SocialMediaManagement = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0,0);
  }, [location]);
  // return (
  //   <Section>
  //     <div className="container">
  //       <Heading
  //         className="h1"
  //         title="Best Graphic Design Solutions in Dehradun"
  //         text="Want awesome graphic design in Dehradun? Pick Affordable Design Solutions. We make your brand look cool with great visuals. Our creative experts can bring your ideas to life. Contact us today for a fresh new look!"
  //       />
  //       <div className="relative ">
  //         <div 
  //           className="relative z-1 flex items-center
  //           h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl
  //           overflow-hidden lg:p-20 xl:h-[46rem]"
  //         >
  //           <div 
  //             className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5
  //             xl:w-auto"
  //           >
  //             <img 
  //               src={service1}
  //               alt="service1" 
  //               className='w-full h-full object-cover md:object-right '
  //               width={800} height={730}
  //             />
  //           </div>
  //           <div 
  //             className="relative z-1 max-w-[17rem] ml-auto"
  //           >
  //             <h4 className='h4 mb-4'>
  //               Graphic Design Services
  //             </h4>
  //             <p className='body-2 mb-[3rem] text-n-3'>
  //               Affordable Design Solutions helps you unlock the potential of your business.
  //             </p>
  //             <ul className='body-2'>
  //               {brainwaveServices.map((item, index) => (
  //                 <li 
  //                   className='flex items-start py-4 border-t border-n-6'
  //                   key={index}
  //                 >
  //                   <img src={check} alt="check" width={24} height={24}/>
  //                   <p className='ml-4'>{item}</p>
  //                 </li>
  //               ))}
  //             </ul>
  //           </div>
  //           <div 
  //             className="absolute left-4 right-4 bottom-4 border-n-1/10 
  //             lg:left-1/2 lg:right-auto lg:bottom-8 lg:-translate-x-1/2"
  //           >
  //             Ai is genreting
  //           </div>
  //         </div>
  //         <div className="relative z-1 grid gap-5 lg:grid-cols-2">
  //            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
  //             <div className="absolute inset-0">
  //               <img src={service2} className='h-full w-full object-cover' width={630} height={750} alt="service2" />
  //             </div>
  //             <div 
  //               className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b
  //               from-n-8/0 to-n-8/90 lg:p-15"
  //             >
  //               <h4 className='h4 mb-4'>
  //                 Graphic Design Services
  //               </h4>
  //               <p className='body-2 mb-[3rem] text-n-3'>
  //                 Affordable Design Solutions helps you unlock the potential of your business.
  //               </p>
  //             </div>

  //             <PhotoChatMessage/>
  //            </div>
  //            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
  //             <div className="py-12 px-4 xl:px-8">
  //               <h4 className='h4 mb-4'>
  //                 video generation
  //               </h4>
  //               <p className='body-2 mb-[2rem] text-n-3'>
  //                 Affordable Design Solutions helps you unlock the potential of your business.
  //               </p>

  //               <ul className='flex items-center justify-between'>
  //                 {brainwaveServicesIcons.map((item, index) => (
  //                   <li 
  //                     key={index} 
  //                     className={`rounded-2xl flex items-center justify-center 
  //                     ${index === 2? 'w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]' 
  //                     : 'flex w-10 h-10 bg-n-6 md:w-15 md:h-15'} `}
  //                   >
  //                     <div className={index === 2 ? 'flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]' : ''}>
  //                       <img src={item} alt="item" width={24} height={24} />
  //                     </div>
  //                   </li>
  //                 ))}
  //               </ul>
  //             </div>
  //             <div className='relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]'>
  //               <img src={service3} alt="service3" className='w-full h-full object-cover' width={520} height={400}/>
  //               <VideoChatMessage />
  //               <VideoBar/>
  //             </div>
  //            </div>
  //         </div>
  //         <Gradient />
  //       </div>
  //     </div>
  //   </Section>
  // )
}

export default SocialMediaManagement