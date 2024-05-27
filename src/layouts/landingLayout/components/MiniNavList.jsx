import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import "./SideNav.css";
import Logo from "../../../assets/icons/Educontest.svg";

const MiniNavList = ({ handleClose }) => {
    const navigate = useNavigate();
    const location = useLocation()


    const menuItems = [
        {
            title: "Apps",
            children: false,
            itemId: '/',
        },
        {
            title: "About Us",
            children: false,
            itemId: '/about',
        },
        {
            title: "Learn",
            children: false,
            itemId: '#',
        },
        // {
        //     title: "Community",
        //     children: false,
        //     itemId: '/community',
        // },
        // {
        //     title: "Pricing",
        //     children: false,
        //     itemId: '/pricing',
        // },
        // {
        //     title: "Services",
        //     itemId: '/strategy',
        //     children: true,
        //     subNav: [
        //         {
        //             title: 'Strategy',
        //             itemId: '/strategy',
        //         },
        //         {
        //             title: 'Transformation',
        //             itemId: '/transformation',
        //         },
        //         {
        //             title: 'Project Management',
        //             itemId: '/project-management',
        //         },
        //         {
        //             title: 'Learning and Development',
        //             itemId: '/learning-and-development',
        //         },
        //         {
        //             title: 'Business Services',
        //             itemId: '/business-services',
        //         },
        //         {
        //             title: 'Technology',
        //             itemId: '/technology',
        //         },
        //     ]
        // },
        {
            title: "Login",
            itemId: '/login',
            children: false,
        },
        {
            title: "Sign Up",
            children: false,
            itemId: "/kyc",
        },
    ];

  return (
    <div className='bg-[#00000] z-50'>
        <div className='w-full flex flex-row justify-between items-center'>
            <div className="w-full flex " onClick={() => navigate("/") }>
                <img src={Logo} alt="logo" loading="lazy" className="h-[35%] w-[35%] " onClick={handleClose}/>
            </div>
        </div>
        <div className=' w-full mx-auto flex flex-col p-10 justify-center text-center items-center'>
            <Navigation
                activeItemId={location.pathname}
                onSelect={({ itemId }) => {
                    navigate(itemId, { state: { title: "title" } });
                    handleClose()
                }}
                items={menuItems.map((list) => ({
                title: (
                    <p>
                        {list?.title}
                    </p>
                ),
                    itemId: list?.itemId,
                    // elemBefore: list?.icon,
                    subNav: list?.children && list?.subNav,
                }))}
            />
        </div>
    </div>
  )
}

export default MiniNavList