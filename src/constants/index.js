import {
    discordBlack,
    facebook,
    file02,
    homeSmile,
    instagram,
    plusSquare,
    roadmap1,
    roadmap2,
    roadmap3,
    roadmap4,
    searchMd,
    telegram,
    twitter,
    yourlogo,

  } from "../assets";
  import phone from "../assets/contact/phone.png";
  import location from "../assets/contact/location.png";
  import mail from "../assets/contact/mail.png";
  
  export const navigation = [
    {
      id: "0",
      title: "Home",
      url: "/",
    },
    {
      id: "1",
      title: "Services",
      url: "/services",
    },
    {
      id: "2",
      title: "About us",
      url: "/about-us",
    },
    {
      id: "3",
      title: "Contact us",
      url: "/contact-us",
    },
    {
      id: "4",
      title: "Enquire",
      url: "/enquiry",
      onlyMobile: true,
    },
  ];
  
  export const heroIcons = [homeSmile, file02, searchMd, plusSquare];
  
  export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];
  
  export const productDesignServices = [
    "Concept Development",
    "Sketching and Ideation",
    "CAD Modeling",
    "Prototyping",
    "Industrial Design"
  ];

  export const graphicServices = [
    "Logo Design",
    "Brand Identity Design",
    "Illustration",
    "Print Design",
    "Packaging Design",
    "Consultation and Brand Strategy",
  ];
  
  export const webServices = [
    {
      id: 0,
      title: "Website Design",
      text:"Crafting visually appealing layouts and user-friendly interfaces that create a strong first impression and keep visitors engaged."
    },
    {
      id: 1,
      title: "Front-End Development",
      text:"Building the interactive elements of a website that users see and interact with directly, such as buttons, forms, and animations."
    },
    {
      id: 2,
      title: "Back-End Development",
      text:"Creating the behind-the-scenes magic that powers your website, including server setup, databases, and handling user data."
    },
    {
      id: 3,
      title: "UI/UX Design",
      text:"Building the interactive elements of a website that users see and interact with directly, such as buttons, forms, and animations."
    },
    {
      id: 4,
      title: "SEO (Search Engine Optimisation)",
      text:"SEO, or Search Engine Optimization, is a vital strategy for improving website visibility and ranking on search engine result pages, driving organic traffic and enhancing online presence."
    },
    {
      id: 5,
      title: "App Development",
      text:"Our team of skilled developers leverages the latest technologies and frameworks to ensure your app is built using the most efficient and effective tools available."
    },
    
  ];
  
  
  export const services = [
    {
      id: "0",
      title: "Graphic Design Services",
      text: "Our team specializes in captivating graphic designs that elevate your brand's identity and engage your audience effectively.",
      href: "/graphic-design",
      imageUrl: roadmap1,
      
    },
    {
      id: "1",
      title: "Web/App Development",
      text: "Our dedicated team of developers combines creativity and technical expertise to deliver innovative app solutions. We deliver intuitive UI/UX designs, seamless performance, and ongoing support to bring your app ideas to life.",
      href: "/web-development",
      imageUrl: roadmap2,
    },
    {
      id: "2",
      title: "Industrial Product Design",
      text: "Our expert team combines creativity and technical expertise to bring your product ideas to life, delivering solutions that are both aesthetically pleasing and functionally robust.",
      href: "/industrial-product-design",
      imageUrl: roadmap3,
    },
    {
      id: "3",
      title: "Social Media Management",
      text: "High-Res thumbnails, Launch and optimize content, Serve as community moderators, Build relationships with viewers, Start with a content plan (before you launch your channel), Cross-promote your YouTube content, etc.",
      href: "/contact-us",
      imageUrl: roadmap4,
    },
  ];
  
  export const collabText =
    "We specialize in providing quantifiable outcomes, ensuring tangible evidence of our impact.";
  
  export const collabContent = [
    {
      id: "0",
      title: "Measurable Results",
      text: collabText,
    },
    {
      id: "1",
      title: "Web Development Excellence",
    },
    {
      id: "2",
      title: "Customer-Centric Approach",
    },
  ];
  
 
  
  export const contact = [
    {
      id: "0",
      title: "Phone",
      description: "You can reach out to us over a phone call 24x7",
      icon: phone,
      href:"tel:+917037996285",
      clickable: "+91 7037996285"
    },
    {
      id: "1",
      title: "Email",
      description: "You can also reach out to us by email at any time",
      icon: mail,
      href:"mailto:rishabhbhatt1713@gmail.com",
      clickable: "rishabhbhatt1713@gmail.com"
    },
    {
      id: "2",
      title: "Address",
      description: "You can can pay us a visit over our main  office at",
      icon: location,
      href:"https://www.google.com/maps/place/Affordable+Design+Solutions/@30.3383251,78.0593056,17z/data=!3m1!4b1!4m6!3m5!1s0x390929c8a75ecb6f:0xebb29a007d9d39b7!8m2!3d30.3383251!4d78.0618752!16s%2Fg%2F11y35hdnkw?entry=ttu",
      clickable: "Block 2, 114, Arya Nagar, Dehradun, 248001"
    },
  ];
  
 
  
  export const socials = [
    {
      id: "0",
      title: "Discord",
      iconUrl: discordBlack,
      url: "#",
    },
    {
      id: "1",
      title: "Twitter",
      iconUrl: twitter,
      url: "#",
    },
    {
      id: "2",
      title: "Instagram",
      iconUrl: instagram,
      url: "#",
    },
    {
      id: "3",
      title: "Telegram",
      iconUrl: telegram,
      url: "#",
    },
    {
      id: "4",
      title: "Facebook",
      iconUrl: facebook,
      url: "#",
    },
  ];

  export const graphicDesignServices = [
    {
      id:0,
      title:"Logo Design",
      text:"Creating unique and memorable logos that represent a brand's identity.Brand Identity Design.",
    },
    {
      id:1,
      title:"Brand Identity design",
      text:"Developing comprehensive brand identities including logo color palette, typography, and brand guidelines.",
    },
    {
      id:2,
      title:"Print Design",
      text:"Designing marketing collateral such as brochures, flyers posters, business cards, and stationery.",
    },
    {
      id:3,
      title:"Packaging Design",
      text:"Crafting eye-catching packaging solutions for products that stand out on shelves and attract customers.",
    },
    {
      id:4,
      title:"Infographic Design",
      text:"Transforming complex information into visually compelling infographics for easy comprehension and sharing.",
    },
    {
      id:5,
      title:"Illustration",
      text:"Providing custom illustrations and graphics for editorial, advertising, and digital purposes.",
    },
    {
      id:6,
      title:"Motion Graphics",
      text:"Producing animated graphics and videos for advertisements, presentations, and social media content.",
    },
    {
      id:7,
      title:"Environmental Design",
      text:"Designing signage, wayfinding systems, and environmental graphics for physical spaces such as offices, retail stores, and events."
    },
    {
      id:8,
      title:"Digital Advertising Design",
      text:"Creating visually appealing banners, display ads, and promotional materials for online advertising campaigns"
    },
    {
      id:9,
      title:"Brand Merchandise Design",
      text:"Designing branded merchandise such as apparel, accessories, and promotional items for marketing and branding purposes."
    },
    {
      id:10,
      title:"Consultation and Brand Strategy",
      text:"Providing strategic guidance on branding, visual identity, and design-related decisions to help businesses achieve their objectives effectively."
    },
    {
      id:11,
      title:"Email Newsletter Design",
      text:"Designing visually appealing and responsive email newsletters that drive engagement and conversions."
    }
  ];

  export const industrialProductDesdignServices = [
    {
      id:0,
      title:"Concept Development",
      text:"Collaboratively brainstorming and generating innovative product concepts based on client needs and market research.",
      
    },
    {
      id:1,
      title:"Market Research and User Analysis",
      text:"Conducting thorough research to understand target demographics, user preferences, and market trends.",
      
    },
    {
      id:2,
      title:"Sketching and Ideation",
      text:"Translating conceptual ideas into rough sketches and visual representations to explore design possibilities.",
      
    },
    {
      id:3,
      title:"CAD Modeling",
      text:"Using computer-aided design (CAD) software to create detailed 3D models of product concepts for visualization and analysis.",
      
    },
    {
      id:4,
      title:"Prototyping",
      text:"Building physical or digital prototypes to test and refine the design's functionality, aesthetics, and usability.",
      
    },
    {
      id:5,
      title:"User Testing:",
      text:"Conducting usability testing and gathering feedback from target users to identify areas for improvement.",
      
    },
    {
      id:6,
      title:"Material Selection and Manufacturing Consultation",
      text:"dvising on materials, manufacturing processes, and production techniques to optimize product quality, cost, and feasibility.",
    },
    {
      id:7,
      title:"Industrial Design",
      text:"Creating aesthetically pleasing and ergonomic product designs that prioritize user experience and brand identity.",
    },
    {
      id:8,
      title:"Sustainability Integration",
      text:"ncorporating sustainable design principles and environmentally friendly materials into product development to reduce environmental impact."
    },
    {
      id:9,
      title:"Regulatory Compliance and Certification",
      text:"Ensuring that products meet industry standards, regulations, and certifications for safety, quality, and legal compliance."
    },
    {
      id:10,
      title:"Product Lifecycle Management (PLM)",
      text:"Providing strategic guidance and support throughout the entire product lifecycle, from initial concept to market launch and beyond, to maximize success and longevity."
    }
  ]

  export const developmentServices = [
    {
      id:0,
      title:"Requirement Analysis",
      text:"Understanding the client's vision and needs, the developer conducts a thorough analysis to define the app's features, functionalities, and user requirements."
    },
    {
      id:1,
      title:"Design and User Experience (UX) Development",
      text:"The developer creates wireframes, prototypes, and UI designs to map out the app's visual and interactive elements, ensuring an intuitive and engaging user experience."
    },
    {
      id:2,
      title:"Testing and Quality Assurance",
      text:"Rigorous testing is performed to identify and rectify bugs, glitches, and performance issues. Quality assurance ensures the app functions seamlessly across different devices and scenarios."
    },
  ]