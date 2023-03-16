import './App.css';
import {Component} from "react";
import Header from "./features/Header/Header";
import Footer from "./features/Footer/Footer";
import OurWorks from "./features/OurWorks/OurWorks";
import OurLocation from "./features/OurLocation/OurLocation";
import DesignStudio from "./features/DesignStudio/DesignStudio";
import Service from "./features/Service/Service";
import StageWorks from "./features/StageWorks/StageWorks";
import Price from "./features/Price/Price";
import Gifts from "./features/Gifts/Gifts";
import Review from "./features/Review/Review";
import Map from "./features/Map/Map";
import MainScreenContainer from "./features/MainScreen/MainScreenContainer";
import ServiceContainer from "./features/Service/ServiceContainer";

    

class App extends Component {
  render() {
    return (
        <>
            <Header/>
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
        </>
    );
  }
}

export default App;
