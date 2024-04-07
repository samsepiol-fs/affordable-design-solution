import { grid } from '../assets';
import Heading from '../components/Heading';
import Section from '../components/Section';
import { services } from '../constants';
import Arrow from "../assets/svg/Arrow";
import { Link, useLocation } from 'react-router-dom';
import { Gradient } from "./design/Roadmap";
import { useEffect } from 'react';

const Services = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0,0);
  }, [location]);
  return (
    <Section id="services" className="overflow-hidden ">
      <div className="container md:pb-10">
        <Heading 
          tag= "What do we offer?"
          title="Our Services"
        />
        <Heading 
          tag="In today's world everyone is shifting towards digital whether it is a coaching or a business . Here at Affordable Design Solutions we will provide you a robust digital presence with our following Services."
        />
        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {services.map((item) => {
            
            return (
              
              <div key={item.id} className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] bg-n-6 hover:bg-conic-gradient`}>
                <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                  <div className="absolute top-0 left-0 max-w-full">
                    <img src={grid} 
                      alt="grid" 
                      className='w-full'
                      width={550}
                      height={550}
                    />
                  </div>
                  <div className="relative z-1 ">

                      <div className="mb-10 -my-10 -mx-15">
                        <img 
                          src={item.imageUrl} 
                          alt={item.title}
                          className='w-full'
                          width={630}
                          height={420}
                        />
                      </div>
                      <h4 className='h4 mb-4'> {item.title} </h4>
                      <p className='body-2 text-n-4 mb-4'> {item.text} </p>
                      <Link to={item.href}>
                        <div className="flex items-center justify-between max-w-[27rem] ">
                          
                          <div className="flex items-center px-4 py-1 bg-n-6 hover:bg-n-4 rounded">
                            
                            <p className="tagline text-n-1"> Explore more </p>
                            <Arrow/>
                          </div>
                        </div>
                      </Link>
                    </div>
                </div>
              </div>
            )
          })}
          <Gradient />
        </div>
      </div>
    </Section>
  )
}

export default Services;