import "./App.css";
import Penny from "../src/images/PennyTransparent.png";
import Nickel from "../src/images/NickelTransparent.png";
import Dime from "../src/images/DimeTransparent.png";
import Quarter from "../src/images/QuarterTransparent.png";
import {useState} from "react"

function App() {
  const [total, setTotal] = useState(0.00)
  
  const [pennyCounter, setPennyCounter] = useState(0)
  const [nickelCounter, setNickelCounter] = useState(0)
  const [dimeCounter, setDimeCounter] = useState(0)
  const [quarterCounter, setQuarterCounter] = useState(0)

  function handleAddPenny(){
    setTotal(total +.01)
    setPennyCounter(pennyCounter + 1) 
  }
  function handleAddNickel(){
    setTotal(total +.05) 
    setNickelCounter(nickelCounter + 1)
  }
  function handleAddDime(){
    setTotal(total +.10)
    setDimeCounter(dimeCounter + 1) 
  }
  function handleAddQuarter(){
    setTotal(total +.25)
    setQuarterCounter(quarterCounter + 1) 
  }
  
  function handleClearTotal(){
    setTotal(0) 
    setPennyCounter(0) 
    setNickelCounter(0) 
    setDimeCounter(0)
    setQuarterCounter(0) 
  }
  
  
  return (
    <>
      <main>
        <section className="bg-yellow-50 w-[40rem] h-screen flex flex-col mx-auto">
          <section className="w-full text-8xl text-center">${total.toFixed(2)}</section>
          <section className="w-full flex justify-center">
            <button className="w-full text-white bg-orange-700 text-3xl p-4">
              Add
            </button>
            <button className="w-full text-white bg-orange-700 text-3xl p-4">
              Remove
            </button>
            <button className="w-full text-white bg-orange-700 text-3xl p-4">
              Coins/Bills
            </button>
            <button className="w-full text-white bg-red-500 text-3xl p-4" onClick={handleClearTotal}>
              Clear
            </button>
          </section>
          <section className="bg-yellow-400 w-full h-full">
            {/* Penny and Nickel Top Row */}
            <section className="bg-blue-400 w-full h-1/2 flex">
              <section className="w-1/2 h-full flex flex-col items-center">
                <section className="bg-white w-full text-center text-2xl border-[1px] border-black">
                  {pennyCounter}
                </section>
                <section className="bg-gray-400 w-full h-full flex justify-center items-center border-black border-x-[1px] border-b-[1px] text-center" onClick={handleAddPenny}>
                  <img className="w-[8.5rem]" src={Penny} alt="Penny" />
                </section>
              </section>
              <section className="w-1/2 h-full flex flex-col items-center">
                <section className="bg-white w-full text-center text-2xl border-y-[1px] border-r-[1px] border-black">
                  {nickelCounter}
                </section>
                <section className="bg-gray-400 w-full h-full flex justify-center items-center border-black border-r-[1px] border-b-[1px] text-center" onClick={handleAddNickel}>
                  <img className="w-[9rem]" src={Nickel} alt="Nickel" />
                </section>
              </section>
            </section>

            {/* Dime and Quarter Bottom Row */}
            <section className="bg-blue-400 w-full h-1/2 flex">
              <section className="w-1/2 h-full flex flex-col items-center">
                <section className="bg-white w-full text-center text-2xl border-[1px] border-black">
                  {dimeCounter}
                </section>
                <section className="bg-gray-400 w-full h-full flex justify-center items-center border-black border-x-[1px] border-b-[1px] text-center" onClick={handleAddDime}>
                  <img className="w-[8rem]" src={Dime} alt="Dime" />
                </section>
              </section>
              <section className="w-1/2 h-full flex flex-col items-center">
                <section className="bg-white w-full text-center text-2xl border-y-[1px] border-r-[1px] border-black">
                  {quarterCounter}
                </section>
                <section className="bg-gray-400 w-full h-full flex justify-center items-center border-black border-r-[1px] border-b-[1px] text-center" onClick={handleAddQuarter}>
                  <img className="w-[11rem]" src={Quarter} alt="Quarter" />
                </section>
              </section>
            </section>
          </section>
          <section className="flex w-full h-[6rem]">
            <button className="w-full bg-yellow-50">Counter</button>
            <button className="w-full bg-yellow-50">Calculator</button>
          </section>
        </section>
      </main>
    </>
  );
}

export default App;
