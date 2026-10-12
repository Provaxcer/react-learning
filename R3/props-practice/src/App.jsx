import StudentData from "./Student"

function App() {
  return (
    <div>
      <StudentData name="Sanu" age={24} isStudent={true}/>
      <StudentData name="Zoro" age={23} isStudent={false}/>
      <StudentData name="Luffy" age={21} isStudent={true}/>
      <StudentData />
    </div>
  )
}

export default App;