export default function UnitSelector({ units, setUnit, selected }) {
  const handleChange = (e) => {
    const selectedOptionIndex = e.target.selectedIndex;
    setUnit(units[selectedOptionIndex]);
  };

  return (
    <>
      <select onChange={handleChange} value={selected}>
        {units &&
          units.map((unit, i) => {
            return (
              <option
                key={i}
                data-unit={JSON.stringify(unit)}
                value={unit.name ?? unit[0]}
                label={unit.name ?? unit[0]}
              >
                {unit.name ?? unit[0]}
              </option>
            );
          })}
      </select>
    </>
  );
}
