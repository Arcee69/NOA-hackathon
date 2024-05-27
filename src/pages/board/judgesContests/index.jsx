import React, { useState } from 'react'
import addIcon from "../../../assets/icons/add.svg"
import AllContests from './components/AllContests';
import AcceptedContests from './components/AcceptedContests';
import PendingInvites from './components/PendingInvites';

const JudgesContests = () => {
    const [activeTab, setActiveTab] = useState("All Contests");

    const [tabs] = useState([
        {
          id: 1,
          tabName: "All Contests",
        },
        {
          id: 2,
          tabName: "Accepted Contests",
        },
        {
          id: 3,
          tabName: "Pending Invites",
        },
      ]);

      const changeActiveTab = (item) => {
        setActiveTab(item);
        switch (item) {
          case "All Contests":
            setActiveTab("All Contests");
            break;
          case "Accepted Contests":
            setActiveTab("Accepted Contests");
            break;
          case "Pending Invites":
            setActiveTab("Pending Invites");
            break;
          default:
            setActiveTab("All Contests");
            break;
        }
      };

  return (
    <div className='p-4 overflow-x-hidden'>
        <div className='flex justify-between items-center'>
            <h1 className='font-semibold xs:text-lg lg:text-3xl text-[#000]'>Judges</h1>
          
        </div>
       <div className='w-full md:h-[169px] flex flex-col md:flex-row gap-4 bg-[#fff] mt-5 p-8 rounded'>
            <div className='flex flex-col gap-2.5 md:w-4/12'>
                <div className='flex gap-4'>
                    <p className='text-base text-[#A5A5A5]'>Assigned Contests</p>
                    {/* <div><p>10.0%</p></div> */}
                </div>
                <div className='text-2xl text-[#006] font-bold'>0</div>
            </div>
            <div className='w-full h-[3px] md:w-[3px] md:h-[91px] bg-[#D9DEF1]'></div>
            <div className='flex flex-col gap-2.5 md:w-4/12'>
                <div className='flex gap-4'>
                    <p className='text-base text-[#A5A5A5]'>Pending Judgement</p>
                    {/* <div><p>3.0%</p></div> */}
                </div>
                <div className='text-2xl text-[#006] font-bold'>0</div>
            </div>
            <div className='w-full h-[3px] md:w-[3px] md:h-[91px] bg-[#D9DEF1]'></div>
            <div className='flex flex-col gap-2.5 md:w-4/12'>
                <div className='flex gap-4'>
                    <p className='text-base text-[#A5A5A5]'>Completed Judgements</p>
                    {/* <div><p>3.2%</p></div> */}
                </div>
                <div className='text-2xl text-[#006] font-bold'>0</div>
            </div>
       </div>
       <div className="flex mt-6">
        {tabs.map((item, id) => {
          return (
            <div
              key={id}
              className={`flex cursor-pointer gap-3 p-4 rounded-tl ${activeTab === item?.tabName ? "bg-[#fff] text-[#006]" : " text-[#006]"
                }`}
              onClick={() => changeActiveTab(item?.tabName)}
            >
              <div 
                className={`${activeTab === item?.tabName  ? "text-[#006]" : "text-[#006]"} text-xl font-semibold cursor-pointer`}
              >
                {item?.tabName}
              </div>
            </div>
          );
        })}
      </div>
      {activeTab === "All Contests" && <AllContests />}
      {activeTab === "Accepted Contests" && <AcceptedContests />}
      {activeTab === "Pending Invites" && <PendingInvites />}

    </div>
  )
}

export default JudgesContests