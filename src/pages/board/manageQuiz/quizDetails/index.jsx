import React, { useEffect, useState } from 'react'
import Overview from './components/Overview';
import Entries from './components/Entries';
import Report from './components/Report';
import { useLocation } from 'react-router-dom';
import { api } from '../../../../services/api';
import { appUrls } from '../../../../services/urls';



const QuizViewDetails = () => {
    const [activeTab, setActiveTab] = useState("Overview");
    const [quizDetails, setQuizDetails] = useState([])

    const [tabs] = useState([
        {
          id: 1,
          tabName: "Overview"
        },
        {
          id: 2,
          tabName: "Entries"
        },
        // {
        //   id: 3,
        //   tabName: "Report"
        // },
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


    const { state } = useLocation()

    console.log(state, "state")

    const getQuizOverView = async () => {
        try {
            const res = await api.get(appUrls?.GET_QUIZ_OVERVIEW_BY_ID_URL + `/${state?.id}`)
            console.log(res, "Somb")
            setQuizDetails(res?.data?.data?.quiz)
        } catch (err) {
          console.log(err, "Massive")
        }
    }

    // const getQuizParticipant = async () => {
    //     await api.get(appUrls?.GET_PARTICIPANT_URL + `/${state.id}`)
    //     .then((res) => {
    //       console.log(res, "Somb")
    //       // setQuizParticipants(res?.data?.data?.quiz)
    //     })
    //     .catch((err) => {
    //       console.log(err, "Massive")
    //     })
    // }

    useEffect(() => {
      getQuizOverView()
      // getQuizParticipant()
    }, [state?.id])



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
      {activeTab === "Overview" && <Overview quizDetails={quizDetails} /> }
      {activeTab === "Entries" && <Entries quizDetails={quizDetails} />}
      {/* {activeTab === "Report" && <Report />} */}

    </div>
  )
}

export default QuizViewDetails