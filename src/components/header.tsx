import Image from 'next/image'

const Header = () => {
    return (
        <header className="header">
            <div className="container header__container">
                <a className="header__logo logo" href="">
                    <Image
                        src='/images/logo.png'
                        height={80}
                        width={76}
                        className="logo__img"
                        alt="Логотип Дом у Озера"
                    />
                </a>
                <nav className="header__menu header-menu">
                    <ul className="header-menu__list">
                        <li className="header-menu__item">
                            <a className="header-menu__link" href="#welcome">Главная</a>
                        </li>
                        <li className="header-menu__item">
                            <a className="header-menu__link" href="#places">Земля в центре</a>
                        </li>
                        <li className="header-menu__item">
                            <a className="header-menu__link" href="#map">Карта</a>
                        </li>
                        <li className="header-menu__item">
                            <a className="header-menu__link" href="#contacts">Контакты</a>
                        </li>
                    </ul>
                </nav>
                <div className="header__contacts header-contacts">
                    <a className="header-contacts__phone" href="tel:79155969524">7 (915) 596-95-24</a>
                    <a className="header-contacts__order">заказать обратный звонок</a>
                </div>
            </div>
        </header>
    )
}

export default Header;
