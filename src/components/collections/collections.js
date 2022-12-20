import { Link, Outlet } from "react-router-dom";
import { CollectionPart } from "../homepage/Parts";
import CollectionJSON from "./collections.json";

function Collections() {
  return (
    <>
      <div id="collectionNavWrapper">
        <nav id="collectionNav">
          <Link to="/collections">Voir la liste</Link>
          <Link to="/collections/horloges">{CollectionJSON.Horloges.nom}</Link>
          <Link to="/collections/miroirs">{CollectionJSON.Miroirs.nom}</Link>
          <Link to="/collections/tableaux-et-décors">{CollectionJSON.TableauxEtDécors.nom}</Link>
          <Link to="/collections/dalles">{CollectionJSON.Dalles.nom}</Link>
          <Link to="/collections/noms-de-maisons">{CollectionJSON.NomsDeMaisons.nom}</Link>
          <Link to="/collections/blasons">{CollectionJSON.Blasons.nom}</Link>
        </nav>
      </div>

      <Outlet />

      <hr />

      <CollectionPart />
    </>
  );
}

export default Collections;
