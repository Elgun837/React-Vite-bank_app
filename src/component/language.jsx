import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";




function Language() {

const {i18n} = useTranslation();
const { search, hash} = useLocation();
const {pathname} = location

const switcher = (lng) => {
  
  i18n.changeLanguage(lng)
  let newPathname = pathname.slice(3)
  window.location.replace(
    `/${lng}${newPathname}${hash}`
  )
 
}
  


  return (
   <ul>
    <li className="text-white" onClick={()=> switcher('en')}>En</li>
    <li className="text-white" onClick={()=> switcher('az')}>Az</li>
   </ul>
  )
}

export default Language