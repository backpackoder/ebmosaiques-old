import collectionJSON from "./collections.json";
import { MiroirsWithCollection } from "./HOCCollections";

function Miroirs() {
  return (
    <>
      <p className="descrPart">{collectionJSON.Miroirs.description}</p>
      <MiroirsWithCollection />
    </>
  );
}

export default Miroirs;
