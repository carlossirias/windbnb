import { Navbar } from "./components/navbar"
import { StaysSection } from "./components/stays-section"
import { StayProvider } from "./context/Stays"

function App() {

  return (
    
    <StayProvider>
      <header className="flex justify-center">
        <Navbar>

        </Navbar>
      </header>
      <main className="flex justify-center">
        <StaysSection>

        </StaysSection>
      </main>
    </StayProvider>
  )
}

export default App
