import React from "react";
import { useNavigate, NavLink, useLocation } from "react-router-dom";
// import logo from "../../assets/icons/educontest-logo.svg";
import logo from "../../assets/icons/noa_logo.svg";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import dashboardIcon from "../../assets/icons/dashboard.svg";
import contestIcon from "../../assets/icons/contest.svg";
import campaignIcon from "../../assets/icons/trophy (2).svg";
import analytics from "../../assets/icons/analytics.svg";
import settingsIcon  from "../../assets/icons/settings.svg";
import judgeIcon  from "../../assets/icons/judge.svg";
// import LogoutIcon from "@mui/icons-material/Logout";
// import { useUser } from "../../../providers/userDetailsProvider";


export default function Sidebar() {
  const navigate = useNavigate();
  // const { logout } = useUser();

  // const navLinks = [
  //   {
  //     id: 1,
  //     Icon: dashboardIcon,
  //     name: "Dashboard",
  //     path: "/dashboard",
  //     useStroke: true,
  //   },
  //   // {
  //   //   id: 2,
  //   //   Icon: TransferIcon,
  //   //   name: "Make Transfers",
  //   //   path: "/make-transfers",
  //   //   useStroke: true,
  //   // },
  //   {
  //     id: 3,
  //     Icon: AirtimeIcon,
  //     name: "Buy Airtime",
  //     path: "/buy-airtime",
  //     useStroke: true,
  //   },
  //   {
  //     id: 4,
  //     Icon: AirtimeIcon,
  //     name: "Buy Data",
  //     path: "/buy-data",
  //     useStroke: true,
  //   },
  //   {
  //     id: 5,
  //     Icon: BillsIcon,
  //     name: "Pay Bills",
  //     path: "/pay-bills",
  //     useStroke: true,
  //   },
  //   {
  //     id: 6,
  //     Icon: SettingsIcon,
  //     name: "Account Settings",
  //     path: "/account-settings",
  //     useStroke: true,
  //   },
  // ];


  const location = useLocation()


  const menuItems = [
      {
          title: "Dashboard",
          children: false,
          itemId: '/',
          icon: () => (
            <img src={dashboardIcon} alt="icon" />
          ),
      
      },
      {
          title: "Manage Hackathon",
          children: false,
          itemId: '/manage-contests',
          icon: () => (
            <img src={contestIcon} alt="icon" />
          ),
      },
      {
          title: "Create Hackathon",
          children: false,
          itemId: '/create-campaign',
          icon: () => (
            <img src={campaignIcon} alt="icon" />
          ),
      },
      {
          title: "Manage Quiz",
          children: false,
          itemId: '/quiz', 
          icon: () => (
            <img src={judgeIcon} alt="icon" />
          ),
      },
      {
          title: "Manage Admin",
          children: false,
          itemId: '/manage-admin',
          icon: () => (
            <img src={judgeIcon} alt="icon" />
          ),
      },
      {
          title: "Transaction",
          children: false,
          itemId: '/transactions',
          icon: () => (
            <img src={analytics} alt="icon" />
          ),
      },
      {
          title: "Analytics",
          children: false,
          itemId: '/analytics',
          icon: () => (
            <img src={analytics} alt="icon" />
          ),
      },
      {
          title: "Settings",
          children: false,
          itemId: '/settings',
          icon: () => (
            <img src={settingsIcon} alt="icon" />
          ),
      },
  ];

  

  return (
    <>
      <div className="w-full py-10 px-5 bg-[#FFF] flex justify-center items-center"> {/* 175px */}
        <img
          src={logo}
          alt="logo"
          loading="lazy"
          className=" z-30 cursor-pointer w-[218px] h-[55px]" //h-[41px] w-[45px]
          onClick={() => navigate("/")}
        />
      </div>
      <div className="w-full">
        <div className="px-[10%] py-[8%] flex flex-col gap-8 "> {/* px-[20%] */}
          <Navigation
                activeItemId={location.pathname}
                onSelect={({ itemId }) => {
                    navigate(itemId, { state: { title: "title" } });
                    // handleClose()
                }}
                items={menuItems.map((list) => ({
                title: (
                    <p className="text-lg hover:text-[#027315] font-manja">
                        {list?.title}
                    </p>
                ),
                    itemId: list?.itemId,
                    elemBefore: list?.icon,
                    subNav: list?.children && list?.subNav,
                }))}
          />
        </div>
        {/* <div className="px-[20%] py-[12%] mt-[90%]">
          <LogoutIcon className="cursor-pointer" onClick={logout} />
        </div> */}
      </div>
    </>
  );
}
