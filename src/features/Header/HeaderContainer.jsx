import React, {useState} from 'react';
import Header from "./Header";

const HeaderContainer = () => {
    const [isShowBurger, setIsShowBurger] = useState(false)

    return (
        <Header toggleBurger={() => setIsShowBurger(!isShowBurger)} isShowBurger={isShowBurger}/>
    );
}

export default HeaderContainer;