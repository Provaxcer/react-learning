function Watchlist() {
  const data = [
    {id:1, coin: "BTC", price: 765},
    {id:2, coin: "ETH", price: 500},
    {id:3, coin: "MATIC", price: 200},
  ]

  return(
    <div>
      <h2>Watchlist</h2>
    {data.map((coins) => (
        <div key={coins.id}>
          <p>{coins.coin} — ₹{coins.price}</p>
        </div>
      ))}
    </div>
  )
}

export default Watchlist;