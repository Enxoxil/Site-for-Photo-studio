import React, {Component} from 'react';
import classes from "./Footer.module.scss";
import Logo from "./Logo/Logo";
import Nav from "./Nav/Nav";
import Sub from "./Sub/Sub";

class Footer extends Component {
    render() {
        return (
            <footer className={classes.footer}>
                <div className={`${classes.footer__container} _container`}>
                    <div className={classes.footer__wrapper}>
                        <div className={classes.footer__main}>
                            <Logo/>
                            <Nav/>
                        </div>
                        <Sub/>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;