import Header from './Header';
import { useBurger } from '../../hooks/useBurger';

const HeaderContainer = () => {
  const { isShowBurger, toggleIsShowBurger } = useBurger();

  return (
      <Header toggleIsShowBurger={toggleIsShowBurger} isShowBurger={isShowBurger} />
  );
};

export default HeaderContainer;
