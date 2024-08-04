import { useReducer, useEffect, useRef, useState } from "react";
import MeasureTypesSelector from "./MeasureTypesSelector.jsx";
import UnitSelector from "./UnitSelector.jsx";
import Results from "./Results.jsx";

/**
 * Initial state of the application.
 * @typedef {Object} initialState
 * @property {Array} measureTypes - The list of available measure types.
 * @property {Object} selectedType - The currently selected measure type.
 * @property {Array} unitsToConvert - The list of units to convert.
 * @property {Object} selectedUnitToConvert - The currently selected unit to convert.
 * @property {Array} unitsToTarget - The list of units to target.
 * @property {Object} selectedUnitToTarget - The currently selected unit to target.
 * @property {number} inputConverter - The input value for conversion.
 * @property {number} inputTarget - The converted value.
 */
const initialState = {
  measureTypes: [],
  selectedType: {},
  unitsToConvert: [],
  selectedUnitToConvert: {},
  unitsToTarget: [],
  selectedUnitToTarget: {},
  inputConverter: 1,
  inputTarget: 0,
};

/**
 * Reducer function for managing state in the application.
 *
 * @param {Object} state - The current state of the application.
 * @param {Object} action - The action object that describes the state change.
 * @returns {Object} - The new state after applying the action.
 */
function reducer(state, action) {
  switch (action.type) {
    case "SET_MEASURE_TYPES":
      return { ...state, measureTypes: action.payload, selectedType: action.payload[0] };
    case "SET_SELECTED_TYPE":
      return { ...state, selectedType: action.payload };
    case "SET_UNITS_TO_CONVERT":
      return { ...state, unitsToConvert: action.payload };
    case "SET_SELECTED_UNIT_TO_CONVERT":
      return { ...state, selectedUnitToConvert: action.payload };
    case "SET_UNITS_TO_TARGET":
      return { ...state, unitsToTarget: action.payload };
    case "SET_SELECTED_UNIT_TO_TARGET":
      return { ...state, selectedUnitToTarget: action.payload };
    case "SET_INPUT_CONVERTER":
      return { ...state, inputConverter: action.payload };
    case "SET_INPUT_TARGET":
      return { ...state, inputTarget: action.payload };
    default:
      return state;
  }
}

function App() {
  /**
   * Reducer hook for managing state in the App component.
   *
   * @param {function} reducer - The reducer function for updating state.
   * @param {object} initialState - The initial state object.
   * @returns {array} - An array containing the current state and a dispatch function.
   */
  const [state, dispatch] = useReducer(reducer, initialState);
  const inputConverterRef = useRef(1);
  const inputElementRef = useRef(null);
  const [shouldFocus, setShouldFocus] = useState(true);

  // Get initial data from db and set initial value for measureTypes
  // and selectedMeasureTypes
  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "SET_MEASURE_TYPES", payload: data.measureTypes });
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.error("Error fetching the measure types:", error));
  }, []);

  // useEffect hook to update state when selectedType changes
  // If selectedType has units, dispatch actions to set units and conversions in the state
  useEffect(() => {
    if (state.selectedType.units) {
      setShouldFocus(true);
      const units = state.selectedType.units;
      const conversions = Object.entries(units[0].conversions);
      dispatch({ type: "SET_UNITS_TO_CONVERT", payload: units });
      dispatch({ type: "SET_UNITS_TO_TARGET", payload: conversions });
      dispatch({ type: "SET_SELECTED_UNIT_TO_CONVERT", payload: units[0] });
      dispatch({ type: "SET_SELECTED_UNIT_TO_TARGET", payload: conversions[0] });
      dispatch({
        type: "SET_INPUT_TARGET",
        payload: inputConverterRef.current * conversions[0][1],
      });
    }
  }, [state.selectedType]);

  // useEffect hook to update state when selectedUnitToConvert changes
  // If selectedUnitToConvert has conversions, dispatch actions to set conversions and input target in the state
  useEffect(() => {
    if (state.selectedUnitToConvert.conversions) {
      const conversions = Object.entries(state.selectedUnitToConvert.conversions);
      dispatch({ type: "SET_UNITS_TO_TARGET", payload: conversions });
      dispatch({ type: "SET_SELECTED_UNIT_TO_TARGET", payload: conversions[0] });
      dispatch({
        type: "SET_INPUT_TARGET",
        payload: inputConverterRef.current * conversions[0][1],
      });
    }
  }, [state.selectedUnitToConvert]);

  // useEffect hook to update input target when selectedUnitToTarget or inputConverter changes
  // If selectedUnitToTarget has a valid conversion factor, set input target based on conversion
  // Otherwise, set input target to 0
  useEffect(() => {
    if (state.selectedUnitToTarget[1]) {
      dispatch({
        type: "SET_INPUT_TARGET",
        payload: state.inputConverter * state.selectedUnitToTarget[1],
      });
    } else {
      dispatch({ type: "SET_INPUT_TARGET", payload: 0 });
    }
  }, [state.selectedUnitToTarget, state.inputConverter]);

  // useEffect hook to keep the input focused
  useEffect(() => {
    if (shouldFocus && inputElementRef.current) {
      inputElementRef.current.focus();
      inputElementRef.current.select();
    }
  }, [shouldFocus]);

  /**
   * Sets the value of the input and updates the converter and target values accordingly.
   *
   * @param {Event} e - The event object representing the input change event.
   * @returns {void}
   */
  function setValue(e) {
    const value = e.target.value;
    dispatch({ type: "SET_INPUT_CONVERTER", payload: value });
    dispatch({ type: "SET_INPUT_TARGET", payload: value * state.selectedUnitToTarget[1] });
    setShouldFocus(false);
  }

  return (
    <>
      <MeasureTypesSelector
        setType={(type) => dispatch({ type: "SET_SELECTED_TYPE", payload: type })}
        types={state.measureTypes}
      />

      <input
        type="number"
        className="input-converter"
        min={1}
        value={state.inputConverter}
        onChange={setValue}
        onFocus={() => setShouldFocus(true)}
        ref={inputElementRef}
      />

      <UnitSelector
        units={state.unitsToConvert}
        setUnit={(unit) => dispatch({ type: "SET_SELECTED_UNIT_TO_CONVERT", payload: unit })}
        selected={state.selectedUnitToConvert && state.selectedUnitToConvert.name}
      />

      <span> to </span>

      <UnitSelector
        units={state.unitsToTarget}
        setUnit={(unit) => dispatch({ type: "SET_SELECTED_UNIT_TO_TARGET", payload: unit })}
        selected={state.selectedUnitToTarget && state.selectedUnitToTarget[0]}
      />

      <Results
        data={{
          inputConverter: state.inputConverter,
          inputTarget: state.inputTarget,
          selectedUnitToConvert: state.selectedUnitToConvert,
          selectedUnitToTarget: state.selectedUnitToTarget,
        }}
      />
    </>
  );
}

export default App;
