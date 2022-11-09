function OnTheNews() {
    return (
        <>
        <h2>Liste des articles</h2>

        <div id="newsWrapper">
            <div className="news">
                <p className="newsSource">
                    <b>Nice Matin</b>
                </p>
                <p className="newsDate">
                    16/08/2021
                </p>
                <a
                    href="https://www.nicematin.com/expos/a-sospel-le-soulagement-des-artistes-apres-la-crise-708492"
                    className="newsTitle"
                >
                    À Sospel, le soulagement des artistes après la crise
                </a>
                <a href="https://www.nicematin.com/expos/a-sospel-le-soulagement-des-artistes-apres-la-crise-708492">
                    <img
                        src="https://fyooyzbm.filerobot.com/v7/protec/DATA_ART_7533144-uvHYlpF1.jpg?vh=441137&ci_seal=7639363e5b&w=1280&h=746&gravity=auto&func=crop"
                        alt="exempleExpo"
                        className="newsImg">
                    </img>
                </a>
                <button
                href="https://www.nicematin.com/expos/a-sospel-le-soulagement-des-artistes-apres-la-crise-708492"
                className="newsLink">
                    Voir l'article
                </button>
            </div>
        </div>
        </>
    )
}

export default OnTheNews