import React, {Component} from 'react';
import classes from "./NavLink.module.scss";

class Navlink extends Component {
    render() {
        return (
            <>
                <li className={classes.menu__item}>
                    <a href={this.props.link} className={classes.menu__link}>{this.props.name}</a>
                </li>
            </>
        );
    }
}

export default Navlink;

