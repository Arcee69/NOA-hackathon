import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

import Profile from './components/Profile';
import Password from './components/Password';

import { getProfile } from '../../../features/board/settings/getProfileSlice';

const Settings = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  const dispatch = useDispatch()


  const [tabs] = useState([
      {
        id: 1,
        tabName: "Profile"
      },
      {
        id: 2,
        tabName: "Password"
      },
    ]
  )

  const changeActiveTab = (item) => {
    setActiveTab(item);
    switch (item) {
      case "Profile":
        setActiveTab("Profile");
        break;
      case "Password":
        setActiveTab("Password");
        break;
      default:
        setActiveTab("Profile");
        break;
    }
  };

  useEffect(() => {
    dispatch(getProfile())
  }, [])


  return (
    <div className='flex flex-col gap-10 p-4'>
        <p className='text-[#101828] font-mont_alt text-[32px] font-semibold'>Settings</p>
      <div className='bg-[#fff] p-4'>
        <div className="flex xs:overflow-x-auto  md:">
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
        {activeTab === "Profile" && <Profile  />}
        {activeTab === "Password" && <Password />}
      
      </div>

    </div>
  )
}

export default Settings