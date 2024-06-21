import React, { useState } from 'react'
import BasicInfo from './components/BasicInfo';
import UserDetails from './components/UserDetails';
import WinnerSelection from './components/WinnerSelection';
import Prizes from './components/Prizes';
import Entry from './components/Entry';

const PhotoContest = () => {
  const [activeTab, setActiveTab] = useState("Basic Info");


  const [tabs] = useState([
      {
        id: 1,
        tabName: "Basic Info"
      },
      {
        id: 2,
        tabName: "User Details"
      },
      {
        id: 3,
        tabName: "Winner Selection"
      },
      {
        id: 4,
        tabName: "Prizes"
      },
      // {
      //   id: 5,
      //   tabName: "Entry"
      // },
    ]
  )

  const changeActiveTab = (item) => {
    setActiveTab(item);
    switch (item) {
      case "Basic Info":
        setActiveTab("Basic Info");
        break;
      case "User Details":
        setActiveTab("User Details");
        break;
      case "Winner Selection":
        setActiveTab("Winner Selection");
        break;
      case "Prizes":
        setActiveTab("Prizes");
        break;
      // case "Entry":
      //   setActiveTab("Entry");
      //   break;
      default:
        setActiveTab("Basic Info");
        break;
    }
  };


  return (
    <div className=''>
      <div className="flex xs:overflow-x-auto bg-[#fff] md:">
        {tabs.map((item, id) => {
          return (
            <div
              key={id}
              className={`flex cursor-pointer p-4 ${activeTab === item?.tabName ? "border-b-2 border-[#027315] " : ""
                }`}
              onClick={() => changeActiveTab(item?.tabName)}
            >
              <div className={`${activeTab === item?.tabName
                  ? "text-[#027315]"
                  : "text-NEUTRAL-_600"}  font-mont_alt cursor-pointer`}
              >
                {item?.tabName}
              </div>
            </div>
          );
        })}
      </div>
      {activeTab === "Basic Info" && <BasicInfo setActiveTab={setActiveTab} />}
      {activeTab === "User Details" && <UserDetails setActiveTab={setActiveTab} />}
      {activeTab === "Winner Selection" && <WinnerSelection setActiveTab={setActiveTab}  />}
      {activeTab === "Prizes" && <Prizes setActiveTab={setActiveTab} />}
      {/* {activeTab === "Entry" && <Entry  setActiveTab={setActiveTab}/>} */}
    </div>
  )
}

export default PhotoContest