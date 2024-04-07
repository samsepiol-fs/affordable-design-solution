
import Section from '../components/Section'
import Heading from '../components/Heading'
import { check, service1, service2, service3 } from '../assets'
import { graphicDesignServices, graphicServices } from '../constants'
import {  VideoBar, VideoChatMessage } from '../components/design/Services'
import { Gradient } from '../components/design/Hero'
import InfoCards from "../components/InfoCards";
import Button from '../components/Button'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const GraphicDesign = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0,0);
  }, [location]);
  return (
    <Section>
      <div className="container">
        <Heading
          className="h1"
          title="Best Graphic Design Solutions in Dehradun"
          text="Want awesome graphic design in Dehradun? Pick Affordable Design Solutions. We make your brand look cool with great visuals. Our creative experts can bring your ideas to life. Contact us today for a fresh new look!"
        />
        <div className="flex justify-center mb-5">
          <Button href="#info" white>
            Read More
          </Button>
        </div>
        <div className="relative ">
          <div 
            className="relative z-1 flex items-center
            h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl
            overflow-hidden lg:p-20 xl:h-[46rem]"
          >
            <div 
              className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5
              xl:w-auto"
            >
              <img 
                src={service1}
                alt="service1" 
                className='w-full h-full object-cover md:object-right '
                width={800} height={730}
              />
            </div>
            <div 
              className="relative z-1 max-w-[17rem] ml-auto"
            >
              <h4 className='h4 mb-4'>
                Graphic Design Services
              </h4>
              <p className='body-2 mb-[3rem] text-n-3'>
                Affordable Design Solutions helps you unlock the potential of your business.
              </p>
              <ul className='body-2'>
                {graphicServices.map((item, index) => (
                  <li 
                    className='flex items-start py-4 border-t border-n-6'
                    key={index}
                  >
                    <img src={check} alt="check" width={24} height={24}/>
                    <p className='ml-4'>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
           
          </div>
          
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
             <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img src={service2} className='h-full w-full object-cover' width={630} height={750} alt="service2" />
              </div>
              <div 
                className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b
                from-n-8/0 to-n-8/90 lg:p-15"
              >
                <h4 className='h4 mb-4'>
                  Digital Advertising Design
                </h4>
                <p className='body-2 mb-[3rem] text-n-3'>
                  Creating visually appealing banners, display ads, and
                  promotional materials for online advertising campaigns.
                </p>
                <h4 className='h4 mb-4'>
                  Brand Merchandise Design
                </h4>
                <p className='body-2 mb-[3rem] text-n-3'>
                  Designing branded merchandise such as apparel,
                  accessories, and promotional items for marketing and branding purposes.
                </p>
              </div>

              
             </div>
             <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className='h4 mb-4'>
                  Motion Graphics
                </h4>
                <p className='body-2 mb-[2rem] text-n-3'>
                  Producing animated graphics and videos for advertisements, presentations, and social media content.
                </p>
                <h4 className='h4 mb-4'>
                  Infographic Design
                </h4>
                <p className='body-2 mb-[2rem] text-n-3'>
                  Transforming complex information into visually compelling infographics for easy comprehension and sharing.
                </p>
              </div>
              <div className='relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]'>
                <img src={service3} alt="service3" className='w-full h-full object-cover' width={520} height={400}/>
                <VideoChatMessage />
                <VideoBar/>
              </div>
             </div>
          </div>
          <Gradient />
        </div>
        
      </div>
      <InfoCards data={graphicDesignServices} />
    </Section>
  )
}

export default GraphicDesign