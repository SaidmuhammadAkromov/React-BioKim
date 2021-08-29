import React from 'react'

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="menu">
                    <h1>BioGeoKim</h1>

                    <ul>
                        <li className="category"><a href="" className="category__link">Biologiya</a></li>
                        <li className="category"><a href="" className="category__link">Geografiya</a></li>
                        <li className="category"><a href="" className="category__link">Kimyo</a></li>
                    </ul>
                </div>

                <div className="settings">
                    <div className="settings__langs">
                        <a href="" className="lang">Uz</a>
                        <a href="" className="lang">Ru</a>
                        <a href="" className="lang">En</a>
                    </div>
                    |
                    <a href="tel:+998712884654">71 288 46 54 (139)</a>
                </div>
            </div>
        </header>
    )
}

export default Header;