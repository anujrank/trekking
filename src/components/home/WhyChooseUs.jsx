import React from "react";
import { TiHomeOutline } from "react-icons/ti";
import { LuClock } from "react-icons/lu";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { IoStarOutline } from "react-icons/io5";
function WhyChooseUs() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-6 text-center">
        <h3 className="text-[#4ade80] font-bold">Why families choose us</h3>
        <h1 className="text-3xl font-semibold">
          Adventure planning is hard. We've already done the hard part.
        </h1>
        <p>
          Most families spend 40+ hours researching a trip and still land on
          generic itineraries not built for their kids' ages, energy levels, or
          budget.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          <div className="flex flex-col space-y-3 border border-gray-300 rounded-lg p-6">
            <div className="h-10 w-10 flex justify-center items-center rounded-lg p-1 bg-green-200">
              <TiHomeOutline className="text-xl text-green-700" />
            </div>{" "}
            <h3 className="font-semibold">Neighborhood by neighborhood</h3>
            <p>
              Exact areas, logical daily flow, no backtracking. You always know
              exactly where you are and where you're heading next.
            </p>
          </div>
          <div className="flex flex-col space-y-4 border border-gray-300 rounded-lg p-6">
            <div className="h-10 w-10 flex justify-center items-center rounded-lg p-1 bg-green-200">
              <LuClock className="text-xl text-green-700" />
            </div>{" "}
            <h3 className="font-semibold">Timed to the minute</h3>
            <p>
              Exact areas, logical daily flow, no backtracking. You always know
              exactly where you are and where you're heading next.
            </p>
          </div>
          <div className="flex flex-col space-y-4 border border-gray-300 rounded-lg p-6">
            <div className="h-10 w-10 flex justify-center items-center rounded-lg p-1 bg-green-200">
              <RiDeleteBin2Fill className="text-xl text-green-700" />
            </div>{" "}
            <h3 className="font-semibold">Restaurants kids will eat</h3>
            <p>
              Exact areas, logical daily flow, no backtracking. You always know
              exactly where you are and where you're heading next.
            </p>
          </div>
          <div className="flex flex-col space-y-4 border border-gray-300 rounded-lg p-6">
            <div className="h-10 w-10 flex justify-center items-center rounded-lg p-1 bg-green-200">
              <IoStarOutline className="text-xl text-green-700" />
            </div>
            <h3 className="font-semibold">Insider tips that change everything</h3>
            <p>
              Exact areas, logical daily flow, no backtracking. You always know
              exactly where you are and where you're heading next.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
