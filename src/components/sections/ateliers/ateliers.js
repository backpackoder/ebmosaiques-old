import { Link, Outlet } from 'react-router-dom';

function Ateliers() {
    return (
        <>
        <h2>Mes ateliers</h2>

        <p id='workshopDescr'>
            Vous avez envie d'apprendre la mosaïque mais vous ne savez pas comment ?
            <br />
            Je propose des ateliers pour tous les âges et pour toutes les envies.
            <br />
            <br />
            <u>Choisissez votre type d'atelier :</u>
        </p>

        <div id='workshopsWrapper'>
            <div className='workshop faceToFace'>
                <h3 className='workshopType'>Ateliers à domicile</h3>
                <Link to='/ateliers/à-domicile'>
                    <img
                        src="https://recreanice.fr/sites/default/files/node_images/mosaique.jpg"
                        alt="Cours à domicile"
                        className="workshopImg">
                    </img>
                </Link>
            </div>

            <div className='workshop online'>
                <h3 className='workshopType'>Ateliers en ligne</h3>
                <Link to='/ateliers/en-ligne'>
                    <img
                        src="https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Cours en ligne"
                        className="workshopImg">
                    </img>
                </Link>
            </div>
        </div>

        <Outlet />
        </>
    )
}

export default Ateliers