import { useSelector, useDispatch } from "react-redux"
import { setLanguage } from "../app/languages";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import { Suspense } from "react";



function language() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const language = useSelector(state => state.site);
  const languages = ['En','Az'];


  
const handleLanguage =  lang => {
     i18n.changeLanguage(lang)
     dispatch(setLanguage(lang))
}

  return (
    <Suspense fallback="Loading">
        {languages.map((lang, index) =>(
            <button  className="text-white m-2 py-2 px-1 rounded-[10px]" key={index} onClick={() => handleLanguage(lang) } >{lang}</button>
        ))}
        <h2 className='text-white'>{ t("title")}</h2>
    </Suspense>
  )
}

export default language