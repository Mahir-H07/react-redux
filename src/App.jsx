import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByAmount, reset } from './Reducers/counterSlice'


function App() {

  const { value } = useSelector((state) => state.counter)

  const dispatch = useDispatch();


  return (
    <div className="px-4 md:px-20 lg:px-40 mt-16">

      <div className="h-30 bg-slate-500 text-white flex justify-center items-center rounded-2xl mt-10 p-5">
        <h1 className="text-3xl md:text-5xl font-bold">Count : {value}</h1>
      </div>

      <div className="bg-green-600 flex flex-col md:flex-row 
      justify-center items-center rounded-xl gap-5 mt-10 p-5 md:h-32">

        <button
          onClick={() => dispatch(increment())}
          className="px-5 py-3 md:py-5 bg-pink-700 rounded-2xl text-white text-lg md:text-xl font-bold w-full md:w-auto">
          Increment
        </button>

        <button
          onClick={() => dispatch(decrement())}
          className="px-5 py-3 md:py-5 bg-red-700 rounded-2xl text-white text-lg md:text-xl font-bold w-full md:w-auto">
          Decrement
        </button>

        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="px-5 py-3 md:py-5 bg-blue-700 rounded-2xl text-white text-lg md:text-xl font-bold w-full md:w-auto">
          IncrementBy5
        </button>

        <button
          onClick={() => dispatch(reset())}
          className="px-5 py-3 md:py-5 bg-black rounded-2xl text-white text-lg md:text-xl font-bold w-full md:w-auto">
          Reset
        </button>

      </div>

    </div>

  )
}

export default App
