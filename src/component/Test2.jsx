import React from "react";
import Test from "./Test";

const images = [
  {
    id: 1,
    image: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/f27bec553efc12cc60baed89b8f2223e-1674661140708/ai-artists-2x.png",
    text: "Add talent to AI",
    text2: "AI Artists"
  },
  {
    id: 2,
    image: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png",
    text: "Build your brand",
    text2: "Logo Design"
  },
  {
    id: 3,
    image: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png",
    text: "Customize your site",
    text2: "WordPress"
  },
  {
    id: 4,
    image: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png",
    text: "Share your message",
    text2: "Voice Over"
  },
  {
    id: 5,
    image: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png",
    text: "Engage your audience",
    text2: "Video Explainer"
  },
];

const Test2 = () => {
  return (
    
    <div>
        <h1 className="md:ml-10 lg:ml-48 text-3xl text-darkFontGray my-10 font-bold">Popular professional services</h1>
    <div className="flex  justify-center">
        
      {images.map((img) => (
        <Test key={img.id} image={img.image} text={img.text} text2={img.text2} />
      ))}
    </div>
    </div>
  );
};

export default Test2;
