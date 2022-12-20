// import { useState } from "react";
import { HorlogesWithCollection } from "./HOCCollections";
import collectionJSON from "./collections.json";

// function FilterTrackers({ onTextChange }) {
//   function handleChange(e) {
//     onTextChange(e.target.value);
//   };
//   return (
//     <div className="component-search-input">
//       <h2>Recherche de Trackers</h2>
//       <div>
//         <input type="text" placeholder="libéllé du tracker" onChange={handleChange}></input>
//       </div>
//     </div>
//   );
// };
//
// function TrackersApp() {
//   const [allProducts, setAllProducts] = useState(HorlogesJSON)
//   const [filterText, setFilterText] = useState('')

//   function handleTextChange(text) {
//     setFilterText(text)
//     const filteredTracker = HorlogesJSON.filter(
//       track => track.nom.toLowerCase().indexOf(text) !== -1,
//     )
//     setAllProducts(filteredTracker)
//   }

//   return (
//     <div>
//       <FilterTrackers onTextChange={handleTextChange} />
//       <Horloges allProducts={allProducts} />
//     </div>
//   )
// }

function Horloges() {
  return (
    <>
      <p className="descrPart">{collectionJSON.Horloges.description}</p>
      {/* <TrackersApp /> */}
      <HorlogesWithCollection />
    </>
  );
}

// export { TrackersApp };
export default Horloges;
