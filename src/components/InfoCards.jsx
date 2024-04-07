
import Heading from "./Heading";
import { Gradient } from '../components/design/Hero'


const InfoCards = ({ data }) => {
  return (
    <div className="container mt-20" id="info">
      
      <div className="container relative z-2 p-[2rem] bg-n-7 rounded-[2rem]">
        <Heading tag="our services" />
        <div className="flex flex-wrap lg:flex gap-10 mb-10 ml-10">
          {data.map((item) => (
            <div
              className="block relative p-0.25  bg-[length:100%_100%] md:max-w-[20rem] border rounded-[2rem] border-n-6 bg-n-7 sm:w-auto"
              key={item.id}
            >
              <div className="relative z-2 flex flex-col h-auto p-[1rem] ">
                <h5 className="h5 mt-4 mb-5">{item.title}</h5>
                <p className="body-2 text-n-3">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Gradient/>
    </div>
  );
};

export default InfoCards;
