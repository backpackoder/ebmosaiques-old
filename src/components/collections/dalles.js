import collectionJSON from "./collections.json";
import { DallesWithCollection } from "./HOCCollections";

function Dalles() {
  return (
    <>
      <p className="descrPart">{collectionJSON.Dalles.description}</p>
      <DallesWithCollection />
    </>
  );
}

export default Dalles;
