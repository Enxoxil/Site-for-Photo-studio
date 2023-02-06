
import './App.css';
import {Component} from "react";
import Header from "./features/Header/Header";
import Footer from "./features/Footer/Footer";
import MainScreen from "./features/MainScreen/MainScreen";
import OurWorks from "./features/OurWorks/OurWorks";

class App extends Component {
  render() {
    return (
        <>
            <Header/>
            <MainScreen/>
            <OurWorks/>
            <Footer/>
        </>
    );
  }
}

export default App;
