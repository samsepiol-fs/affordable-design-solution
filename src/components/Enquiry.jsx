import { useState } from 'react'
import { check } from '../assets'
import { collabContent} from '../constants'
import Button from './Button'
import Section from './Section'
import {LeftCurve, RightCurve} from './design/Collaboration'
import {Link} from 'react-router-dom';

const Enquiry = () => {
   const [formData, setFormData] = useState({
    name:"",
    email:"",
    phone:"",
    businessType:"",
    message:"",
   });

   const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value });
   };

   const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:rishabhbhatt1713@gmail.com?subject=Regarding ${formData.businessType}&body=Name: ${formData.name}%0A Phone: ${formData.phone}%0A Message: ${formData.message}`;
        window.location.href = mailtoLink;
    };

  return (
    <Section crosses id="enquiry">
        <div className="container lg:flex">
            <div className="max-w-[25rem]">
                <h2 className='h2 mb-4 md:mb-8'>
                    Get Free Business Growth Advice Today !
                </h2>
                <ul className='max-w-[22rem] mb-10 md:mb-14'>
                    {collabContent.map((item) => (
                        <li className='mb-3 py-3' key={item.id}>
                            <div className="flex items-center">
                                <img src={check} alt="check" width={24} height={24}/>
                                <h6 className='body-2 ml-5'>{item.title}</h6>
                            </div>
                            {item.text && <p className='body-2 mt-3 text-n-4 '>{item.text}</p> }
                        </li>
                    ))}
                </ul>
                <Button href="/about-us"> Learn more about us </Button>
            </div>
            <div className="lg:ml-auto xl:w-[38rem] mt-4" >
                <p className='body-2 mb-4 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto'>
                    Need Help? We will help you grow your business! Send us a Message, today.

                </p>
                <form onSubmit={handleSubmit}>
                    <div className="relative left-1/2  w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 md:scale-100">
                        <div className="flex flex-col gap-4">
                            <p className='tagline mb-2 mt-2 font-bold' >Your Name</p>
                            <input 
                                type="text" 
                                id='name' 
                                required
                                onChange={handleChange}
                                value={formData.name}
                                className='border border-n-4 p-2 rounded-lg flex-grow text-xs bg-n-1/10'
                                placeholder='enter your name...'
                            />
                            <p className='tagline mb-2 mt-2 font-bold'> Your Phone</p>
                            <input 
                                type="tel" 
                                id='phone' 
                                required
                                onChange={handleChange}
                                value={formData.phone}
                                className='border border-n-4 p-2 rounded-lg flex-grow text-xs bg-n-1/10'
                                placeholder='enter your phone number...'
                            />
                            <p className='tagline mb-2 mt-2 font-bold'>Your Business Type</p>
                            <input 
                                type="text" 
                                id='businessType' 
                                required
                                onChange={handleChange}
                                value={formData.businessType}
                                className='border border-n-4 p-2 rounded-lg text-xs bg-n-1/10'
                                placeholder='e-commerce, coaching, etc.'
                            />
                            <p className='tagline mb-2 mt-2 font-bold'>Drop a message</p>
                            <textarea 
                                name="message" 
                                id="message"  
                                rows="2"
                                onChange={handleChange}
                                value={formData.message}
                                className='border border-n-4 p-2 rounded-lg lg:w-full text-xs bg-n-1/10'
                                placeholder='your meassage...'
                            />
                            <Button className="mt-6" type="submit">
                                Send Message
                            </Button>
                        </div>
                        <LeftCurve />
                        <RightCurve />
                    </div>
                </form>
            </div>
        </div>
    </Section>
  )
}

export default Enquiry