function Events() {
    return (
        <>
        <h2>Liste des expositions</h2>

        <div id="expoWrapper">
            <div className="expo">
                <h3>Portraits</h3>
                <p className="expoDate">
                    <b>DATE :</b>
                    <br />26 et 27 décembre 2015</p>
                <p className="expoType">
                    Exposition collective
                </p>
                <img
                    src="https://www.ebmosaiques.com/ima4/port1m.jpg"
                    alt="exempleExpo"
                    className="expoImg">
                </img>
                <p className="expoDescr">
                    12 portraits sur leur 31 finiront l'année en beauté !
                </p>
                <p className="expoLocation">
                    <b>LIEU :</b>
                    <br />
                    Galerie EB Mosaïques, 3 rue Doira à Sospel.
                </p>
                <p className="expoSchedules">
                    <b>HORAIRES :</b>
                    <br />
                    <u>SAMEDI :</u>
                    <br />
                    10h30 - 12h30 ET 14h30 - 18h30.
                    <br />
                    <u>DIMANCHE :</u>
                    <br />
                    10h30 - 12h30 ET 16h - 18h.
                </p>
                <p className="expoContact">
                    <b>CONTACT :</b>
                    <br />
                    Téléphone : +33 6 08 05 40 65
                </p>
            </div>
        </div>
        </>
    )
}

export default Events