function Portfolio() {
const name = "Santanu";
const value = 150;
const coins = 1;

  return (
    <div>
      <p>{name}</p>
      <p>{value}</p>
      <p>{coins}</p>
      <p>{value > 100? "Up" : "Down"}</p>
    </div>
  )
}

export default Portfolio