import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import DemoPage from './pages/DemoPage/DemoPage'

function App() {
  return (
    <>
      <Routes >
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/Demo" element={<DemoPage/>}></Route>
      </Routes>
    </>
  )
}

export default App
