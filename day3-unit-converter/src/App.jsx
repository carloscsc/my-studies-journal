import { useEffect, useState } from "react";
import MeasureTypesSelector from "./MeasureTypesSelector.jsx";
import UnitSelector from "./UnitSelector.jsx";

function App() {
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
      // eslint-disable-next-line no-console
      .catch((error) => console.error("Error fetching the measure types:", error));
  }, []);

  // chage the units every time that data change
  useEffect(() => {
    if (selectedType.units) {
      setUnitsToConvert(selectedType.units);
      setUnitsToTarget(Object.entries(selectedType.units[0].conversions));
      setSelectedUnitToConvert(selectedType.units[0]);
      setSelectedUnitToTarget(Object.entries(selectedType.units[0].conversions)[0]);
    }
  }, [selectedType]);

  useEffect(() => {
    if (selectedUnitToConvert.conversions) {
      setUnitsToTarget(Object.entries(selectedUnitToConvert.conversions));
      setSelectedUnitToTarget(Object.entries(selectedUnitToConvert.conversions)[0]);
    }
  }, [selectedUnitToConvert]);

  // resultado no console
  console.log(1 * selectedUnitToTarget[1]);

  return (
    <>
      <MeasureTypesSelector setType={setSelectedType} types={measureTypes} />
      <UnitSelector
        units={unitsToConvert}
        setUnit={setSelectedUnitToConvert}
        selected={selectedUnitToConvert && selectedUnitToConvert.name}
      />
      <UnitSelector
        units={unitsToTarget}
        setUnit={setSelectedUnitToTarget}
        selected={selectedUnitToTarget && selectedUnitToTarget[0]}
      />
    </>
  );
}

export default App;
