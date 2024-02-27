import React, { useState } from 'react';

export default function SolidButtons() {
  let [color, setcolor] = useState('red');
  //
  return (
    <div
      className=" w-full h-screen flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0"
      style={{ backgroundColor: color }}
    >
      <button
        type="button"
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        onClick={() => {
          setcolor('lime');
        }}
      >
        Button text
      </button>
      {/*  */}
      <button
        type="button"
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        onClick={() => {
          setcolor('emerald');
        }}
      >
        Button text
      </button>
      <button
        type="button"
        className="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
        onClick={() => {
          setcolor('rose');
        }}
      >
        Button text
      </button>
      <button
        type="button"
        className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        onClick={() => {
          setcolor('indigo');
        }}
      >
        Button text
      </button>
      <button
        type="button"
        className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        onClick={() => {
          setcolor('blue');
        }}
      >
        Button text
      </button>
      <button
        type="button"
        className="rounded-md bg-brown-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brown-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3
        focus-visible:outline-brown-800"
        onClick={() => {
          setcolor('sky');
        }}
      >
        Button text
      </button>
    </div>
  );
}
