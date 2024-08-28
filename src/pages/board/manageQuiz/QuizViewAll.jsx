import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import User from "../../../assets/icons/user_fill.svg"

import { api } from '../../../services/api'
import { appUrls } from '../../../services/urls'
import { Skeleton } from '@mui/material'
import LongMenu from '../../../components/actionMenuIcon'
import { toast } from 'react-toastify'

const QuizViewAll = () => {
    const [allQuizzes, setAllQuizzes] = useState([])
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const getAllQuiz = async () => {
        setLoading(true)
        await api.get(appUrls?.GET_ALL_QUIZ_URL)
        .then((res) => {
            setLoading(false)
            console.log(res, "azaman")
            setAllQuizzes(res?.data?.data)
        })
        .catch((err) => {
            setLoading(false)
            console.log(err, "sample")
        })
    }

    const pendingQuizzes = allQuizzes?.filter(quiz => quiz.status === 'pending');
    const activeQuizzes = allQuizzes?.filter(quiz => quiz.status === 'active');
    const closedQuizzes = allQuizzes?.filter(quiz => quiz.status === 'closed');

    console.log(allQuizzes, "allQuizzes")

    useEffect(() => {
        getAllQuiz()
    },[])

    const closeQuiz = async (id) => {
        await api.put(appUrls?.CLOSE_QUIZ_URL + `/${id}`)
        .then((res) => {
            console.log(res, "close")
            toast(`${res?.data?.message}`, {
                position: "top-right",
                autoClose: 5000,
                closeOnClick: true,
            })
        })
        .catch((err) => {
            console.log(err, "close")
            toast(`${err?.data?.message}`, {
                position: "top-right",
                autoClose: 5000,
                closeOnClick: true,
            })
        })
    }



  return (
    <div  className='p-4 flex flex-col '>
        <div className='mt-[48px] flex flex-col gap-4'>
            <div className='flex justify-between items-center'>
                <p className='font-mont_alt font-bold text-[24px] text-[#070807]'>All Quizzes</p>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                {
                    loading ?
                    <Skeleton variant="rectangular" width={window.innerWidth < 786 ? 200 : 286} height={350} style={{ backgroundColor: 'rgba(0,0,0, 0.06)' }} />
                    :
                    <>
                        {
                            activeQuizzes?.length > 0 ?
                            activeQuizzes?.map((item, index) => (
                                <div key={item?.id} className='lg:w-[340px] bg-[#fff] h-auto p-2 flex flex-col border border-[#E8F2EA] rounded-tl-xl rounded-tr-xl'>
                                    <div className='bg-[#add8e6] p-2 flex items-center justify-center'>
                                        <img src={`${item?.image}`} alt='Zones' className='h-[211px]'/>
                                    </div>
                                    <div className='flex items-center relative -top-4 left-1 gap-4'>
        
                                        <div className='flex items-center justify-center gap-1 bg-[#33363F] rounded-[15px] w-[104px]  p-[6px]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 9.33333C14.5 12.647 11.8137 15.3333 8.5 15.3333C5.18629 15.3333 2.5 12.647 2.5 9.33333C2.5 6.01962 5.18629 3.33333 8.5 3.33333C11.8137 3.33333 14.5 6.01962 14.5 9.33333ZM8.5 12.6666C10.341 12.6666 11.8333 11.1742 11.8333 9.33329C11.8333 7.49234 10.341 5.99995 8.5 5.99995C6.65905 5.99995 5.16667 7.49234 5.16667 9.33329C5.16667 11.1742 6.65905 12.6666 8.5 12.6666ZM8.5 14C11.0773 14 13.1667 11.9106 13.1667 9.33329C13.1667 6.75596 11.0773 4.66662 8.5 4.66662C5.92267 4.66662 3.83333 6.75596 3.83333 9.33329C3.83333 11.9106 5.92267 14 8.5 14ZM9.16667 7.33329C9.16667 6.9651 8.86819 6.66662 8.5 6.66662C8.13181 6.66662 7.83333 6.9651 7.83333 7.33329V9.33329C7.83333 9.70148 8.13181 9.99995 8.5 9.99995C8.86819 9.99995 9.16667 9.70148 9.16667 9.33329L9.16667 7.33329Z" fill="white"/>
                                                <path d="M12.1665 5L13.1665 4" stroke="white" stroke-width="1.33333" stroke-linecap="round"/>
                                                <path d="M7.21226 1.58039C7.28823 1.50951 7.45562 1.44688 7.68848 1.40221C7.92134 1.35754 8.20665 1.33333 8.50016 1.33333C8.79367 1.33333 9.07899 1.35754 9.31184 1.40221C9.5447 1.44688 9.7121 1.50951 9.78806 1.58039" stroke="white" stroke-width="1.33333" stroke-linecap="round"/>
                                            </svg>
                                            <p className='text-[#fff] text-xs font-manja mt-1 font-bold'>{item.duration_of_quiz} mins</p>
                                        </div>
        
                                        <div className='flex items-center justify-center gap-1 bg-[#020D73] rounded-[15px] w-[104px]  p-[6px]'>
                                            <img src={User} alt='User' />
                                            <p className='text-[#FFF] text-xs font-manja mt-1 font-bold'>{item.total_partakers || 0} takers</p>
                                        </div>
        
                                    </div>
                                    <div className='flex flex-col gap-2 px-4'>
                                        <p className='font-manja text-[20px] font-bold text-[#000000]'>{item.title}</p>
                                        <p className='opacity-40 text-[#000] font-mont_alt font-medium text-sm'>
                                            {item?.desc?.slice(0, 20)}
                                        </p>
        
                                        <div className="flex items-center justify-between">
                                            <button type='button' onClick={() => {navigate("/quiz/view-details", {state: item}); window.scrollTo(0, 0)}} className='bg-[#027315] rounded-[8px] border w-[124px] py-2 px-[15px] border-[#00AA55]'>
                                                <p className='font-mont_alt font-semibold text-[#fff] text-sm '>View Details</p>
                                            </button>
                                            <LongMenu>
                                                <div className='flex flex-col gap-3 p-3'>
                                                    <p 
                                                        className='cursor-pointer hover:bg-[#F8F8F8] p-1' 
                                                        onClick={() => closeQuiz(item?.id)}
                                                    >
                                                        Close
                                                    </p>
                                                </div>
                                            </LongMenu>
                                        </div>
                                  
                                       
        
                                    </div>
        
                                </div>
                            )) 
                            :
                            <p className='text-xs font-mont text-[#000] text-center font-semibold text-5xl'>No Quiz Available</p>
                        }
                        {pendingQuizzes?.length > 0 && pendingQuizzes?.map((item) => (
                            <div key={item?.id} className='lg:w-[340px] h-auto p-2 flex flex-col relative border border-[#E8F2EA] rounded-tl-xl rounded-tr-xl '>
                                {/* <div className='absolute top-0 left-0 w-full z-50 h-full bg-[#222222A6] rounded-xl flex items-center justify-center'>
                                    <button className='bg-[#Ffff00] rounded-[8px] w-[292px] border py-2 px-4 border-[#0A5]'>
                                        <p className='font-mont_alt font-semibold text-[#fff] text-sm '>Pending</p>
                                    </button>
                                </div> */}
                                <div className='bg-[#add8e6] p-2 flex items-center justify-center'>
                                    <img src={item.image} alt='Zones' className='h-[211px]'/>
                                </div>
                                <div className='flex items-center relative -top-4 left-1 gap-4'>

                                    <div className='flex items-center justify-center gap-1 bg-[#33363F] rounded-[15px] w-[104px]  p-[6px]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 9.33333C14.5 12.647 11.8137 15.3333 8.5 15.3333C5.18629 15.3333 2.5 12.647 2.5 9.33333C2.5 6.01962 5.18629 3.33333 8.5 3.33333C11.8137 3.33333 14.5 6.01962 14.5 9.33333ZM8.5 12.6666C10.341 12.6666 11.8333 11.1742 11.8333 9.33329C11.8333 7.49234 10.341 5.99995 8.5 5.99995C6.65905 5.99995 5.16667 7.49234 5.16667 9.33329C5.16667 11.1742 6.65905 12.6666 8.5 12.6666ZM8.5 14C11.0773 14 13.1667 11.9106 13.1667 9.33329C13.1667 6.75596 11.0773 4.66662 8.5 4.66662C5.92267 4.66662 3.83333 6.75596 3.83333 9.33329C3.83333 11.9106 5.92267 14 8.5 14ZM9.16667 7.33329C9.16667 6.9651 8.86819 6.66662 8.5 6.66662C8.13181 6.66662 7.83333 6.9651 7.83333 7.33329V9.33329C7.83333 9.70148 8.13181 9.99995 8.5 9.99995C8.86819 9.99995 9.16667 9.70148 9.16667 9.33329L9.16667 7.33329Z" fill="white"/>
                                            <path d="M12.1665 5L13.1665 4" stroke="white" stroke-width="1.33333" stroke-linecap="round"/>
                                            <path d="M7.21226 1.58039C7.28823 1.50951 7.45562 1.44688 7.68848 1.40221C7.92134 1.35754 8.20665 1.33333 8.50016 1.33333C8.79367 1.33333 9.07899 1.35754 9.31184 1.40221C9.5447 1.44688 9.7121 1.50951 9.78806 1.58039" stroke="white" stroke-width="1.33333" stroke-linecap="round"/>
                                        </svg>
                                        <p className='text-[#fff] text-xs font-manja mt-1 font-bold'>{item.duration_of_quiz} mins</p>
                                    </div>

                                    <div className='flex items-center justify-center gap-1 bg-[#020D73] rounded-[15px] w-[104px]  p-[6px]'>
                                        <img src={User} alt='User' />
                                        <p className='text-[#FFF] text-xs font-manja mt-1 font-bold'>{item.total_partakers || 0} takers</p>
                                    </div>

                                </div>
                                <div className='flex flex-col gap-2 px-4'>
                                    <div className='flex items-center justify-between'>
                                        <p className='font-manja text-[20px] font-bold text-[#000000]'>{item.title}</p>
                                        <div className='bg-[#Ffff00] rounded-[8px] w-[192px]'>
                                            <p className='font-mont_alt font-semibold text-[#fff] text-sm'>Pending</p>
                                        </div>
                                    </div>
                                    <p className='opacity-40 text-[#000] font-mont_alt font-medium text-sm'>
                                            {item?.desc?.slice(0, 20)}
                                    </p>
                                
                                    <button className='bg-[#027315] rounded-[8px] border w-[124px] py-2 px-[15px] border-[#00AA55]'>
                                        <p className='font-mont_alt font-semibold text-[#fff] text-sm '>Take Quiz</p>
                                    </button>

                                </div>

                            </div>
                        ))}
                        {closedQuizzes?.length > 0 && closedQuizzes?.map((item) => (
                            <div key={item?.id} className='lg:w-[340px] h-auto p-2 flex flex-col relative border border-[#E8F2EA] rounded-tl-xl rounded-tr-xl '>
                                <div className='absolute top-0 left-0 w-full z-30 h-full bg-[#222222A6] rounded-xl flex items-center justify-center'>
                                    <button className='bg-[#ff0000] rounded-[8px] w-[292px] border py-2 px-4 border-[#0A5]'>
                                        <p className='font-mont_alt font-semibold text-[#fff] text-sm '>Closed</p>
                                    </button>
                                </div>
                                <div className='bg-[#add8e6] p-2 flex items-center justify-center'>
                                    <img src={item.image} alt='Zones' className='h-[211px]'/>
                                </div>
                                <div className='flex items-center relative -top-4 left-1 gap-4'>

                                    <div className='flex items-center justify-center gap-1 bg-[#33363F] rounded-[15px] w-[104px]  p-[6px]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 9.33333C14.5 12.647 11.8137 15.3333 8.5 15.3333C5.18629 15.3333 2.5 12.647 2.5 9.33333C2.5 6.01962 5.18629 3.33333 8.5 3.33333C11.8137 3.33333 14.5 6.01962 14.5 9.33333ZM8.5 12.6666C10.341 12.6666 11.8333 11.1742 11.8333 9.33329C11.8333 7.49234 10.341 5.99995 8.5 5.99995C6.65905 5.99995 5.16667 7.49234 5.16667 9.33329C5.16667 11.1742 6.65905 12.6666 8.5 12.6666ZM8.5 14C11.0773 14 13.1667 11.9106 13.1667 9.33329C13.1667 6.75596 11.0773 4.66662 8.5 4.66662C5.92267 4.66662 3.83333 6.75596 3.83333 9.33329C3.83333 11.9106 5.92267 14 8.5 14ZM9.16667 7.33329C9.16667 6.9651 8.86819 6.66662 8.5 6.66662C8.13181 6.66662 7.83333 6.9651 7.83333 7.33329V9.33329C7.83333 9.70148 8.13181 9.99995 8.5 9.99995C8.86819 9.99995 9.16667 9.70148 9.16667 9.33329L9.16667 7.33329Z" fill="white"/>
                                            <path d="M12.1665 5L13.1665 4" stroke="white" stroke-width="1.33333" stroke-linecap="round"/>
                                            <path d="M7.21226 1.58039C7.28823 1.50951 7.45562 1.44688 7.68848 1.40221C7.92134 1.35754 8.20665 1.33333 8.50016 1.33333C8.79367 1.33333 9.07899 1.35754 9.31184 1.40221C9.5447 1.44688 9.7121 1.50951 9.78806 1.58039" stroke="white" stroke-width="1.33333" stroke-linecap="round"/>
                                        </svg>
                                        <p className='text-[#fff] text-xs font-manja mt-1 font-bold'>{item.duration_of_quiz} mins</p>
                                    </div>

                                    <div className='flex items-center justify-center gap-1 bg-[#020D73] rounded-[15px] w-[104px]  p-[6px]'>
                                        <img src={User} alt='User' />
                                        <p className='text-[#FFF] text-xs font-manja mt-1 font-bold'>{item.total_partakers || 0} takers</p>
                                    </div>

                                </div>
                                <div className='flex flex-col gap-2 px-4'>
                                    <p className='font-manja text-[20px] font-bold text-[#000000]'> {item.title}</p>
                                    <p className='opacity-40 text-[#000] font-mont_alt font-medium text-sm'>
                                            {item?.desc?.slice(0, 20)}
                                    </p>
                                
                                    <button className='bg-[#027315] rounded-[8px] border w-[124px] py-2 px-[15px] border-[#00AA55]'>
                                        <p className='font-mont_alt font-semibold text-[#fff] text-sm '>Take Quiz</p>
                                    </button>

                                </div>

                            </div>
                            ))}
                    </>
                    }
             

            </div>
        </div>

    </div>
  )
}

export default QuizViewAll