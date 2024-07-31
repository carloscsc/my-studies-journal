import { useState } from "react";

const measureTypes = ["Length", "Speed"];
const typesDictionarie = {
  length: {
    metre: {
      metre: 1,
      centimetre: 100,
    },
    centimetre: {
      centimetre: 1,
      metre: 100,
    },
  },
};

function MeasureTypesSelector({ types, setType }) {
  const handleChange = (e) => {
    setType(e.target.value);
  };

  return (
    <div className="measure-type-selector">
      <label htmlFor="measure-type">Measure Types</label>
      <select id="measure-type" name="measure-type" onChange={handleChange}>
        {types.map((type) => (
          <option key={type}>{type}</option>
        ))}
      </select>
    </div>
  );
}

function App() {
  const [selectedType, setSelectedType] = useState(measureTypes[0]);

  return (
    <>
      <h1>Unit Converter for {selectedType.toLocaleUpperCase()}</h1>

      <MeasureTypesSelector setType={setSelectedType} types={measureTypes} />
    </>
  );
}

export default App;
