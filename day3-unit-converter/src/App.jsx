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

  const [inputConverter, setInputConverter] = useState(1);
  const [inputTarget, setInputTarget] = useState(0);

  useEffect(() => {
    fetch("/Data.json")
      .then((response) => response.json())
      .then((data) => {
        setMeasureTypes(data.measureTypes);
        setSelectedType(data.measureTypes[0]);
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

      setInputTarget(inputConverter * Object.entries(selectedType.units[0].conversions)[0][1]);
    }
  }, [selectedType]);

  useEffect(() => {
    if (selectedUnitToConvert.conversions) {
      setUnitsToTarget(Object.entries(selectedUnitToConvert.conversions));
      setSelectedUnitToTarget(Object.entries(selectedUnitToConvert.conversions)[0]);
      setInputTarget(inputConverter * Object.entries(selectedUnitToConvert.conversions)[0][1]);
    }
  }, [selectedUnitToConvert]);

  useEffect(() => {
    if (selectedUnitToTarget[1]) {
      setInputTarget(inputConverter * selectedUnitToTarget[1]);
    } else {
      setInputTarget(0);
    }
  }, [selectedUnitToTarget]);

  function setValue(e) {
    setInputConverter(e.target.value);
    setInputTarget(e.target.value * selectedUnitToTarget[1]);
  }

  return (
    <>
      <MeasureTypesSelector setType={setSelectedType} types={measureTypes} />

      <input
        type="number"
        className="input-converter"
        min={1}
        value={inputConverter}
        onChange={setValue}
      />

      <UnitSelector
        units={unitsToConvert}
        setUnit={setSelectedUnitToConvert}
        selected={selectedUnitToConvert && selectedUnitToConvert.name}
      />

      <span> = </span>

      <input type="text" className="input-target" value={inputTarget} readOnly />

      <UnitSelector
        units={unitsToTarget}
        setUnit={setSelectedUnitToTarget}
        selected={selectedUnitToTarget && selectedUnitToTarget[0]}
      />
    </>
  );
}

export default App;
