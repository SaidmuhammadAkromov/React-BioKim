import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <div className={s.menu}>
                    <h2><a href="">BioGeoKim</a></h2>

                    <ul className={s.categories}>
                        <li className={s.category}><a href="" className={s.category__link}>Biologiya</a></li>
                        <li className={s.category}><a href="" className={s.category__link}>Geografiya</a></li>
                        <li className={s.category}><a href="" className={s.category__link}>Kimyo</a></li>
                    </ul>
                </div>

                <div className={s.settings}>
                    <div className={s.settings__langs}>
                        <a href="" className={s.lang, s.lang_active} id='uzLangBtn'>Uz</a>
                        <a href="" className={s.lang} id='ruLangBtn'>Ru</a>
                    </div>
                    |
                    <a href="tel:+998712884654">71 288 46 54 (139)</a>
                </div>
            </div>
        </header>
    )
}

export default Header;