import HorlogesJSON from "./horloges.json";
import MiroirsJSON from "./miroirs.json";
import TableauxEtDécorsJSON from "./tableaux et décors.json";
import DallesJSON from "./dalles.json";
import NomsDeMaisonsJSON from "./noms de maisons.json";
import BlasonsJSON from "./blasons.json";

function withCollection(collectionJSON) {
  return function CollectionMaker() {
    return (
      <>
        <div className="collectionRow">
          {collectionJSON.map((data, index) => {
            return (
              <div key={index} className="collectionItem">
                <div className="collectionItemPresentation">
                  <div>
                    <h3>{data.nom}</h3>
                    <p className="collectionItemDimensions">
                      {data.dimensions.hauteur}cm x {data.dimensions.largeur}cm.
                    </p>
                  </div>
                  <div className={data.disponible ? "collectionItemImgContainer" : "collectionItemImgContainer itemSold"}>
                    <img src={data.img} alt={data.nom} />
                  </div>
                </div>
                <div className="collectionItemInfos">
                  <p className="collectionItemDescr">{data.description}</p>
                  <p className="collectionItemPrice">
                    Prix :<span> {data.prix ? `${data.prix}€` : "non défini"}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };
}

const HorlogesWithCollection = withCollection(HorlogesJSON);
const MiroirsWithCollection = withCollection(MiroirsJSON);
const TableauxEtDécorsWithCollection = withCollection(TableauxEtDécorsJSON);
const DallesWithCollection = withCollection(DallesJSON);
const NomsDeMaisonsWithCollection = withCollection(NomsDeMaisonsJSON);
const BlasonsWithCollection = withCollection(BlasonsJSON);

export { HorlogesWithCollection };
export { MiroirsWithCollection };
export { TableauxEtDécorsWithCollection };
export { DallesWithCollection };
export { NomsDeMaisonsWithCollection };
export { BlasonsWithCollection };
