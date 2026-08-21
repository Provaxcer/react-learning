import { useState } from "react";

// function Cookie(props) {
//   return <div>{props.flavour} cookies</div>;
// }

// function Shop() {
//   return (
//     <div>
//       <Cookie flavour="Chocolate Chip" />
//       <Cookie flavour="Oatmeal" />
//       <Cookie flavour="Sugar" />
//     </div>
//   );
// }

// function App() {
//   return <Shop />;
// }

function Counter() {
  const [count, increaseCount] = useState(0);
  return (
    <div>
      <p>{count === 0 ? "No cookies baked yet." : `Cookies Baked: ${count}`}</p>
      <button onClick={() => increaseCount(count + 1)}>Bake a cookie</button>
    </div>
  );
}

function App() {
  return <Counter />;
}

export default App;