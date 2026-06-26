function TraderProfile() {
  return(
    <div>
      <TraderCard name="Santanu" capital={500} profitpercentage={5} />
      <TraderCard name="Zoro" capital={100} profitpercentage={2} />
      <TraderCard name="Luffy" capital={400} profitpercentage={1} />
    </div>
  )
}

function TraderCard(props) {
  return(
    <div>
      <h1>{props.name}</h1>
      <h3>{props.capital}</h3>
      <h3>{props.profitpercentage}</h3>
    </div>  
  )
}