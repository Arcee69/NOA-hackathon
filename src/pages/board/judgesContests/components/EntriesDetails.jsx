import React from "react"

const EntriesDetails = ({ handleClose, entries }) => {
    console.log(entries, "opor")
  return (
    <div className='flex flex-col bg-[#fff] lg:w-[600px] h-[450px] p-8 overflow-y-scroll '>
        <div className='text-[#000] cursor-pointer flex text-base font-semibold justify-end' onClick={handleClose}>X</div>
        <div className='flex flex-col p-3 gap-5 mt-2'>
            <p>Entry Date: <span className="text-primary text-base text-bold">{entries?.dateCreated}</span></p>
            <img src={entries?.contestant_photo} alt="entry-img" className="border-md w-full h-[300px]"/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12 ">
                <div className="flex flex-col gap-2">
                    <p className="text-sm text-[#1E1E1E]">Full Name</p>
                    <p className="border-[0.5px] p-3">
                        <span className="text-[#101828]">{entries?.name}</span>
                    </p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-sm text-[#1E1E1E]">Creativity</p>
                    <p className="border-[0.5px] p-3">
                        <span className="text-[#101828]">{entries?.creativity || 0}</span>
                    </p>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                    <p className="text-sm text-[#1E1E1E]">Email</p>
                    <p className="border-[0.5px] p-3">
                        <span className="text-[#101828]">{entries?.email}</span>
                    </p>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                    <p className="text-sm text-[#1E1E1E]">Clarity</p>
                    <p className="border-[0.5px] p-3">
                        <span className="text-[#101828]">{entries?.clarity || 0}</span>
                    </p>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                    <p className="text-sm text-[#1E1E1E]">Votes</p>
                    <p className="border-[0.5px] p-3">
                        <span className="text-[#101828]">{entries?.votes}</span>
                    </p>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                    <p className="text-sm text-[#1E1E1E]">Technique</p>
                    <p className="border-[0.5px] p-3">
                        <span className="text-[#101828]">{entries?.technique || 0}</span>
                    </p>
                </div>
            </div>
            <div className="flex flex-row gap-3 justify-center mt-5 items-center">
                <button  
                    type="button" 
                    onClick={() => {}}
                    className="font-normal bg-[#70C217] xs:text-sm md:text-base p-2 rounded-md text-[#fff] border border-solid"
                    style={{ width: "163px" }}
                >
                    Save
                </button>
                <button
                    type="button" 
                    onClick={handleClose}
                    className="font-normal border-[#B42318] bg-[#fff] rounded-md text-[#B42318] xs:text-sm md:text-base p-2 border border-solid"
                    style={{ width: "163px" }}
                >
                    Cancel
                </button>
            </div>
        </div>
    </div>
  )
}

export default EntriesDetails