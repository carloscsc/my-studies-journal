export default function MeasureTypesSelector({ types, setType }) {
  function handleChange(e) {
    setType(types[e.target.value]);
  }

  return (
    <div className="measure-type-selector">
      <label htmlFor="measure-type">Measure Types</label>
      <select id="measure-type" name="measure-type" onChange={handleChange}>
        {types.map((type, index) => {
          return (
            <option key={index} value={index}>
              {type.type}
            </option>
          );
        })}
      </select>
    </div>
  );
}
