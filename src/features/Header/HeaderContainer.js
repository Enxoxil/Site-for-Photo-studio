import React, {Component} from 'react';
import Header from "./Header";

class HeaderContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShowBurger: false
        };
        this.toggleBurger = this.toggleBurger.bind(this);
    }
    toggleBurger() {

        this.setState({isShowBurger : !this.state.isShowBurger});
    }

    render() {
        return (
            <>
                <Header toggleBurger={this.toggleBurger} isShowBurger={this.state.isShowBurger}/>
            </>
        );
    }
}

export default HeaderContainer;