import collectionJSON from "./collections.json";
import { TableauxEtDécorsWithCollection } from "./HOCCollections";

function TableauxEtDécors() {
  return (
    <>
      <p className="descrPart">{collectionJSON.TableauxEtDécors.description}</p>
      <TableauxEtDécorsWithCollection />
    </>
  );
}

export default TableauxEtDécors;
