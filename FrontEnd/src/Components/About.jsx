import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const AboutSection = () => {
  const navigate = useNavigate();
  const signToken = localStorage.getItem('token');


  useEffect(() => {
    if (!signToken) {
      navigate('/');
    }


  }, []);



  return (
    <>

      <div className="flex flex-col md:flex-row max-w-6xl mx-auto p-8">
        <div className="md:w-1/2 pr-8">
          <img
            src="https://static.wixstatic.com/media/b8deca_20a6d22740cd45a6b4dd57f53713dbd8~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"
            alt="Coffee in a mason jar"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 translate-y-20">
          <h2 className="text-4xl font-bold mb-2">ABOUT US</h2>
          <div className="w-24 h-1 bg-gray-300 mx-auto mb-4"></div>
          <p className="mb-4">
            Since 2012, we have been serving our customers with a simple motto:
            <span className="font-bold italic">"YOU DESERVE MORE THAN THE AVERAGE CAFE."</span>
            Whether you're enjoying breakfast or happy hour, we always guarantee a cozy and friendly ambiance, excellent customer service, quality food, and beverages all day. We encourage breakfast for dinner and mimosas all weekend long.
          </p>  
          <p className="mb-4">
            We've quickly become a local favorite with our fantastic coffee, juices, smoothies, salads, sandwiches, pasta, wine, beers, and more! We are open seven days a week and have become
            <span className="font-bold">THE IT PLACE</span> for your weekend brunch. We focus on finding gourmet ingredients, carefully curated and fresh. These ingredients make every item on our menu taste fresh and flavorful.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutSection;