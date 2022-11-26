import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

const numberPhone = "https://api.whatsapp.com/send?phone=0033608054065";
const mailAdress = "mailto:edithbarbiera@aol.fr";

const mesOeuvres = [
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

function MenuItem({
  menuTitle,
  internLink,
  subMenu,
  index,
  numberPhone,
  mailAdress,
  moveArrow,
  selectedMenu,
  scrollMenu,
}) {
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
            <Link to={item.to}>{item.label}</Link>
          </li>
        ))}
      </ul>
    );
  }
}

function MenuMobile({ moveArrow, selectedMenu, numberPhone, mailAdress }) {
  const [scrolledMenu, setScrolledMenu] = useState(false);
  function scrollMenu() {
    setScrolledMenu(!scrolledMenu);
  }

  return (
    <div id="menuMobile" className={scrolledMenu ? "active" : null}>
      <div
        onClick={scrollMenu}
        id="scrollMenuBtn"
        className={scrolledMenu ? "active" : null}
      ></div>

      <Link to="/" onClick={scrollMenu}>
        <img
          src="https://cdn.pixabay.com/photo/2013/07/12/17/20/leaf-152047_960_720.png"
          alt="logo eb mosaiques"
          id="scrollMenuLogo"
        ></img>
      </Link>

      <ul id="mainMenuMobile">
        <MenuItem
          menuTitle={"Accueil"}
          internLink={"/"}
          subMenu={null}
          moveArrow={null}
          selectedMenu={null}
          scrollMenu={scrollMenu}
        />

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
          numberPhone={numberPhone}
          mailAdress={mailAdress}
          moveArrow={moveArrow}
          selectedMenu={selectedMenu}
          scrollMenu={scrollMenu}
          index={2}
        />

        <MenuItem
          menuTitle={"Me contacter"}
          internLink={null}
          subMenu={meContacter}
          numberPhone={numberPhone}
          mailAdress={mailAdress}
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

function MenuDesktop({ moveArrow, selectedMenu, numberPhone, mailAdress }) {
  return (
    <>
      <div id="menuDesktop">
        <ul id="mainMenuDesktop">
          <MenuItem
            menuTitle={"Accueil"}
            internLink={"/"}
            subMenu={null}
            moveArrow={null}
            selectedMenu={null}
          />

          <MenuItem
            menuTitle={"Qui suis-je ?"}
            internLink={"qui-suis-je"}
            subMenu={null}
            moveArrow={null}
            selectedMenu={null}
          />

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

          <MenuItem
            menuTitle={"Expos & événements"}
            internLink={"/événements"}
            subMenu={null}
            moveArrow={null}
            selectedMenu={null}
          />

          <MenuItem
            menuTitle={"Réseaux sociaux"}
            internLink={null}
            subMenu={réseauxSociaux}
            numberPhone={numberPhone}
            mailAdress={mailAdress}
            moveArrow={moveArrow}
            selectedMenu={selectedMenu}
            index={2}
          />

          <MenuItem
            menuTitle={"Me contacter"}
            internLink={null}
            subMenu={meContacter}
            numberPhone={numberPhone}
            mailAdress={mailAdress}
            moveArrow={moveArrow}
            selectedMenu={selectedMenu}
            index={3}
          />

          <MenuItem
            menuTitle={"Dans la presse"}
            internLink={"dans-la-presse"}
            subMenu={null}
            moveArrow={null}
            selectedMenu={null}
          />
        </ul>
      </div>
    </>
  );
}

function Header({ numberPhone, mailAdress }) {
  const [arrow, setArrow] = useState("▶");
  const [selectedMenu, setSelectedMenu] = useState();

  function moveArrow(e) {
    setSelectedMenu(e);
    setArrow(e.arrow === "▶" ? "▼" : "▶");
  }

  return (
    <>
      <div id="topHeader"></div>
      <div id="header">
        <h1>
          <Link to="/" id="h1">
            GALERIE EB MOSAIQUES
          </Link>
        </h1>

        <MenuMobile
          numberPhone={numberPhone}
          mailAdress={mailAdress}
          arrow={arrow}
          moveArrow={moveArrow}
          selectedMenu={selectedMenu}
        />

        <div id="bottomHeader">
          <p className="subTitle">Edith BARBIERA</p>
          <Link to="/">
            <img
              src="https://cdn.pixabay.com/photo/2013/07/12/17/20/leaf-152047_960_720.png"
              alt="Logo EB Mosaiques"
              id="headerLogo"
            ></img>
          </Link>
          <p className="subTitle">Artiste mosaïste</p>
        </div>

        <MenuDesktop
          numberPhone={numberPhone}
          mailAdress={mailAdress}
          arrow={arrow}
          moveArrow={moveArrow}
          selectedMenu={selectedMenu}
        />
      </div>
    </>
  );
}

export default Header;
