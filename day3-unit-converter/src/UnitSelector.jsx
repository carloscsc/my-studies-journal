export default function UnitSelector({ setUnitC, unitsToConvert, setUnitT, targetsUnit }) {
  const handleChangeConverter = (e) => {
    // console.log(e);
  };

  const handleChangeTarget = (e) => {
    console.log(e);
  };

  return (
    <>
      <div className="converter-selector">
        <label htmlFor="converter">Converter</label>
        <select id="converter" name="converter" onChange={handleChangeConverter}>
          {unitsToConvert &&
            unitsToConvert.map((unit, i) => {
              return (
                <option key={i} value={i}>
                  {unit.name}
                </option>
              );
            })}
        </select>
      </div>

      <div className="target-slector">
        <label htmlFor="target">Target</label>
        <select id="target" name="target" onChange={handleChangeTarget}>
          {targetsUnit.map((taregt, i) => {
            return (
              <option key={i} value={i}>
                {taregt[0]}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}
