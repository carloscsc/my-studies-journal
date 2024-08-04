/**
 * Results Component
 *
 * This component displays the conversion results and provides options to copy the result to the clipboard or save it.
 *
 * Props:
 * - `data`: Object containing the conversion data.
 * - `setHistory`: Function to save the conversion result to history.
 */

export default function Results({ data, setHistory, history }) {
  const { inputConverter, inputTarget, selectedUnitToConvert, selectedUnitToTarget } = data;

  /**
   * Copies the value of the inputTarget to the clipboard.
   *
   * @async
   * @function copyToClipboard
   * @returns {Promise<void>} A promise that resolves when the value is successfully copied to the clipboard.
   */
  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(inputTarget);
      alert("Copied to clipboard!");
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Failed to copy to clipboard", err);
    }
  }

  // Saves the current conversion result to history
  function save() {
    // avoid repeated entries in saved history
    if (
      !history.filter(
        (item) =>
          selectedUnitToConvert === item.selectedUnitToConvert &&
          selectedUnitToTarget === item.selectedUnitToTarget &&
          inputConverter === item.inputConverter,
      ).length > 0
    ) {
      setHistory(data);
      alert("New conversion added!");
    } else {
      alert("Already in history!");
    }
  }

  return (
    <>
      <div className="results">
        {inputConverter} {selectedUnitToConvert} is equal to
        <input type="text" className="input-target" value={inputTarget} readOnly />
        {selectedUnitToTarget}
      </div>

      <div className="actions">
        <button type="button" onClick={copyToClipboard}>
          Copy
        </button>
        <button type="button" onClick={save}>
          Save result
        </button>
      </div>
    </>
  );
}
