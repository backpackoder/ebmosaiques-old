import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

function Footer({numberPhone, mailAdress}) {
    return (
        <footer>
            <nav id='footerNav'>
                <div className='footerColumn part-1'>
                    <p className='footerColumnTitle'>À propos</p>
                    <ul className='footerUl grid-1'>
                        <li>
                            <Link to='/' className="mainMenuMobileLiLink">Accueil</Link>
                        </li>
                        <li>
                            <Link to='/whoami' className="mainMenuMobileLiLink">Qui suis-je ?</Link>
                        </li>
                        <li>
                            <Link to='/workshops' className="mainMenuMobileLiLink">Ateliers</Link>
                        </li>
                        <li>
                            <Link to='/events' className="mainMenuMobileLiLink">Expos & événements</Link>
                        </li>
                        <li>
                            <Link to='/onTheNews' className="mainMenuMobileLiLink">Dans la presse</Link>
                        </li>
                    </ul>
                </div>

                <div id='footerMiddleColumn' className='footerColumn part-2'>
                <p className='footerColumnTitle'>Collections</p>
                    <ul className='footerUl grid-2'>
                        <li>
                            <Link to='/clocks' className="mainMenuMobileLiLink">Pendules</Link>
                        </li>
                        <li>
                            <Link to='/mirrors' className="mainMenuMobileLiLink">Miroirs</Link>
                        </li>
                        <li>
                            <Link to='/paintingsAndDecorations' className="mainMenuMobileLiLink">Tableaux & décors</Link>
                        </li>
                        <li>
                            <Link to='/slabs' className="mainMenuMobileLiLink">Dalles de sol</Link>
                        </li>
                        <li>
                            <Link to='/houseNames' className="mainMenuMobileLiLink">Noms de maisons</Link>
                        </li>
                        <li>
                            <Link to='/coatOfArms' className="mainMenuMobileLiLink">Blasons</Link>
                        </li>
                    </ul>
                </div>

                <div className='footerColumn part-3'>
                    <p className='footerColumnTitle social'>Me suivre</p>
                    <ul className='footerUl grid-3'>
                        <li>
                            <a href="https://www.facebook.com/SospelAtelierEbmosaiques">
                                <FaFacebook style={{fontSize: "1.5rem", marginRight: "15px"}} />
                            </a>
                            <a href="https://www.instagram.com/ebmosaiques/">
                                <FaInstagram style={{fontSize: "1.5rem"}} />
                            </a>
                        </li>
                    </ul>
                    <p className='footerColumnTitle contact'>Me contacter</p>
                    <ul className='footerUl grid-4'>
                        <li>
                            <a href={numberPhone}>
                                <FaPhone style={{fontSize: "1.5rem", marginRight: "15px"}} />
                            </a>
                            <a href={mailAdress}>
                                <FaEnvelope style={{fontSize: "1.5rem"}} />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <p id='footerCopyright'>Edith BARBIERA - Artiste mosaïste - Sospel</p>
        </footer>
    )
}

export default Footer