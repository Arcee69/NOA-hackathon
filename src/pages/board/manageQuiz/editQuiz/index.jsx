import React, { useState } from 'react'
import BasicInfo from './components/BasicInfo';
import SetQuestions from './components/SetQuestions';
import { useLocation } from 'react-router-dom';


const EditQuiz = () => {
  const [activeTab, setActiveTab] = useState("Basic Info");

  const { state } = useLocation()


  const [tabs] = useState([
      {
        id: 1,
        tabName: "Basic Info"
      },
      // {
      //   id: 2,
      //   tabName: "Set Questions"
      // },
    ]
  )

  const changeActiveTab = (item) => {
    setActiveTab(item);
    switch (item) {
      case "Basic Info":
        setActiveTab("Basic Info");
        break;
      case "Set Questions":
        setActiveTab("Set Questions");
        break;
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
      {activeTab === "Basic Info" && <BasicInfo setActiveTab={setActiveTab} state={state} />}
      {/* {activeTab === "Set Questions" && <SetQuestions setActiveTab={setActiveTab} />} */}
    </div>
  )
}

export default EditQuiz