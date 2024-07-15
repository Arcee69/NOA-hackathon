import React, {useEffect, useState} from 'react'
import Participants from './entriesComponents/Participants';

import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getEntriesById } from '../../../../../features/board/entries/getEntriesByIdSlice';

const Entries = ({ quizDetails }) => {
  const [activeTab, setActiveTab] = useState("Participants");



  const [tabs] = useState([
      {
        id: 1,
        tabName: "Participants"
      },
   
      
    ]
  );

  const changeActiveTab = (item) => {
      setActiveTab(item);
      switch (item) {
        case "Participants":
          setActiveTab("Participants");
          break;
        case "Entries":
          setActiveTab("Entries");
          break;
        default:
          setActiveTab("Participants");
          break;
      }
    };

  return (
    <div className='p-4'>
      <div className='flex flex-col w-full'>
        <h2 className='text-xl font-mont_alt font-semibold'>Manage Entries</h2>
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
      {activeTab === "Participants" && <Participants quizDetails={quizDetails}/>}
  
    </div>
  )
}

export default Entries