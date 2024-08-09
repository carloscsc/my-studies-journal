import { FaDeleteLeft } from "react-icons/fa6";
/**
 * History Component
 *
 * This component displays a list of saved conversions grouped by category.
 * Each conversion can be removed using the provided removeHistory function.
 *
 * Props:
 * - `dataHistory`: Array of conversion history objects.
 * - `removeHistory`: Function to remove a specific conversion by index.
 */

export default function History({ dataHistory, removeHistory }) {
  // Handles the removal of a conversion by index
  function handleClick(index) {
    removeHistory(index);
  }

  // Groups data by category
  const groupedData = dataHistory.reduce((acc, item, index) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push({ ...item, index });
    return acc;
  }, {});

  return (
    <>
      <h2 className="history-title">Your saved Conversions</h2>

      {Object.keys(groupedData).length > 0 ? (
        Object.keys(groupedData).map((category) => (
          <div key={category}>
            <h3>{category}</h3>
            {groupedData[category].map((item) => (
              <p key={item.index}>
                <strong>
                  {item.inputConverter} {item.selectedUnitToConvert}
                </strong>{" "}
                is equal to{" "}
                <strong>
                  {item.inputTarget} {item.selectedUnitToTarget}
                </strong>
                <button type="button" onClick={() => handleClick(item.index)}>
                  <FaDeleteLeft />
                </button>
              </p>
            ))}
          </div>
        ))
      ) : (
        <p>You have no saved conversions</p>
      )}
    </>
  );
}
