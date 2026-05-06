import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import BestSellers from './components/BestSellers'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import BackgroundDecor from './components/BackgroundDecor'

function App() {
  return (
    <div className="relative min-h-screen bg-white">
      <BackgroundDecor />
      <Header />
      
      <main>
        <Hero />
        <Features />
        <BestSellers />
        <Newsletter />
      </main>

      <Footer />
    </div>
  )
}

export default App
