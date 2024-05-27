import React, { useState } from 'react'
import Overview from './components/Overview';
import Entries from './components/Entries';
import Share from './components/Share';
import Report from './components/Report';
import Winning from './components/Winning';

const ManageEntries = () => {
    const [activeTab, setActiveTab] = useState("Overview");


    const [tabs] = useState([
        {
          id: 1,
          tabName: "Overview"
        },
        {
          id: 2,
          tabName: "Entries"
        },
        {
          id: 4,
          tabName: "Share"
        },
        {
          id: 5,
          tabName: "Report"
        },
        {
          id: 6,
          tabName: "Winning"
        },
      ]
    );

    const changeActiveTab = (item) => {
        setActiveTab(item);
        switch (item) {
          case "Overview":
            setActiveTab("Overview");
            break;
          case "Entries":
            setActiveTab("Entries");
            break;
          case "Share":
            setActiveTab("Share");
            break;
          case "Report":
            setActiveTab("Report");
            break;
          case "Winning":
            setActiveTab("Winning");
            break;
          default:
            setActiveTab("Overview");
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
      {activeTab === "Overview" && <Overview />}
      {activeTab === "Entries" && <Entries />}
      {activeTab === "Share" && <Share />}
      {activeTab === "Report" && <Report />}
      {activeTab === "Winning" && <Winning />}
    </div>
  )
}

export default ManageEntries