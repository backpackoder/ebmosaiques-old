import { Link } from 'react-router-dom';

function Presentation() {
    return (
        <div id='presentationWrapper'>
            <h2>Ma plus grande réalisation</h2>
            <div id='presentationPart'>
                <img
                    src='https://www.ebmosaiques.com/ima2/for1.jpg'
                    alt='Ma plus grande réalisation'
                    id='presentationImg'
                />
                <p id='presentationDescr'>
                    Nommée "Méditerranée", cette fresque de 9 mètres de longueur et de 2 mètres de hauteur a été posée
                    pour une piscine privée à Monaco.
                </p>
                <Link to='/'><button className="goToCollection">Voir les photos</button></Link>
            </div>
        </div>
    )
}

function CollectionPart() {
    return (
        <>
        <div id="partsWrapper">
            <h2>Toutes mes collections</h2>
            <div id='collectionParts'>
                <div id="horloges" className="part">
                    <h3>Mes pendules</h3>
                    <img
                        src="https://www.ebmosaiques.com/ima2/ha16p.jpg"
                        alt="Exemple de pendule en mosaïque"
                        className="demoPicture">
                    </img>
                    <Link to='/collections/horloges'><button className="goToCollection">Voir la collection</button></Link>
                </div>
                <div id="miroirs" className="part">
                    <h3>Mes miroirs</h3>
                    <img
                        src="https://www.ebmosaiques.com/ima2/mir12m.jpg"
                        alt="Exemple de miroir en mosaïque"
                        className="demoPicture">
                    </img>
                    <Link to='/collections/miroirs'><button className="goToCollection">Voir la collection</button></Link>
                </div>
                <div id="paintingsAndDecorations" className="part">
                    <h3>Mes tableaux</h3>
                    <img
                        src="https://www.ebmosaiques.com/ima2/colombm.jpg"
                        alt="Exemple de tableau en mosaïque"
                        className="demoPicture">
                    </img>
                    <Link to='/collections/tableaux-et-décors'><button className="goToCollection">Voir la collection</button></Link>
                </div>
                <div id="slabs" className="part">
                    <h3>Mes dalles de sol</h3>
                    <img
                        src="https://www.ebmosaiques.com/ima2/salama3m.jpg"
                        alt="Exemple de dalle en mosaïque"
                        className="demoPicture">
                    </img>
                    <Link to='/collections/dalles'><button className="goToCollection">Voir la collection</button></Link>
                </div>
                <div id="houseNames" className="part">
                    <h3>Noms de maisons</h3>
                    <img
                        src="https://www.ebmosaiques.com/ima2/verg1m.jpg"
                        alt="Exemple de nom de maison ou enseigne en mosaïque"
                        className="demoPicture">
                    </img>
                    <Link to='/collections/noms-de-maisons'><button className="goToCollection">Voir la collection</button></Link>
                </div>
                <div id="coatOfArms" className="part">
                    <h3>Blasons</h3>
                    <img
                        src="https://www.ebmosaiques.com/ima2/blanim.jpg"
                        alt="Exemple de blason en mosaïque"
                        className="demoPicture">
                    </img>
                    <Link to='/collections/blasons'><button className="goToCollection">Voir la collection</button></Link>
                </div>
            </div>
        </div>
        </>
    )
}

function WorkshopPart() {
    return (
        <div className='partContainer grid1'>
            <h2 id='workshopPartTitle'>Apprenez la mosaïque</h2>
            <div id='workshopPart'>
                <p id='workshopPartDescr'>Rejoignez mes ateliers pour apprendre la mosaïque rapidement.</p>
                <Link to='ateliers'>
                    <img
                        src='https://images.squarespace-cdn.com/content/v1/5bda08d0af2096886e0e1b1b/f8b9c2ce-74a2-4b26-9f91-f99505614be4/mosaic-puzzle-art-for-kids-children-s-creative-game-hands-are-playing-mosaic-at-table-colorful-multi-colored-details-close-up.jpg?format=1000w'
                        alt='Atelier de mosaïque'
                        id='mosaicWorkshopImg'>
                    </img>
                </Link>
                <Link to='ateliers'><button id='workshopPartBtn' className="goToCollection">Je veux apprendre</button></Link>
            </div>
        </div>
    )
}

function EventPart() {
    return (
        <div className='partContainer grid2'>
            <h2 id='eventPartTitle'>Nos expositions & événements</h2>
            <div id='eventPart'>
                <p id='eventPartDescr'>Ne ratez pas les prochaines expositions et événements !</p>
                <Link to='événements'>
                    <img
                        src='https://www.ebmosaiques.com/ima2/afv1m.jpg'
                        alt='Atelier de mosaïque'
                        id='eventImg'>
                    </img>
                </Link>
                <Link to='événements'><button id='eventPartBtn' className="goToCollection">Voir les événements</button></Link>
            </div>
        </div>
    )
}

function OnTheNewsPart() {
    return (
        <div className='partContainer grid3'>
            <h2 id='onTheNewsPartTitle'>Dans la presse</h2>
            <div id='onTheNewsPart'>
                <p id='onTheNewsPartDescr'>Voici ce que disent les médias de mon travail.</p>
                <Link to='dans-la-presse'>
                    <img
                        src='https://fyooyzbm.filerobot.com/v7/protec/DATA_ART_7533144-uvHYlpF1.jpg?vh=441137&ci_seal=7639363e5b&w=1280&h=746&gravity=auto&func=crop'
                        alt='Atelier de mosaïque'
                        id='onTheNewsImg'>
                    </img>
                </Link>
                <Link to='dans-la-presse'><button id='onTheNewsPartBtn' className="goToCollection">Voir les reportages</button></Link>
            </div>
        </div>
    )
}

function Parts() {
    return (
        <>
        <Presentation />
        <CollectionPart />
        <div id='individualPartsInRow'>
            <WorkshopPart />
            <EventPart />
            <OnTheNewsPart />
        </div>
        </>
    )
}

export {CollectionPart}
export default Parts