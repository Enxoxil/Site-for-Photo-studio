import './App.css';
import { Provider } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import Footer from './features/Footer/Footer';
import OurWorks from './features/OurWorks/OurWorks';
// import OurLocation from "./features/OurLocation/OurLocation";
import DesignStudio from './features/DesignStudio/DesignStudio';
import StageWorks from './features/StageWorks/StageWorks';
import Price from './features/Price/Price';
import Gifts from './features/Gifts/Gifts';
// import Review from "./features/Review/Review";
import Map from './features/Map/Map';
import MainScreenContainer from './features/MainScreen/MainScreenContainer';
import ServiceContainer from './features/Service/ServiceContainer';
import HeaderContainer from './features/Header/HeaderContainer';
import store from './BLL/store';
import { ThemeProvider } from './BLL/context/themeProvider';
import Layout from './ui/components/Layout/Layout';
import { PopupProvider } from './BLL/context/popupProvider';
import { BurgerProvider } from './BLL/context/burgerProvider';

const App = () => {
  const { i18n } = useTranslation();
  useEffect(() => {
    const handleChangeLanguage = () => {
      i18n.reloadResources().then(() => {});
    };
    i18n.on('languageChanged', handleChangeLanguage);
    return () => {
      i18n.off('languageChanged', handleChangeLanguage);
    };
  }, [i18n]);
  return (
      <Provider store={store}>
          <ThemeProvider>
              <PopupProvider>
                  <BurgerProvider>
                      <Layout>
                          <HeaderContainer />
                          <MainScreenContainer />
                          <OurWorks />
                          {/* <OurLocation/> */}
                          <DesignStudio />
                          <ServiceContainer />
                          <StageWorks />
                          {/* article */}
                          <Price />
                          {/* article */}
                          <Gifts />
                          {/* <Review/> */}
                          <Map />
                          <Footer />
                      </Layout>
                  </BurgerProvider>
              </PopupProvider>
          </ThemeProvider>
      </Provider>
  );
};

export default App;
