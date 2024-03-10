import Section from '../components/Section';
import Heading from '../components/Heading'
const AboutUs = () => {
  return (
    <Section>
      <Heading title="About us" text="" className=" p-[0.5rem] "/>
      <div className="container border border-n-6 rounded-[2rem] p-[5rem] ">
        <h4 className='h4 mb-10 text-n-2 border-b w-1/4 border-n-6 p-[2rem] '>Overview</h4>
        <p className='body-1 mt-20 text-n-2'>
          At Affordable Design Solutions, our mission is simple yet profound: to democratize design
          by making high-quality services accessible to everyone at an affordable price. We
          recognize the prevalent reliance on outdated methods, such as hand-painted signage,
          which not only detracts from the professional image of businesses but also limits their
          reach in the digital age.
        
        </p>

        <p className='body-1 mt-20 text-n-2'>
          Our goal is to bridge this gap by digitalizing businesses, providing them with modern, eye-
          catching designs that elevate their brand presence and unlock new opportunities for
          growth. By offering comprehensive design solutions, including website development
        </p>
      </div>
    </Section>
  )
} 

export default AboutUs