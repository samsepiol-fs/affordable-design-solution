import Heading from '../components/Heading'
import { check, service3 } from '../assets'
import { productDesignServices } from '../constants'
import { Gradient } from '../components/design/Hero'
import InfoCards from "../components/InfoCards";
import Button from '../components/Button'
import Section from '../components/Section'
import { industrialProductDesdignServices } from '../constants'

const IndustrialProductDesign = () => {
  return (
    <Section>
      <div className="container">
        <Heading
          className="h1"
          title="Best Industrial Product Design Solutions in Dehradun"
          text="At Affordable Design Solutions, our mission is simple yet profound: to democratize designb y making high-quality services accessible to everyone at an affordable price. Contact us today for a fresh new look!"
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
                src={service3}
                alt="service1" 
                className='w-full h-full object-cover md:object-right '
                width={800} height={730}
              />
            </div>
            <div 
              className="relative z-1 max-w-[17rem] ml-auto"
            >
              <h4 className='h4 mb-4'>
                Industrial Product Design Solutions
              </h4>
              <p className='body-2 mb-[3rem] text-n-3'>
                Affordable Design Solutions helps you unlock the potential of your business.
              </p>
              <ul className='body-2'>
                {productDesignServices.map((item, index) => (
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
          
          <Gradient />
        </div>
        
      </div>
      <InfoCards data={industrialProductDesdignServices}/>
    </Section>
    
  )
}

export default IndustrialProductDesign