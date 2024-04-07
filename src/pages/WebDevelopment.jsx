import { hero } from "../assets";
import Heading from "../components/Heading";
import InfoCards from "../components/InfoCards";
import Section from "../components/Section";
import Button from "../components/Button";
import { developmentServices,  webServices } from "../constants";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Gradient } from "../components/design/Services";

import ServiceCards from "../components/ServiceCards";

const WebDevelopment = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <Section>
      <div className="container">
        <Heading
          text="Elevate your online presence with Affordable Design Solutions, the leading website development experts in Dehradun. Discover exceptional designs and functionality that make your website stand out. Partner with us now for standout web solutions"
          title="We are the Best Web/App Development Experts in Dehradun."
        />
        <div className="flex justify-center mb-5">
          <Button href="#info" white>
            Read More
          </Button>
        </div>

        <div
          className="relative z-1 flex items-center
            h-[39rem] mb-5 p-8 rounded-3xl
            overflow-hidden lg:p-20 xl:h-[46rem] "
        >
          <div
            className=" mx-auto absolute w-full h-full  pointer-events-none md:w-auto
              xl:w-auto mb-20 mt-20"
          >
            <img
              src={hero}
              alt="service1"
              className="w-full h-full object-cover "
              width={800}
              height={730}
            />
          </div>
          <Gradient />
        </div>
      </div>
      <ServiceCards data={webServices} />
      <InfoCards data={developmentServices} />
    </Section>
  );
};

export default WebDevelopment;
