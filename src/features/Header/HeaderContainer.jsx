import React, {Component} from 'react';
import Header from "./Header";

class HeaderContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShowBurger: false
        };
    }
    toggleBurger = () => {
        this.setState(({isShowBurger}) => ({isShowBurger : !isShowBurger}));
    }

    render() {
        return (
                <Header toggleBurger={this.toggleBurger} isShowBurger={this.state.isShowBurger}/>
        );
    }
}

export default HeaderContainer;