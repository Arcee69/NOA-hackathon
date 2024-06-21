import React, {useEffect, useState} from 'react'
import Participants from './entriesComponents/Participants';
import Entry from './entriesComponents/Entries';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getEntriesById } from '../../../../../features/board/entries/getEntriesByIdSlice';

const Entries = () => {
  const [activeTab, setActiveTab] = useState("Participants");

  const { state } = useLocation();
  const dispatch = useDispatch()

  console.log(state, "OmL")

  useEffect(() => {
    dispatch(getEntriesById(state?.id))
  }, [])

  const [tabs] = useState([
      {
        id: 1,
        tabName: "Participants"
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
        <h2 className='text-xl font-semibold'>Manage Entries</h2>
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
      {activeTab === "Participants" && <Participants />}
      {activeTab === "Entries" && <Entry />}
    </div>
  )
}

export default Entries