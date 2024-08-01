import { useEffect, useState } from "react";
import MeasureTypesSelector from "./MeasureTypesSelector.jsx";
import UnitSelector from "./UnitSelector.jsx";

function App() {
  const [selectedTypeIndex, setSelectedTypeIndex] = useState(0);

  const [measureTypes, setMeasureTypes] = useState([]);
  const [selectedType, setSelectedType] = useState([]);

  const [unitsToConvert, setUnitsToConvert] = useState([]);
  const [selectedUnitToConvert, setSelectedUnitToConvert] = useState([]);

  const [unitsToTarget, setUnitsToTarget] = useState([]);
  const [selectedUnitToTarget, setSelectedUnitToTarget] = useState([]);

  useEffect(() => {
    fetch("/Data.json")
      .then((response) => response.json())
      .then((data) => {
        // get data from json and set to measureTypes
        setMeasureTypes(data.measureTypes);

        // set initial data for selectedType
        setSelectedType(data.measureTypes[0]);

        // set initial value to unitsToConvert
        setUnitsToConvert(data.measureTypes[0].units);

        // set inital value to selectedUnitToConvert
        setSelectedUnitToConvert(data.measureTypes[0].units[0]);

        // set initial value to unitsToTarget
        setUnitsToTarget(Object.entries(data.measureTypes[0].units[0].conversions));

        // set initial value to selectedUnitToTarget
        setSelectedUnitToTarget(Object.entries(data.measureTypes[0].units[0].conversions)[0]);
      })
      .catch((error) => console.error("Error fetching the measure types:", error));
  }, []);

  // chage the units every time that data change
  useEffect(() => {
    setUnitsToConvert(selectedType.units);

    if (selectedType.units) {
      setSelectedUnitToConvert(selectedType.units[0]);
    }
  }, [selectedType]);

  useEffect(() => {
    if (selectedUnitToConvert.conversions) {
      setUnitsToTarget(Object.entries(selectedUnitToConvert.conversions));
    }
  }, [selectedUnitToConvert]);

  useEffect(() => {
    if (selectedUnitToTarget) {
      setSelectedUnitToTarget(unitsToTarget[0]);
    }
  }, [unitsToTarget]);

  useEffect(() => {
    console.log(selectedUnitToConvert, selectedUnitToTarget);
  }, [selectedUnitToTarget]);

  return (
    <>
      <MeasureTypesSelector setType={setSelectedType} types={measureTypes} />
      <UnitSelector
        setUnitC={setSelectedUnitToConvert}
        unitsToConvert={unitsToConvert}
        setUnitT={setUnitsToTarget}
        targetsUnit={unitsToTarget}
      />
    </>
  );
}

export default App;
