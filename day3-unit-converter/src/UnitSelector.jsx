/**
 * UnitSelector Component
 *
 * This component displays a dropdown for selecting a unit from a list of units.
 * When a unit is selected, it calls the provided setUnit function with the selected unit.
 *
 * Props:
 * - `units`: Array of unit objects to display in the dropdown.
 * - `setUnit`: Function to set the selected unit.
 * - `selected`: The currently selected unit.
 */

export default function UnitSelector({ units, setUnit, selected, className }) {
  // Handles the change event for the dropdown
  const handleChange = (e) => {
    const selectedOptionIndex = e.target.selectedIndex;
    setUnit(units[selectedOptionIndex]);
  };

  return (
    <>
      <select className={className} onChange={handleChange} value={selected}>
        {units &&
          units.map((unit, i) => (
            <option
              key={i}
              data-unit={JSON.stringify(unit)}
              value={unit.name ?? unit[0]}
              label={unit.name ?? unit[0]}
            >
              {unit.name ?? unit[0]}
            </option>
          ))}
      </select>
    </>
  );
}
