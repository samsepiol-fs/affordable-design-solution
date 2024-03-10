import { curve, graphic, heroBackground} from '../assets'
import Button from './Button'
import Section from './Section'
import { BackgroundCircles, BottomLine, Gradient } from './design/Hero';
import { heroIcons } from '../constants';
import { ScrollParallax } from 'react-just-parallax';
import { useRef } from 'react';
import CompanyLogos from './CompanyLogos';
import Services from './Services';
import Enquiry from './Enquiry';

const Hero = () => {
    const parallaxRef = useRef(null);
  return (
    <>
        <Section
            className='pt-[12rem] -mt-[5.25rem] '
            crosses
            crossesOffset='lg:translat-y-[5.25rem]'
            customPaddings
            id='hero'
        >
        <div className="container relative" ref={parallaxRef}>
                <div 
                    className="relative z-1 max-w-[62rem] 
                    mx-auto text-center mb-[4rem] 
                    md:mb-20 lg:mb:[6rem]"
                >
                    <h1
                        className='h1 mb-6 '
                    >
                        Grow your business with < br /> &nbsp;Affordable&nbsp; Design {` `}
                        
                        <span
                            className='inline-block relative'
                        >
                            
                            Solutions
                            <img src={curve} alt="curve" 
                                className='absolute top-full left-0 w-full xl:mt-2'
                                width={624}
                                height={28}
                            />
                        </span>
                    </h1>
                    <p 
                        className='body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8 mt-8'
                    >
                        We are a Graphic Design and Industrial Design Agency.
                    </p>
                    <Button href='#enquiry' white>
                        Continue
                    </Button>
                </div>
                <div 
                    className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24"
                >
                    <div 
                        className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient"
                    >
                        <div 
                            className="relative bg-n-8 rounded-[1rem]"
                        >
                            <div className='bg-n-10 rounded-t-[0.9rem]' />

                            <div 
                                className='aspect-auto rounded-t-[0.9rem] rounded-b-[0.9rem] 
                                overflow-hidden md:aspect-auto lg:aspect-auto'
                            >
                                <img 
                                    src={graphic} 
                                    alt="graphic" 
                                    className='w-full'
                                    width={1024}
                                    height={490}
                                    
                                />
                                <ScrollParallax isAbsolutelyPositioned>
                                    <ul
                                        className='hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 
                                        backdrop-blur border-n-1/10 rounded-2xl xl:flex '
                                    >
                                        {heroIcons.map((icon, index) => (
                                            <li className='p-5' key={index}>
                                                <img src={icon} alt="" width={24} height={25}/>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollParallax>
                            </div>
                        </div>
                        <Gradient />
                    </div>
                    <div 
                        className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2
                        md:-top-[46%] md:w-[138%] lg:-top-[104%]"
                    >
                        <img 
                            src={heroBackground} 
                            alt="hero" 
                            width={1440}
                            height={1800}
                            className='w-full'
                        />
                    </div>

                    <BackgroundCircles />
                </div>
                <CompanyLogos className="hidden relative z-10  mt-20 lg:block" />
        </div>
        <BottomLine />
                                            
        </Section>
        <Services />
        <Enquiry />
    </>
  )
}

export default Hero