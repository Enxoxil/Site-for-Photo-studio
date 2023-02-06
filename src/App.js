
import './App.css';
import {Component} from "react";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import MainScreen from "./component/MainScreen/MainScreen";

class App extends Component {
  render() {
    return (
        <>
            <Header/>
            <MainScreen/>
            <Footer/>
        </>
    );
  }
}

export default App;
