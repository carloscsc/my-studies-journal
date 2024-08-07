/**
 * MeasureTypesSelector Component
 *
 * This component displays a dropdown for selecting a measure type from a list of types.
 * When a type is selected, it calls the provided setType function with the selected type.
 *
 * Props:
 * - `types`: Array of measure type objects to display in the dropdown.
 * - `setType`: Function to set the selected measure type.
 */

export default function MeasureTypesSelector({ types, setType }) {
  // Handles the change event for the dropdown
  function handleChange(e) {
    setType(types[e.target.value]);
  }

  return (
    <div className="measure-type-selector">
      <select
        className="measure-type"
        id="measure-type"
        name="measure-type"
        onChange={handleChange}
      >
        {types.map((type, index) => (
          <option key={index} value={index}>
            {type.type}
          </option>
        ))}
      </select>
    </div>
  );
}
