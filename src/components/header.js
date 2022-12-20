import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import { CheckBoxMode } from "../App";

const numberPhone = "https://api.whatsapp.com/send?phone=0033608054065";
const mailAdress = "mailto:edithbarbiera@aol.fr";

const mesOeuvres = [
  {
    label: "Liste des collections",
    to: "/collections",
  },
  {
    label: "Horloges",
    to: "/collections/horloges",
  },
  {
    label: "Miroirs",
    to: "/collections/miroirs",
  },
  {
    label: "Tableaux & décors",
    to: "/collections/tableaux-et-décors",
  },
  {
    label: "Dalles",
    to: "/collections/dalles",
  },
  {
    label: "Noms de maisons",
    to: "/collections/noms-de-maisons",
  },
  {
    label: "Blasons",
    to: "/collections/blasons",
  },
];

const mesCours = [
  {
    label: "Ateliers à domicile",
    to: "/ateliers/à-domicile",
  },
  {
    label: "Ateliers en ligne",
    to: "/ateliers/en-ligne",
  },
];

const réseauxSociaux = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/SospelAtelierEbmosaiques",
    fa: <FaFacebook style={{ fontSize: "1rem", marginRight: "10px" }} />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ebmosaiques/",
    fa: <FaInstagram style={{ fontSize: "1rem", marginRight: "10px" }} />,
  },
];

const meContacter = [
  {
    label: "Téléphone",
    href: numberPhone,
    fa: <FaPhone style={{ fontSize: "1rem", marginRight: "15px" }} />,
  },
  {
    label: "Mail",
    href: mailAdress,
    fa: <FaEnvelope style={{ fontSize: "1rem", marginRight: "15px" }} />,
  },
];

function MenuItem({ menuTitle, internLink, subMenu, index, moveArrow, selectedMenu, scrollMenu }) {
  if (subMenu === null) {
    return (
      <li onClick={scrollMenu}>
        <Link to={internLink}>{menuTitle}</Link>
      </li>
    );
  } else if (subMenu === réseauxSociaux || subMenu === meContacter) {
    return (
      <li onMouseOver={() => moveArrow(index)}>
        <span>
          <span className="arrow">{selectedMenu === index ? "▼" : "▶"}</span>
          <Link to={internLink}>{menuTitle}</Link>
        </span>
        <SubMenuItem
          scrollMenu={scrollMenu}
          subMenu={subMenu}
          index={index}
          numberPhone={numberPhone}
          mailAdress={mailAdress}
          selectedMenu={selectedMenu}
        />
      </li>
    );
  } else {
    return (
      <li onMouseOver={() => moveArrow(index)}>
        <span>
          <span className="arrow">{selectedMenu === index ? "▼" : "▶"}</span>
          <Link to={internLink}>{menuTitle}</Link>
        </span>

        <SubMenuItem scrollMenu={scrollMenu} subMenu={subMenu} index={index} selectedMenu={selectedMenu} />
      </li>
    );
  }
}

