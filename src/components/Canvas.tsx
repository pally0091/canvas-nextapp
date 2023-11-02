/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import Slider from "./Slider";

const Canvas: React.FC = () => {
  const canvas = [
    "basetitle Day in London",
    "data 2",
    "data 3",
    "data 4",
    "things to do in London",
  ];
  const canvasData = [
    {
      canvas: "basetitle Day in London",
      title: "title 1",
      description: "description 1",
      img: "/assats/istock.jpg",
    },
    {
      canvas: "data 2",
      title: "title 2",
      description: "description 2",
      img: "/assats/istock1.jpg",
    },
    {
      canvas: "data 3",
      title: "title 3",
      description: "description 3",
      img: "/assats/istock.jpg",
    },
    {
      canvas: "data 4",
      title: "title 4",
      description: "description 4",
      img: "/assats/istock3.jpg",
    },
    {
      canvas: "things to do in London",
      title: "title 5",
      description: "description 5",
      img: "/assats/istock2.jpg",
    },
  ];

  const [selectedCanvas, setSelectedCanvas] = useState<string>(
    "basetitle Day in London"
  );

  // button click handlers
  const handleButtonClick = (canvasName: string) => {
    setSelectedCanvas(canvasName);
  };

  const nextButtonHandle = () => {
    const currentIndex = canvas.findIndex(
      (canvasName) => canvasName === selectedCanvas
    );
    if (currentIndex < canvas.length - 1) {
      setSelectedCanvas(canvas[currentIndex + 1]);
    }
  };

  const prevButtonHandle = () => {
    const currentIndex = canvas.findIndex(
      (canvasName) => canvasName === selectedCanvas
    );
    if (currentIndex > 0) {
      setSelectedCanvas(canvas[currentIndex - 1]);
    }
  };

  console.log(selectedCanvas);
  return (
    <div>
      <h1>Canvas</h1>
      <div className="flex flex-col justify-center relative">
        <div className=" top-0 w-full">
          {selectedCanvas && (
            <div className="relative flex flex-col justify-center">
              <div className="w-full h-96 md:h-[70vh] lg:h-[80vh]">
                <img
                  className="w-full h-full"
                  src={
                    canvasData.find((data) => data.canvas === selectedCanvas)
                      ?.img
                  }
                  alt={selectedCanvas}
                />
              </div>
              <div className="absolute bottom-10 md:bottom-20 lg:bottom-40 left-0 bg-black p-4 pe-10 w-full text-left">
                <h2 className=" w-fit bg-red-500 text-white bg-opacity-70 p-2 text-xl font-semibold">
                  {
                    canvasData.find((data) => data.canvas === selectedCanvas)
                      ?.title
                  }
                </h2>
                <p className=" text-white p-2 text-lg">
                  {
                    canvasData.find((data) => data.canvas === selectedCanvas)
                      ?.description
                  }
                </p>
              </div>
              <button
                className="absolute top-1/2 right-1 font-bold bg-white p-2 rounded-full"
                onClick={nextButtonHandle}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
                  />
                </svg>
              </button>
              <button
                className="absolute top-1/2 left-1 font-bold bg-white p-2 rounded-full"
                onClick={prevButtonHandle}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
        <Slider className="absolute bottom-0 w-full">
          {canvas.map((canvasName) => (
            <button
              className={`relative p-2 md:p-5 lg:p-5 border-s border-black min-w-[25%] z-10 ${
                selectedCanvas === canvasName
                  ? "bg-red-400 text-white"
                  : "bg-gray-200 text-black"
              }`}
              key={canvasName}
              onClick={() => handleButtonClick(canvasName)}
            >
              {selectedCanvas === canvasName && (
                <span className="absolute left-1/2 h-4 w-4 border-t-4 border-r-4 border-transparent border-l-4 border-red-400 bg-red-400 transform rotate-45 top-1 -translate-y-1/2 z-0"></span>
              )}
              {canvasName}
            </button>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Canvas;
