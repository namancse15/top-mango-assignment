import '@styles/app.scss'
import FeedBoard from '@/components/FeedBoard'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'

const App = () => {
  return (
    <div className="app">
      <div className="app-header">
        <Header />
      </div>
      <div className="app-body">
        <Sidebar />
        <FeedBoard />
      </div>
      
    </div>
  )
}

export default App
