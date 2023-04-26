import './App.css';
import {Provider} from 'react-redux';
import Footer from "./features/Footer/Footer";
import OurWorks from "./features/OurWorks/OurWorks";
// import OurLocation from "./features/OurLocation/OurLocation";
import DesignStudio from "./features/DesignStudio/DesignStudio";
// import Service from "./features/Service/Service";
import StageWorks from "./features/StageWorks/StageWorks";
import Price from "./features/Price/Price";
import Gifts from "./features/Gifts/Gifts";
// import Review from "./features/Review/Review";
import Map from "./features/Map/Map";
import MainScreenContainer from "./features/MainScreen/MainScreenContainer";
import ServiceContainer from "./features/Service/ServiceContainer";
import HeaderContainer from "./features/Header/HeaderContainer";
import store from "./BLL/store";


const App = () => {


    return (
        <Provider store={store}>
            <HeaderContainer/>
            <MainScreenContainer/>
            <OurWorks/>
            {/*<OurLocation/>*/}
            <DesignStudio/>
            <ServiceContainer/>
            <StageWorks/>
            {/*article*/}
            <Price/>
            {/*article*/}
            <Gifts/>
            {/*<Review/>*/}
            <Map/>
            <Footer/>
        </Provider>
    )
}

export default App;
