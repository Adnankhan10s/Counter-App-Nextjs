"use client"
import { useState } from "react";
import { Reddit_Mono } from "next/font/google";

const reddit = Reddit_Mono({
  weight:'300',
  subsets:['latin'],
  display:'auto'
})

export default function Home() {
  const [counter, setCounter] = useState(0);
  const inCrement = () => {
    return (
     setCounter(counter+1)
    )
  }
  const deCrement = () => {
    return (
     setCounter(counter-1)
    )
  }

  return (
    <>
    <div className="w-full h-screen bg-slate-600  items-center  content-center">
         <div className="w-full flex justify-center items-center py-4 text-4xl font-bold text-orange-950">
          <h1 className='{reddit.className}font-bold'>COUNTER APP</h1>
          </div>
    
      <div   >
      
        <div className=" bg-slate-500 rounded-md container mx-auto flex flex-col md:flex-row justify-center  items-center h-[500px] gap-6 " >
          <button className="px-6 py-4 font-semibold bg-green-400 text-black hover:bg-green-300 hover:text-gray-500 rounded-md" onClick={inCrement}>Increment</button>
          <div className=" w-20 text-center content-center ">
          <span className="text-blue-700  text-2xl font-bold ">{counter}</span>
          </div>
          
          <button className="px-6 py-4 font-semibold text-black bg-red-500 hover:bg-red-300 hover:text-gray-500 rounded-md " onClick={deCrement}>Decrement</button>
        </div>
      </div>
    </div>
    </>
  );
}
