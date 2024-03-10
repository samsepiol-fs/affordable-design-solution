import { grid } from '../assets';
import Heading from '../components/Heading';
import InfoCards from '../components/InfoCards';
import Section from '../components/Section';
import { developmentServices, services } from '../constants';

const WebDevelopment = () => {
  return (
    <Section className="overflow-hidden ">
      <div className="container md:pb-10">
        <Heading 
          tag= "Elevate your online presence with Affordable Design Solutions, the leading website development experts in Dehradun. Discover exceptional designs and functionality that make your website stand out. Partner with us now for standout web solutions"
          title="We are the Best Website Development Experts in Dehradun."
        />
        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {services.map((item) => {
            const status = item.status === "done"? "Done" : "In Progress";

            return (
              <div key={item.id} className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${item.colorful? 'bg-conic-gradient':'bg-n-6'}`}>
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
                      <p className='body-2 text-n-4'> {item.text} </p>
                    </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <InfoCards data={developmentServices} />
    </Section>
  )
}

export default WebDevelopment;