import React from 'react';
import styles from './style';
import { Navbar,Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer } from './component';
import { BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import { useLayoutEffect } from 'react';
import {removeLngPrefix} from './i18n';
import Languages from './component/language';
import About from './pages/About';
const App = () => { 
  
  const { t, i18n ,i18n: { language } } = useTranslation();

  useLayoutEffect(() => {
      const currentPathname = window.location.href.replace(
          window.location.origin,
          ''
      );
        
      const newPathname = `/${language}${removeLngPrefix(currentPathname)}`;

      if (currentPathname !== newPathname) {
          window.history.replaceState({}, '', newPathname);
      }
  }, [language, i18n])

  return (
    <Router basename={`/${language}`}>
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
         <Navbar />
        </div>
      </div>
      
      </div> 
     
          
    <Routes>
        <Route path='/home' element={<h1>{t('title')}</h1>}/>
        <Route path='/about' Component={About}/>
        <Route path='/user' element={<h2>{t('Welcome')}</h2>}/>
    </Routes>
    </Router>
  )
}

export default App