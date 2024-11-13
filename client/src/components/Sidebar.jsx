import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const Sidebar = ({link, close}) =>{
    return(
<div className="sidebar" onClick={close}>
   { link.map(link =>(
    <Link to={link.path} className="sidebar-link" href="#!"key={link.name}>
        <FontAwesomeIcon icon={link.icon}  />
        {link.name}
        </Link>
   ))} 
  
    </div>
    )
}
export default Sidebar;