import { useReducer, useEffect, useRef } from "react";
import MeasureTypesSelector from "./MeasureTypesSelector.jsx";
import UnitSelector from "./UnitSelector.jsx";
import Results from "./Results.jsx";
import History from "./History.jsx";

/**
 * Initial state of the application.
 */
const initialState = {
  measureTypes: [],
  history: [],
  selectedType: {},
  unitsToConvert: [],
  selectedUnitToConvert: {},
  unitsToTarget: [],
  selectedUnitToTarget: {},
  inputConverter: 1,
  inputTarget: 0,
  shouldFocus: true,
};

/**
 * Reducer function for managing state in the application.
 */
function reducer(state, action) {
  switch (action.type) {
    case "SET_MEASURE_TYPES":
      return { ...state, measureTypes: action.payload, selectedType: action.payload[0] };
    case "SET_HISTORY":
      return { ...state, history: action.payload };
    case "ADD_TO_HISTORY":
      return { ...state, history: [...state.history, action.payload] };
    case "REMOVE_FROM_HISTORY":
      return {
        ...state,
        history: state.history.filter((_, index) => index !== action.payload),
      };
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
    case "SET_SHOULD_FOCUS":
      return { ...state, shouldFocus: action.payload };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const inputConverterRef = useRef(1);
  const inputElementRef = useRef(null);

  // Fetch measure types and local history from storage
  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "SET_MEASURE_TYPES", payload: data.measureTypes });
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.error("Error fetching the measure types:", error));

    try {
      const localHistory = localStorage.getItem("localHistory");
      if (localHistory) {
        dispatch({ type: "SET_HISTORY", payload: JSON.parse(localHistory) });
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log("Error in LocalStorage:", error);
    }
  }, []);

  // Update state when a selected type changes
  useEffect(() => {
    if (state.selectedType.units) {
      const units = state.selectedType.units;
      const conversions = Object.entries(units[0].conversions);
      dispatch({ type: "SET_SHOULD_FOCUS", payload: true });
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

  // Update state when selected unit to convert changes
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

  // Update input target when selected unit to target or input converter changes
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

  // Keep input focused when shouldFocus is true
  useEffect(() => {
    if (state.shouldFocus && inputElementRef.current) {
      inputElementRef.current.focus();
      inputElementRef.current.select();
    }
  }, [state.shouldFocus]);

  // Save history to localStorage when it changes
  useEffect(() => {
    if (state.history.length > 0) {
      localStorage.setItem("localHistory", JSON.stringify(state.history));
    } else {
      localStorage.clear();
    }
  }, [state.history]);

  /**
   * Sets the value of the input and updates the converter and target values accordingly.
   */
  function setValue(e) {
    const value = e.target.value;
    dispatch({ type: "SET_INPUT_CONVERTER", payload: value });
    dispatch({ type: "SET_INPUT_TARGET", payload: value * state.selectedUnitToTarget[1] });
    dispatch({ type: "SET_SHOULD_FOCUS", payload: false });
  }

  return (
    <div className="container">

      <div className="measure-wrap">
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
          onFocus={() => dispatch({ type: "SET_SHOULD_FOCUS", payload: true })}
          ref={inputElementRef}
        />

        <UnitSelector
          units={state.unitsToConvert}
          setUnit={(unit) => dispatch({ type: "SET_SELECTED_UNIT_TO_CONVERT", payload: unit })}
          selected={state.selectedUnitToConvert && state.selectedUnitToConvert.name}
        />

        <br />
        <span> -to- </span>
        <br />

        <UnitSelector
          units={state.unitsToTarget}
          setUnit={(unit) => dispatch({ type: "SET_SELECTED_UNIT_TO_TARGET", payload: unit })}
          selected={state.selectedUnitToTarget && state.selectedUnitToTarget[0]}
        />

        <Results
          data={{
            category: state.selectedType.type,
            inputConverter: state.inputConverter,
            inputTarget: state.inputTarget,
            selectedUnitToConvert: state.selectedUnitToConvert.name,
            selectedUnitToTarget: state.selectedUnitToTarget[0],
          }}
          history={state.history}
          setHistory={(data) => dispatch({ type: "ADD_TO_HISTORY", payload: data })}
        />
      </div>

      <div className="history-wrap">
        <History
          dataHistory={state.history}
          removeHistory={(index) => dispatch({ type: "REMOVE_FROM_HISTORY", payload: index })}
        />
      </div>
    </div>
  );
}

export default App;
