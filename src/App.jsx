import { BrowserRouter } from "react-router-dom"
import { About, Contact, Hero, Navbar, Works, Footer } from './components'

const App = () => {
  

  return (
    <>
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Works />
        <div className="relative z-0">
          <Contact />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
