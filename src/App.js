
import './App.css';
import {Component} from "react";
import Header from "./features/Header/Header";
import Footer from "./features/Footer/Footer";
import MainScreen from "./features/MainScreen/MainScreen";
import OurWorks from "./features/OurWorks/OurWorks";
import OurLocation from "./features/OurLocation/OurLocation";
import DesignStudio from "./features/DesignStudio/DesignStudio";

class App extends Component {
  render() {
    return (
        <>
            <Header/>
            <MainScreen/>
            <OurWorks/>
            <OurLocation/>
            <DesignStudio/>
            <Footer/>
        </>
    );
  }
}

export default App;
