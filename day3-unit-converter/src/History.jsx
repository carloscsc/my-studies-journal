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
              <div key={item.index}>
                <p>
                  {item.inputConverter} {item.selectedUnitToConvert} is equal to {item.inputTarget}{" "}
                  {item.selectedUnitToTarget}
                </p>
                <button type="button" onClick={() => handleClick(item.index)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
        ))
      ) : (
        <p>You don't have any saved conversions yet.</p>
      )}
    </>
  );
}
