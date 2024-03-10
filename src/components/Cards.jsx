
import { contact } from "../constants"



const Cards = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
        {contact.map((item) => (
            <div key={item.id} className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 hover:my-8 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3 ">
                <h4 className="h4 mb-4 ">
                    {item.title}
                </h4>
                <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
                    {item.description}
                </p>
                <div className="flex justify-center items-center h-[5.5rem] mb-6">
                    <img src={item.icon} alt="icon"/>
                    
                </div>
                <div className=" flex justify-center text-n-2 font-bold hover:underline border p-2.5 rounded-[2rem] border-n-6">
                    <a href={item.href} target={item.id === 2 ? "_blank" : "_self"} rel={item.id === 2 ? "noopener noreferrer" : undefined}> {item.clickable} </a>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Cards