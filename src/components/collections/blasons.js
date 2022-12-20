import collectionJSON from "./collections.json";
import { BlasonsWithCollection } from "./HOCCollections";

function Blasons() {
  return (
    <>
      <p className="descrPart">{collectionJSON.Blasons.description}</p>
      <BlasonsWithCollection />
    </>
  );
}

export default Blasons;
