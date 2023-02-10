
import './App.css';
import {Component} from "react";
import Header from "./features/Header/Header";
import Footer from "./features/Footer/Footer";
import MainScreen from "./features/MainScreen/MainScreen";
import OurWorks from "./features/OurWorks/OurWorks";
import OurLocation from "./features/OurLocation/OurLocation";
import DesignStudio from "./features/DesignStudio/DesignStudio";
import Service from "./features/Service/Service";
import StageWorks from "./features/StageWorks/StageWorks";
import Price from "./features/Price/Price";

class App extends Component {
  render() {
    return (
        <>
            <Header/>
            <MainScreen/>
            <OurWorks/>
            <OurLocation/>
            <DesignStudio/>
            <Service/>
            <StageWorks/>

            <Price/>

            <Footer/>
        </>
    );
  }
}

export default App;
