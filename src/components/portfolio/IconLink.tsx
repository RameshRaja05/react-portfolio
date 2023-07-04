import { iconLink } from "../../types";


function IconLink(props:iconLink) {
   const {link, title, icon} = props;
   return (
      <a href={link} target={"_blank"} rel="noopener noreferrer" className="icon-link">
         <i className={icon}/> {title}
      </a>
   );
}

export default IconLink;