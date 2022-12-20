import collectionJSON from "./collections.json";
import { NomsDeMaisonsWithCollection } from "./HOCCollections";

function NomsDeMaisons() {
  return (
    <>
      <p className="descrPart">{collectionJSON.NomsDeMaisons.description}</p>
      <NomsDeMaisonsWithCollection />
    </>
  );
}

export default NomsDeMaisons;
