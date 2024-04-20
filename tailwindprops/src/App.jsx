import './App.css'
import Cards from './components/Cards'
function App() {

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Cards name="Allen"/>
      <Cards name="Jeff" btnText="click me"/>
    </>
  )
}

export default App
