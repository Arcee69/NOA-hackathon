import React, { useState } from 'react'
import Winner from "../../../../../assets/images/winner.png"
import Winners from './winningComponent/Winners';
import Entry from './winningComponent/Entries';

const Winning = () => {
  const [activeTab, setActiveTab] = useState("Winner(s)");

  const [tabs] = useState([
    {
      id: 1,
      tabName: "Winner(s)"
    },
    {
      id: 2,
      tabName: "Entries"
    },
    
  ]
);

const changeActiveTab = (item) => {
  setActiveTab(item);
  switch (item) {
    case "Winner(s)":
      setActiveTab("Winner(s)");
      break;
    case "Entries":
      setActiveTab("Entries");
      break;
    default:
      setActiveTab("Winner(s)");
      break;
  }
};

  return (
    <div className='p-4'>
        <div className='flex flex-col w-full'>
          <h2 className='text-xl font-semibold'>Winning</h2>
        </div>

        <div className='bg-[#fff] flex xs:w-full md:w-[691px] h-[144px] mt-4 p-4 gap-4 items-center'>
          <div className='bg-PINK-_100 rounded-xl p-2'>
            <img src={Winner} alt="winner" className='w-[100px] h-[84px] items-center align-center flex' />
          </div>
          <div className='flex flex-col xs:gap-1 md:gap-5'>
            <h2 className='font-medium xs:text-center md:text-left text-xl'>Pick a Winner</h2>
            <div className='flex xs:flex-col md:flex-row gap-3'>
              <button 
                type="button" 
                onClick={() => navigate("/manage-contests/manage-entries")}
                className="font-normal bg-primary xs:text-sm md:text-base p-2 rounded-md text-[#fff] border border-solid"
                style={{ width: "163px" }}
              >
                Select Manually
              </button>

              <button 
                type="button" 
                // onClick={() => setActiveTab("User Details")}
                className="font-normal border-primary bg-[#fff] rounded-md text-primary xs:text-sm md:text-base p-2 border border-solid"
                style={{ width: "163px" }}
              >
                Select From Polls
              </button>
            </div>
          </div>
        </div>

        <div className="flex mt-12 rounded-t-md xs:overflow-x-auto bg-[#fff]">
          {tabs.map((item, id) => {
          return (
              <div
              key={id}
              className={`flex cursor-pointer p-4 ${activeTab === item?.tabName ? "border-b-2 border-primary " : ""
                  }`}
              onClick={() => changeActiveTab(item?.tabName)}
              >
              <div className={`${activeTab === item?.tabName
                  ? "text-primary"
                  : "text-NEUTRAL-_600"} cursor-pointer`}
              >
                  {item?.tabName}
              </div>
              </div>
          );
          })}
      </div>
      {activeTab === "Winner(s)" && <Winners />}
      {activeTab === "Entries" && <Entry />}
    </div>
  )
}

export default Winning