// Import our PricingSection component
import { PricingSection } from './components/PricingSection'

function App() {
  return (
    // Main container with light gray background
    // min-h-screen = minimum height of 100vh (full viewport height)
    // bg-gray-50 = very light gray background
    // py-16 = vertical padding of 4rem (64px)
    // px-4 = horizontal padding of 1rem (16px)
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <PricingSection />
    </div>
  )
}

export default App
