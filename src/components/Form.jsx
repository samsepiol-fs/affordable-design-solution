import { useState } from 'react'
import Button from './Button';
import Heading from './Heading';

const Form = () => {
    const [formData, setFormData] = useState({
        name:"",
        phone:"",
        businessType:"",
        message:"",
       });
    
       const handleChange = (e) => {
        setFormData({...formData, [e.target.id]: e.target.value });
       };

       const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:priteshshukla.dev@gmail.com?subject=Regarding ${formData.businessType}&body=Name: ${formData.name}%0A Phone: ${formData.phone}%0A Message: ${formData.message}`;
        window.location.href = mailtoLink;
        };
  return (

    <div className="mt-20 mx-auto max-w-screen-lg">
        <Heading title="Send us a message"/>
        <form onSubmit={handleSubmit}>
            <div className="container border border-n-6 rounded-[2rem] my-8 md:my-20 px-6 md:px-20 py-8 md:py-14 lg:py-20 ">
                <div className="flex flex-col gap-4 lg:px-20 lg:py-10">
                    <p className='text-n-2 mb-2 mt-2 font-bold' >Your Name</p>
                    <input 
                        type="text" 
                        id='name' 
                        required
                        onChange={handleChange}
                        value={formData.name}
                        className='border border-n-4 p-2 rounded-lg  text-sm bg-n-1/10'
                        placeholder='enter your name...'
                    />
                    <p className='text-n-2 mb-2 mt-2 font-bold'> Your Phone</p>
                    <input 
                        type="tel" 
                        id='phone' 
                        required
                        onChange={handleChange}
                        value={formData.phone}
                        className='border border-n-4 p-2 rounded-lg text-sm bg-n-1/10'
                        placeholder='enter your phone number...'
                    />
                    <p className='text-n-2 mb-2 mt-2 font-bold'>Your Business Type</p>
                    <input 
                        type="text" 
                        id='businessType' 
                        required
                        onChange={handleChange}
                        value={formData.businessType}
                        className='border border-n-4 p-2 rounded-lg text-sm bg-n-1/10'
                        placeholder='e-commerce, coaching, etc.'
                    />
                    <p className='text-n-2 mb-2 mt-2 font-bold'>Message </p>
                    <textarea 
                        name="message" 
                        id="message"  
                        rows="4"
                        onChange={handleChange}
                        value={formData.message}
                        className='border border-n-4 p-2 rounded-lg lg:w-full text-sm bg-n-1/10'
                        placeholder='your meassage...'
                    />
                    <Button className="mt-6" type="submit" white>
                        Send message
                    </Button>
                </div>
                
            </div>
        </form>
    </div>
    
  )
}

export default Form