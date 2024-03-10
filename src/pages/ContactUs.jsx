import React from 'react'
import Section from '../components/Section'
import { smallSphere, stars } from '../assets'
import Heading from '../components/Heading'
import Cards from '../components/Cards'
import { LeftLine, RightLine} from '../components/design/Pricing';
import Form from '../components/Form'
const ContactUs = () => {
  return (
    <Section className="overflow-hidden">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex"
        >
          <img src={smallSphere} alt="sphere" className='relative z-1' width={255} height={255} 
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2"
          >
            <img src={stars} alt="stars" className='w-full' width={950} height={400}
            />
          </div>
        </div>
        <Heading
         tag="Get in touch with us today!"
         title="Contact us"
        />
        <div className="relative">
          <Cards />
          <LeftLine />
          <RightLine />
        </div>
        <Form />
      </div>
    </Section>
  )
}

export default ContactUs