import React from "react"

const ViewEntriesDetails = ({ handleClose, data }) => {
    console.log(data, "opor")
  return (
    <div className='flex flex-col bg-[#fff] lg:w-[500px] h-[400px] p-8 overflow-y-scroll '>
        <div className='text-[#000] cursor-pointer flex text-base font-semibold justify-end' onClick={handleClose}>X</div>
        <div className='flex flex-col p-3 gap-5 mt-2'>
            <p>Entry Date: <span className="text-primary text-base text-bold">{data?.entryDate}</span></p>
            <img src={data?.image} alt="entry-img" className="border-md"/>
            <div className="mt-12 ">
                <div className="flex flex-col gap-2">
                    <p className="text-sm text-[#1E1E1E]">Full Name</p>
                    <p className="border-[0.5px] p-3">
                        <span className="text-[#101828]">{data?.name}</span>
                    </p>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                    <p className="text-sm text-[#1E1E1E]">Email</p>
                    <p className="border-[0.5px] p-3">
                        <span className="text-[#101828]">{data?.email}</span>
                    </p>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                    <p className="text-sm text-[#1E1E1E]">Votes</p>
                    <p className="border-[0.5px] p-3">
                        <span className="text-[#101828]">{data?.votes}</span>
                    </p>
                </div>
            </div>
            <div className="flex flex-row gap-3 justify-end items-center">
                <button  
                    type="button" 
                    onClick={() => {}}
                    className="font-normal bg-primary xs:text-sm md:text-base p-2 rounded-md text-[#fff] border border-solid"
                    style={{ width: "163px" }}
                >
                    Select Winner
                </button>
                <button
                    type="button" 
                    // onClick={() => setActiveTab("User Details")}
                    className="font-normal border-[#B42318] bg-[#fff] rounded-md text-[#B42318] xs:text-sm md:text-base p-2 border border-solid"
                    style={{ width: "163px" }}
                >
                    Block Participant
                </button>
            </div>
        </div>
    </div>
  )
}

export default ViewEntriesDetails