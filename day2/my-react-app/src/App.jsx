function Header() {
    return(
        <h1>Title</h1>
    )
}

function CoinCard() {
    return(
    <div>
        <h3>Coin Name</h3>
        <h3>Price</h3>
    </div>
    )
}

function App() {
    return(
        <div>
            <Header />
            <CoinCard />
            <CoinCard />
        </div>
    )
}

export default App