const cookies = [
  { id: 1, flavour: "Chocolate Chip" },
  { id: 2, flavour: "Oatmeal" },
  { id: 3, flavour: "Sugar" },
];

function Render() {
  return (
  <div>
    {cookies.map((cookie) => <p key={cookie.id}>{cookie.flavour} cookie</p>)}
    </div>)
}

function App () {
  return <Render />
}

export default App;