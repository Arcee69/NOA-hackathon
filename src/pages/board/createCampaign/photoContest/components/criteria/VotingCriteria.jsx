import React from 'react'

export function VotingCriteria ({ index, handleChange, voting}) {
  return (
    <div className='grid xs:grid-cols-1 mt-5  md:grid-cols-2 xs:gap-4 md:gap-8'>
        <div className='w-full flex flex-col'>
          <h2 className="font-medium text-sm text-NEUTRAL-_200">
            Criteria {index + 1}
          </h2>
          <div className="xs:w-full md:w-[400px] mt-1 h-[44px]">
            <input
              name={`voting[${index}].criteria`}
              value={voting.criteria}
              placeholder='Creativity'
              onChange={handleChange}
              className='w-full outline-none p-2.5'
            />
          </div>
        </div>
    </div>
  )
}

export function Judges ({ index, handleChange, judges}) {
    return (
      <div className='grid xs:grid-cols-1 mt-5 md:grid-cols-2 xs:gap-4 md:gap-8'>
          <div className='w-full flex flex-col'>
            <h2 className="font-medium text-sm text-NEUTRAL-_200">
              Invite Judges
            </h2>
            <div className="xs:w-full md:w-[400px] mt-1 h-[44px]">
              <input
                name={`judges[${index}].email`}
                value={judges.email}
                placeholder='Input email to send to send invites'
                onChange={handleChange}
                className='w-full outline-none  p-2.5'
              />
            </div>
          </div>
      </div>
    )
  }
