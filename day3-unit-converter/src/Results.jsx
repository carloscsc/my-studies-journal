import { useRef } from "react";

export default function Results({ data }) {
  const { inputConverter, inputTarget, selectedUnitToConvert, selectedUnitToTarget } = data;
  const inputTargetRef = useRef(null);

  /**
   * Copies the value of the inputTargetRef to the clipboard.
   *
   * @async
   * @function copyToClipboard
   * @returns {Promise<void>} A promise that resolves when the value is successfully copied to the clipboard.
   */
  async function copyToClipboard() {
    if (inputTargetRef.current) {
      inputTargetRef.current.select();
      try {
        await navigator.clipboard.writeText(inputTargetRef.current.value);
        alert("Copied to clipboard!");
      } catch (err) {
        console.error("Failed to copy to clipboard", err);
      }
    }
  }

  return (
    <>
      <div className="results">
        {inputConverter} {selectedUnitToConvert.name} is equal to
        <input
          type="text"
          className="input-target"
          value={inputTarget}
          readOnly
          ref={inputTargetRef}
        />
        {selectedUnitToTarget[0]}
      </div>

      <div className="actions">
        <button type="button" onClick={copyToClipboard}>
          Copy
        </button>
        <button type="button">Save result</button>
      </div>
    </>
  );
}
