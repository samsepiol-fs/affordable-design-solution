import Heading from "./Heading";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const ServiceCards = ({ data }) => {
  return (
    <Section>
      <div className="container relative z-2">
        <Heading
          text="Affordable Design Solutions helps you unlock the full potential of your business, by growing your online presence."
          title="Web/App Development"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {data.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 my-auto">{item.title}</h5>
                <p className="body-2 text-n-3">{item.text}</p>
              </div>

              <GradientLight />

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              ></div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ServiceCards;
