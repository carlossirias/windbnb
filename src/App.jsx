import { Navbar } from "./components/navbar"
import { Footer } from "./components/footer"
import { StaysSection } from "./components/stays-section"
import { StayProvider } from "./context/Stays"

function App() {

  return (
    
    <StayProvider>
      <div className="flex flex-col w-full min-h-screen ">
        <header className="flex flex-none justify-center">
          <Navbar>

          </Navbar>
        </header>
        <main className="flex min-h-full flex-auto justify-center">
          <StaysSection/>

          

        </main>
        <Footer/>
      </div>
    </StayProvider>
  )
}

export default App
