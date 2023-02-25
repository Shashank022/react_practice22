import "./styles.css";
// import ComponentA from "./components/ComponentA";
// import ComponentB from "./components/ComponentB";
// import ComponentC from "./components/ComponentC";
import React, { useReducer, useState, useTransition } from "react";
import DatFetching from "./components/DatFetching";
import names from "./components/data.json";

export const CountContext = React.createContext();
// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

export default function App() {
  //const [count, dispatch] = useReducer(reducer, initialState);
  const [query, setQuery] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isPending, StartTransition] = useTransition();
  const changeHandler = (event) => {
    setQuery(event.target.value);
    StartTransition(() => setQuery(event.target.value));
  };
  const filterNames = names.filter((item) => {
    return item.first_name.includes(query) || item.last_name.includes(query);
  });

  return (
    <div className="App">
      <input type="text" value={query} onChange={changeHandler} />
      {isPending && <p>Updating List...</p>}
      {filterNames.map((item) => (
        <p key={item.id}>
          {item.first_name} {item.last_name}
        </p>
      ))}
    </div>
  );
}
