function Cookie(props) {
  return <div>{props.flavour} cookies</div>;
}

function Shop() {
  return (
    <div>
      <Cookie flavour="Chocolate Chip" />
      <Cookie flavour="Oatmeal" />
      <Cookie flavour="Sugar" />
    </div>
  );
}

function App() {
  return <Shop />;
}

export default App;
