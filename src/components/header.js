import { useState } from "react"
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

function MenuMobile({arrow, moveArrow, numberPhone, mailAdress}) {

const [scrolledMenu, setScrolledMenu] = useState(false)
function scrollMenu() {
    setScrolledMenu(!scrolledMenu)
}

    return (
        <>
        <div id="menuMobile" className={scrolledMenu ? 'active' : null}>
        <div onClick={scrollMenu} id="scrollMenuBtn" className={scrolledMenu ? 'active' : null}></div>
            <ul id="mainMenuMobile">
                <Link to='/' onClick={scrollMenu}>
                    <img
                        src="https://cdn.pixabay.com/photo/2013/07/12/17/20/leaf-152047_960_720.png"
                        alt="logo eb mosaiques"
                        id="scrollMenuLogo">
                    </img>
                </Link>
                <li onClick={scrollMenu}>
                    <Link to='/'>Accueil</Link>
                </li>
                <li onClick={scrollMenu}>
                    <Link to='/whoami'>Qui suis-je ?</Link>
                </li>
                <li onClick={moveArrow}>
                    <span><span className="arrow">{arrow}</span> Mes œuvres</span>
                    <ul className="subMenu">
                        <li onClick={scrollMenu}>
                            <Link to='/clocks'>Horloges</Link>
                        </li>
                        <li onClick={scrollMenu}>
                            <Link to='/mirrors'>Miroirs</Link>
                        </li>
                        <li onClick={scrollMenu}>
                            <Link to='/paintingsAndDecorations'>Tableaux & décors</Link>
                        </li>
                        <li onClick={scrollMenu}>
                            <Link to='/slabs'>Dalles</Link>
                        </li>
                        <li onClick={scrollMenu}>
                            <Link to='/houseNames'>Noms de maisons</Link>
                        </li>
                        <li onClick={scrollMenu}>
                            <Link to='/coatOfArms'>Blasons</Link>
                        </li>
                    </ul>
                </li>
                <li onClick={moveArrow}>
                    <span><span className="arrow">{arrow}</span> Mes cours</span>
                    <ul className="subMenu">
                        <li onClick={scrollMenu}>
                            <Link to='/workshops/faceToFace'>Ateliers à domicile</Link>
                        </li>
                        <li onClick={scrollMenu}>
                        <Link to='/workshops/online'>Ateliers en ligne</Link>
                        </li>
                    </ul>
                </li>
                <li onClick={scrollMenu}>
                    <Link to='/events'>Expos & événements</Link>
                </li>
                <li onClick={moveArrow}>
                    <span><span className="arrow">{arrow}</span> Réseaux sociaux</span>
                    <ul className="subMenu">
                        <li>
                            <a href="https://www.facebook.com/SospelAtelierEbmosaiques">
                                <FaFacebook style={{fontSize: "1rem", marginRight: "10px"}} />
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/ebmosaiques/">
                                <FaInstagram style={{fontSize: "1rem", marginRight: "10px"}} />
                                Instagram
                            </a>
                        </li>
                    </ul>
                </li>
                <li onClick={moveArrow}>
                    <span><span className="arrow">{arrow}</span> Me contacter</span>
                    <ul className="subMenu">
                        <li>
                            <a href={numberPhone}>
                                <FaPhone style={{fontSize: "1rem", marginRight: "15px"}} />
                                Téléphone
                            </a>
                        </li>
                        <li>
                            <a href={mailAdress}>
                                <FaEnvelope style={{fontSize: "1rem", marginRight: "15px"}} />
                                Mail
                            </a>
                        </li>
                    </ul>
                </li>
                <li onClick={scrollMenu}>
                    <Link to='/onTheNews'>Dans la presse</Link>
                </li>
            </ul>
        </div>
        </>
    )
}

function MenuDesktop({numberPhone, mailAdress}) {
    return (
        <>
        <div id="menuDesktop">
            <ul id="mainMenuDesktop">
                <li>
                    <Link to='/'>Accueil</Link>
                </li>
                <li>
                    <Link to='/whoami'>Qui suis-je ?</Link>
                </li>
                <li>
                    <Link to='collections'>Mes œuvres</Link>
                    <ul className="subMenu">
                        <li>
                            <Link to='/clocks'>Horloges</Link>
                        </li>
                        <li>
                            <Link to='/mirrors'>Miroirs</Link>
                        </li>
                        <li>
                            <Link to='/paintingsAndDecorations'>Tableaux & décors</Link>
                        </li>
                        <li>
                            <Link to='/slabs'>Dalles de sol</Link>
                        </li>
                        <li>
                            <Link to='/houseNames'>Noms de maisons</Link>
                        </li>
                        <li>
                            <Link to='/coatOfArms'>Blasons</Link>
                        </li>
                    </ul>
                </li>
                <li>
                <Link to='workshops'>Mes cours</Link>
                    <ul className="subMenu">
                        <li>
                            <Link to='/workshops/faceToFace'>Ateliers à domicile</Link>
                        </li>
                        <li>
                        <Link to='/workshops/online'>Ateliers en ligne</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to='/events'>Expos & événements</Link>
                </li>
                <li>
                    Réseaux sociaux
                    <ul className="subMenu">
                        <li>
                            <a href="https://www.facebook.com/SospelAtelierEbmosaiques">
                                <FaFacebook style={{fontSize: "1rem", marginRight: "10px"}} />
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/ebmosaiques/">
                                <FaInstagram style={{fontSize: "1rem", marginRight: "10px"}} />
                                Instagram
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    Me contacter
                    <ul className="subMenu">
                        <li>
                            <a href={numberPhone}>
                                <FaPhone style={{fontSize: "1rem", marginRight: "15px"}} />
                                Téléphone
                            </a>
                        </li>
                        <li>
                            <a href={mailAdress}>
                                <FaEnvelope style={{fontSize: "1rem", marginRight: "15px"}} />
                                Mail
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to='/onTheNews'>Dans la presse</Link>
                </li>
            </ul>
        </div>
        </>
    )
}

function Header() {

const [arrow, setArrow] = useState("▶")
function moveArrow() {
    return setArrow(() => {
        if (arrow === "▶") {
            setArrow("▼")
        } else {
            setArrow("▶")
        }
    })
}

    return (
    <>
    <div id="topHeader"></div>
    <div id="header">
        <h1><Link to='/' id="h1">GALERIE EB MOSAIQUES</Link></h1>

        <MenuMobile arrow={arrow} moveArrow={moveArrow} />

        <div id="bottomHeader">
            <p  className="subTitle">Edith BARBIERA</p>
            <Link to='/'>
                <img
                    src="https://cdn.pixabay.com/photo/2013/07/12/17/20/leaf-152047_960_720.png"
                    alt="Logo EB Mosaiques"
                    id="headerLogo">
                </img>
            </Link>
            <p className="subTitle">Artiste mosaïste</p>
        </div>

        <MenuDesktop arrow={arrow} moveArrow={moveArrow} />

    </div>
    </>
    )
}

export default Header