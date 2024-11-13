import './styles/index.scss'
import CustomImages  from './CustomImages';
import { Link } from 'react-router-dom';
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons"

const link =[
  {
    name:"Login",
    path:"/login",
    icon: faCog

  },
  {
    name:"Registration",
    path:"/registration",
    icon: faCog
  },
]
const Images =[
    "images/chocolate milkshake.jpg",
    "/images/healthy-blueberry-banana-smoothie-8.jpg",
    "/images/orange milkshake.jpg",
    "/images/strawberry.jpg",
    "/images/Oreo-Shakes.jpg",
    "/images/vanilla.jpg"
]
const Hero = () => {
    return (
      <div className="section hero">
        <div className="col typography" >
          <h1 className="title">What Are We About</h1>
          <p className="info">
            Milkshake Paradise,is a shake haven with  variety of milkshake recipes;all thick,creamy and smooth. Explore and make with us different flavors by following our recipes. Our platform helps us connect and create a community. Our users can also create their own recipe and share it with the community.
          </p>

       
        <Link to="/registration">
        <button className="btn">Get Started</button>
          </Link>
          <div>
          <div><hr></hr></div>
          </div>
        <Link to="/login">
        <button className="btn">Login</button>
        </Link>
         
        </div>
        <div className="col gallery">
            { Images.map((src, index)=> (
     <CustomImages key={index} imgSrc={src} pt={"90%"}/>
            ))} 
         
        
        </div>
      </div>
    );
  };
  
  export default Hero;