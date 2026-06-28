function Watchlist() {
    const StockList = [
    {
      id: 1,
      name: "Apple",
      price: 500,
    },
    {
      id: 2,
      name: "Google",
      price: 200,
    },
    {
      id: 3,
      name: "Meta",
      price: 100,
    }
  ];
    return (<div>

        <h2>Watchlist</h2>
        {StockList.map((stock) => (
  <div key={stock.id}>
    <p>{stock.name}</p>
  </div>
))}

    </div>);
    
}

export default Watchlist;