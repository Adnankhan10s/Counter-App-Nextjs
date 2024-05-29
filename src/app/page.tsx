"use client"
import { useState } from "react";


export default function Home() {
  const [counter, setCounter] = useState(0);
  const inCrement = () => {
    return (
      setCounter(counter + 1)
    )
  }
  const deCrement = () => {
    return (
      setCounter(counter - 1)
    )
  }
  const Reset = () => {
    return (
      setCounter(0)
    )
  }

  return (
    <main >
      <div className="w-full h-screen bg-slate-400  items-center  content-center">
        <div className="w-full flex justify-center items-center py-4 text-4xl  font-extrabold text-orange-900">
          <h1 className="font-Play">COUNTER APP</h1>
        </div>

        <div   >

          <div className=" bg-neutral-300 rounded-md container mx-auto flex flex-col md:grid-cols-3 justify-center  items-center h-[500px] gap-6 " >
            <div>
            <button className="font-Play px-6 py-4 font-semibold bg-green-400 text-white hover:bg-green-300 hover:text-black rounded-md" onClick={inCrement}>INCREMENT</button>
            </div>
            <div className=" w-20 text-center content-center ">
              <span className="text-blue-700  text-4xl font-extrabold  ">{counter}</span>
            </div>
            <div>
            <button className="font-Play px-6 py-4 font-semibold text-white bg-red-500 hover:bg-red-300 hover:text-black rounded-md " onClick={deCrement}>DECREMENT</button>
            </div>
           <div><button className="bg-gray-900 text-white hover:text-black hover:bg-white px-6 py-4 font-Play rounded-md" onClick={Reset}>RESET</button></div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
