import { Header } from './components/Header/index'
import { Main } from './components/Main/index'


export function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />
      {/* Main Content */}
      <Main />
    </div>
  )
}
