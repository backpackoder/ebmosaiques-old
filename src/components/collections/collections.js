import { Link, Outlet } from 'react-router-dom';

import { CollectionPart } from '../homepage/Parts';

function Collections() {
    return (
        <>
        <div style={{backgroundColor: "lightblue"}}>
            <p style={{textAlign: "center", textDecoration: "underline"}}>Liste des collections :</p>
            <nav id='collectionNav'>
                <Link to="/collections/horloges">Horloges</Link>
                <Link to="/collections/mirroirs">Miroirs</Link>
                <Link to="/collections/tableaux-et-décorations">Tableaux & décors</Link>
                <Link to="/collections/dalles">Dalles</Link>
                <Link to="/collections/noms-de-maisons">Noms de maisons</Link>
                <Link to="/collections/blasons">Blasons</Link>
            </nav>
        </div>
        
        <Outlet />
        
        <hr />

        <CollectionPart />
        </>
    )
}

export default Collections