import React, {Component} from 'react';
import classes from "./NavLink.module.scss";

class NavLink extends Component {
    render() {
        return (
            <>
                <li className={classes.footer_nav__item}>
                    <a href={this.props.link} className={classes.footer_nav__link}>{this.props.name}</a>
                </li>
            </>
        );
    }
}

export default NavLink;