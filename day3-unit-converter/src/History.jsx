export default function History({ dataHistory, removeHistory }) {
  function handleClick(index) {
    removeHistory(index);
  }

  const groupedData = dataHistory.reduce((acc, item, index) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push({ ...item, index });
    return acc;
  }, {});

  return (
    <>
      <h2>Your saved Conversions</h2>

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
                  Deletar
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