function SubMenuItem({ subMenu, scrollMenu, selectedMenu, index }) {
  if (subMenu === réseauxSociaux || subMenu === meContacter) {
    return (
      <ul className={selectedMenu === index ? "subMenu active" : "subMenu"}>
        {subMenu.map((item, index) => (
          <li key={index} onClick={scrollMenu}>
            <a href={item.href}>
              {item.fa} {item.label}
            </a>
          </li>
        ))}
      </ul>
    );
  } else {
    return (
      <ul className={selectedMenu === index ? "subMenu active" : "subMenu"}>
        {subMenu.map((item, index) => (
          <li key={index} onClick={scrollMenu}>
            <Link to={item.to}>
              {item.label === "Liste des collections" ? <span style={{ fontWeight: "bold" }}>{item.label}</span> : item.label}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

function MenuMobile({ moveArrow, selectedMenu }) {
  const [scrolledMenu, setScrolledMenu] = useState(false);
  function scrollMenu() {
    setScrolledMenu(!scrolledMenu);
  }

  return (
    <div id="menuMobile" className={scrolledMenu ? "active" : null}>
      <div onClick={scrollMenu} id="scrollMenuBtn" className={scrolledMenu ? "active" : null}></div>

      <Link to="/" onClick={scrollMenu}>
        <img src="https://cdn.pixabay.com/photo/2013/07/12/17/20/leaf-152047_960_720.png" alt="logo eb mosaiques" id="scrollMenuLogo"></img>
      </Link>

      <ul id="mainMenuMobile">
        <MenuItem menuTitle={"Accueil"} internLink={"/"} subMenu={null} moveArrow={null} selectedMenu={null} scrollMenu={scrollMenu} />

        <MenuItem
          menuTitle={"Qui suis-je ?"}
          internLink={"qui-suis-je"}
          subMenu={null}
          moveArrow={null}
          selectedMenu={null}
          scrollMenu={scrollMenu}
        />

        <MenuItem
          menuTitle={"Mes oeuvres"}
          internLink={null}
          subMenu={mesOeuvres}
          moveArrow={moveArrow}
          selectedMenu={selectedMenu}
          scrollMenu={scrollMenu}
          index={0}
        />

        <MenuItem
          menuTitle={"Mes cours"}
          internLink={null}
          subMenu={mesCours}
          moveArrow={moveArrow}
          selectedMenu={selectedMenu}
          scrollMenu={scrollMenu}
          index={1}
        />

        <MenuItem
          menuTitle={"Expos & événements"}
          internLink={"/événements"}
          subMenu={null}
          moveArrow={null}
          selectedMenu={null}
          scrollMenu={scrollMenu}
        />

        <MenuItem
          menuTitle={"Réseaux sociaux"}
          internLink={null}
          subMenu={réseauxSociaux}
          moveArrow={moveArrow}
          selectedMenu={selectedMenu}
          scrollMenu={scrollMenu}
          index={2}
        />

        <MenuItem
          menuTitle={"Me contacter"}
          internLink={null}
          subMenu={meContacter}
          moveArrow={moveArrow}
          selectedMenu={selectedMenu}
          scrollMenu={scrollMenu}
          index={3}
        />

        <MenuItem
          menuTitle={"Dans la presse"}
          internLink={"dans-la-presse"}
          subMenu={null}
          moveArrow={null}
          selectedMenu={null}
          scrollMenu={scrollMenu}
        />
      </ul>
    </div>
  );
}

function MenuDesktop({ moveArrow, selectedMenu }) {
  return (
    <>
      <div id="menuDesktop">
        <ul id="mainMenuDesktop">
          <MenuItem menuTitle={"Accueil"} internLink={"/"} subMenu={null} moveArrow={null} selectedMenu={null} />

          <MenuItem menuTitle={"Qui suis-je ?"} internLink={"qui-suis-je"} subMenu={null} moveArrow={null} selectedMenu={null} />

          <MenuItem
            menuTitle={"Mes oeuvres"}
            internLink={"/collections"}
            subMenu={mesOeuvres}
            moveArrow={moveArrow}
            selectedMenu={selectedMenu}
            index={0}
          />

          <MenuItem
            menuTitle={"Mes cours"}
            internLink={"/ateliers"}
            subMenu={mesCours}
            moveArrow={moveArrow}
            selectedMenu={selectedMenu}
            index={1}
          />

          <MenuItem menuTitle={"Expos & événements"} internLink={"/événements"} subMenu={null} moveArrow={null} selectedMenu={null} />

          <MenuItem
            menuTitle={"Réseaux sociaux"}
            internLink={null}
            subMenu={réseauxSociaux}
            moveArrow={moveArrow}
            selectedMenu={selectedMenu}
            index={2}
          />

          <MenuItem
            menuTitle={"Me contacter"}
            internLink={null}
            subMenu={meContacter}
            moveArrow={moveArrow}
            selectedMenu={selectedMenu}
            index={3}
          />

          <MenuItem menuTitle={"Dans la presse"} internLink={"dans-la-presse"} subMenu={null} moveArrow={null} selectedMenu={null} />
        </ul>
      </div>
    </>
  );
}

function Header() {
  const [arrow, setArrow] = useState("▶");
  const [selectedMenu, setSelectedMenu] = useState();

  function moveArrow(e) {
    setSelectedMenu(e);
    setArrow(e.arrow === "▶" ? "▼" : "▶");
  }

  return (
    <>
      <header>
        <MenuMobile numberPhone={numberPhone} mailAdress={mailAdress} arrow={arrow} moveArrow={moveArrow} selectedMenu={selectedMenu} />
        <CheckBoxMode />
        <div id="topHeader">
          <Link to="/">
            <img src="https://cdn.pixabay.com/photo/2013/07/12/17/20/leaf-152047_960_720.png" alt="Logo EB Mosaiques" id="headerLogo"></img>
          </Link>
        </div>
      </header>

      <div id="fixedHeader">
        <div id="bottomHeader">
          <p className="bottomHeaderSubTitle">Edith BARBIERA</p>
          <Link to="/">
            <h1>GALERIE EB MOSAIQUES</h1>
          </Link>
          <p className="bottomHeaderSubTitle">Artiste mosaïste</p>
        </div>
      </div>
      <MenuDesktop numberPhone={numberPhone} mailAdress={mailAdress} arrow={arrow} moveArrow={moveArrow} selectedMenu={selectedMenu} />
    </>
  );
}

export default Header;
