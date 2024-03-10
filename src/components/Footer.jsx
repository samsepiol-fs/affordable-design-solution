import React from "react";
import Section from "./Section";
import { socials } from "../constants";
import { affordableDesignLogo } from "../assets";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container relative flex  sm:justify-between justify-center items-center gap-10  max-sm:flex-col mb-10">
        <div className="flex flex-col gap-4 w-[25rem] h-[10rem] ">
          <img
            src={affordableDesignLogo}
            alt="logo"
            width={220}
            height={64}
            className="mb-3"
          />

          <p className="tagline  text-start text-n-4 overflow-auto ">
            {" "}
            We are here to help you establish your online presence in this ever
            evolving market.
          </p>
        </div>
        <div className="flex flex-col gap-4 w-[25rem] h-[10rem] ">
          <h6 className="h6 text-n-2"> Quick Links </h6>
          <ul className="flex flex-col text-n-4 mb-2 gap-2 ">
            <li className="hover:text-color-1">
              <a href="/"> Home </a>
            </li>
            <li className="relative group">
              <a href="/services" className=" hover:text-color-1">
                {" "}
                Services{" "}
              </a>
              <div className="hidden absolute group-hover:inline-block bg-n-6 rounded-xl mt-1 min-w-max">
                <a
                  href="/graphic-design"
                  className="block px-4 py-2 text-sm text-n-3 hover:text-color-1 "
                >
                  Graphic Design
                </a>
                <a
                  href="/industrial-product-design"
                  className="block px-4 py-2 text-sm text-n-3 hover:text-color-1 "
                >
                  Industrial product Design
                </a>
                <a
                  href="/web-development"
                  className="block px-4 py-2 text-sm text-n-3 hover:text-color-1 "
                >
                  Web Development
                </a>
                <a
                  href="/social-media-management"
                  className="block px-4 py-2 text-sm text-n-3 hover:text-color-1 "
                >
                  Social Media Management
                </a>
              </div>
            </li>
            <li className="hover:text-color-1">
              <a href="/about-us"> About Us</a>
            </li>
            <li className="hover:text-color-1">
              <a href="/contact-us"> Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 w-[25rem] h-[10rem] ">
          <h6 className="h6 text-n-2"> Get In Touch</h6>
          <div className="mt-0">
            <p className="text-n-4 underline mb-1"> Email: </p>
            <a
              href="mailto:rishabhbhatt1713@gmail.com"
              className="text-sm font-bold text-n-3 hover:text-color-1"
            >
              rishabhbhatt1713@gmail.com
            </a>
          </div>
          <div className="mt-0">
            <p className="text-n-4 underline mb-1"> Phone: </p>
            <a
              href="tel:+914037996285"
              className="text-sm font-bold text-n-3 hover:text-color-1"
            >
              +914037996285
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-[25rem] h-[10rem] ">
          <h6 className="h6 text-n-2"> Locate Us</h6>
          <a
            className="text-sm text-n-2 hover:text-color-1"
            target="_blank"
            href="https://www.google.com/maps/place/Affordable+Design+Solutions/@30.3383251,78.0618752,17z/data=!3m1!4b1!4m6!3m5!1s0x390929c8a75ecb6f:0xebb29a007d9d39b7!8m2!3d30.3383251!4d78.0618752!16s%2Fg%2F11y35hdnkw?entry=ttu"
          >
            Block 2, 114, Arya Nagar, Dehradun, 248001
          </a>
          <ul className="flex gap-5 flex-wrap bottom-0 overflow-auto">
            {socials.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-n-6"
              >
                <img
                  src={item.iconUrl}
                  alt={item.title}
                  width={16}
                  height={16}
                />
              </a>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="container border-t border-n-6
         flex justify-center items-center max-sm:flex-col"
      >
        <p className="caption text-n-4 lg:block mt-4">
          {" "}
          © {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </Section>
  );
};

export default Footer;
