import React from 'react'
import * as Yup from 'yup'
import { Formik, Form, FieldArray } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import {Judges, VotingCriteria} from './criteria/VotingCriteria';
import addIcon from "../../../../../assets/icons/add.svg";
import SearchableSelect from '../../../../../components/CustomSelect';
import { winnerSelection } from '../../../../../features/board/createCampain/photoContest/winnerSelectionSlice';

const WinnerSelection = ({ setActiveTab }) => {

  // const userData  = useSelector(state => state.userLogin)
  // const { user } = userData.data;

  // const info = useSelector(state => state.basicInfo)
  
  // const { id } = info?.data?.data;

  const dispatch = useDispatch()

  // console.log(id, "sorry")

  const schema = Yup.object().shape({
    voting: Yup.array().of(Yup.object().shape({
      criteria: Yup.string().required("Required")
    })),
    startDate: Yup.date().required("Start Date Is Required"),
    endDate: Yup.date().required("End Date is Required"),
    votingPanel: Yup.string(),
    // votingPlatform: Yup.string(),
    limit: Yup.number(),
    totalVotes: Yup.boolean(),
    // judges: Yup.array().of(Yup.object().shape({
    //   email: Yup.string().email().required("Required")
    // })),

  });

  const voteLimitOptions = [
    { value: 1, label: "1"},
    { value: 2, label: "2"},
    { value: 3, label: "3"}
  ];

  const platform = [
    {value: "Educontest", label: "Educontest"},
  ];
  const panel = [
    { value: "voting", label: "Voting"},
    { value: "panel of judges", label: "Panel of Judges"},
    { value: "voting and panel of judges", label: "Voting and Panel of Judges"},
  ];

  const initialValues = {
    voting: [{ criteria: ""}],
    startDate: "",
    endDate: "",
    votingPanel: "",
    // votingPlatform: "",
    limit: "",
    totalVotes: false,
    judges: [{ email: ""}],
  };

  const submitForm = async(values) => {
    let votingCriteria = [];
    let judgesInvite = [];
      values?.voting.map((list) => {
        return votingCriteria.push({ 
          criteria: list?.criteria
        })
      })
      values?.judges.map((list) => {
        return judgesInvite.push({ 
          email: list?.email
        })
      })

      const votes = values?.totalVotes ? "yes" : "no";
      
      const data = {
        user_id: user.id,
        contest_id : id,
        selection_method: values?.votingPanel,
        voter_limit: values?.limit,
        voting_start: values?.startDate,
        voting_end: values?.endDate,
        show_total_votes: votes,
        criteria:{...votingCriteria}
    }

    dispatch(winnerSelection(data))
    .then(() => {
      setActiveTab("Prizes")
      window.scrollTo(0, 0)
    })

  }


  return (
    <div className='p-4'>
      
      <div className='w-full  h-[116px] bg-[#fff]  rounded-xl xs:p-4 lg:p-8'>
          <h2 className='xs:text-base  md:text-xl text-[#000]'>Setup Winner Selection Method</h2>
          <p className='xs:text-sm md:text-base text-NEUTRAL-_800'>
            Contest winners can be chosen by polls, by judges or by both . 
            Choose how winners will be selected
          </p>
      </div>

      <div>
        <Formik
            initialValues={initialValues}
            // validationSchema={schema}
            onSubmit={(values) => {
              console.log(values, "ruger");
              submitForm(values)
              }
            }
          >
            {(formikProps) => {
              const { handleSubmit, handleChange, values, setFieldValue, isSubmitting, errors, touched } = formikProps
              return (
                <Form onSubmit={handleSubmit} className="flex flex-col justify-between ">
                  <div className='xs:w-full lg:w-11/12 flex flex-col  gap-4 mb-10'>

                    <div className='bg-NEUTRAL-_1000 p-3 mt-8 rounded-md'>
                      <p className='text-base text-[#000] font-medium'>Determine Judging/voting Criteria</p>
                    </div>

                    <FieldArray
                      name='voting'
                      render={arrayHelpers => (
                        <div className='flex flex-col gap-10'>
                          <div className='grid xs:grid-cols-1 lg:grid-cols-2 gap-2'>
                            {
                              values.voting && values.voting.length > 0 ? (
                                values.voting.map((voting, index) => (
                                  <VotingCriteria
                                    key={index} //  + victim?.firstName + victim?.lastName
                                    index={index}
                                    handleChange={handleChange}
                                    setFieldValue={setFieldValue}
                                    voting={voting}
                                    arrayHelpers={arrayHelpers}
                                  />
                                ))) :
                                <div></div>
                            }
                          </div>
                          <button
                            className='bg-NEUTRAL-_900 flex justify-center mt-5 gap-3 items-center rounded-md xs:w-[180px] lg:w-[257px] h-[56px]'
                            // style={{ height: "56px"}}
                            type='button'
                            onClick={() => {
                              arrayHelpers.push({ criteria: "" })
                            }}
                          >
                            <img src={addIcon} alt="Add More" loading='lazy' />
                            <span className='text-[#fff] xs:text-sm lg:text-lg'>Add More Criteria</span>
                          </button>
                        </div>
                      )}
                    />
                    <div className='bg-NEUTRAL-_1000 p-3 mt-8 rounded-md'>
                      <p className='text-base text-[#000] font-medium'>Set Judging/Voting Timeline</p>
                    </div>
                    
                    <div className='xs:w-full lg:w-[640px]  lg:h-[70px] flex xs:flex-col lg:flex-row justify-between mt-6'>
                      <div className='flex flex-col'>
                        <label htmlFor='Start Date' className='text-sm font-medium text-NEUTRAL-_200'>Start Date</label>
                        <input 
                          name='startDate'
                          type='date'
                          placeholder='DD/MM/YYYY'
                          className=' xs:w-full lg:w-[300px] h-[44px] mt-1.5 py-2.5 px-3.5 outline-none'
                          value={values?.startDate}
                          onChange={handleChange}
                        />
                         {errors.startDate && touched.startDate ? 
                          <div className='text-RED-_100'>{errors.startDate}</div> 
                          : null
                        }
                      </div>

                      <div className='flex flex-col xs:mt-3 lg:mt-0'>
                        <label htmlFor='End Date' className='text-sm font-medium text-NEUTRAL-_200'>End Date</label>
                        <input 
                          name='endDate'
                          type='date'
                          placeholder='DD/MM/YYYY'
                          className='xs:w-full lg:w-[300px] h-[44px] mt-1.5 py-2.5 px-3.5 outline-none'
                          value={values?.endDate}
                          onChange={handleChange}
                        />
                        {errors.endDate && touched.endDate ? 
                          <div className='text-RED-_100'>{errors.endDate}</div> 
                          : null
                        }
                      </div>
                    </div>

                    <div className='bg-NEUTRAL-_1000 p-3 mt-8 rounded-md'>
                      <p className='text-base text-[#000] font-medium'>Choose Selection Method</p>
                    </div>

                    <div className='flex flex-col w-full mt-6'>
                      {/* <label htmlFor='Voting Platform' className='text-sm font-medium text-NEUTRAL-_200'>Voting Platform</label> */}
                      <SearchableSelect 
                        options={panel}
                        name="votingPanel"
                        placeholder="Voting and panel of judges"
                        setFieldValue={setFieldValue}
                        value={values?.votingPanel}
                        className=" mt-1.5 rounded-md outline-none w-full"
                        handleChange={handleChange}
                      />
                       {errors.votingPanel && touched.votingPanel ? 
                          <div className='text-RED-_100'>{errors.votingPanel}</div> 
                          : null
                        }
                    </div>

                    <div className='flex lg:flex-row xs:flex-col lg:gap-16'>
                      {/* <div className='flex flex-col xs:w-full lg:w-[400px]  mt-6'>
                        <label htmlFor='Voting Platform' className='text-sm font-medium text-NEUTRAL-_200'>Voting Platform</label>
                        <SearchableSelect 
                          options={platform}
                          name="votingPlatform"
                          placeholder="Tap to select options"
                          setFieldValue={setFieldValue}
                          value={values?.votingPlatform}
                          className=" mt-1.5 rounded-md outline-none xs:w-full lg:w-[400px] h-[44px]"
                          handleChange={handleChange}
                        />
                        <ErrorMessage name="votingPlatform" />
                      </div> */}

                      <div className='flex flex-col'>
                        <div className='flex flex-col xs:w-full  lg:w-[400px]  mt-6'>
                          <label htmlFor='Voting Platform' className='text-sm font-medium text-NEUTRAL-_200'>Enter Limits per Voter</label>
                          <SearchableSelect 
                            options={voteLimitOptions}
                            name="limit"
                            placeholder="Tap to select options"
                            setFieldValue={setFieldValue}
                            value={values?.limit}
                            className=" mt-1.5 rounded-md outline-none xs:w-full lg:w-[400px] h-[44px]"
                            handleChange={handleChange}
                          />
                          {errors.limit && touched.limit ? 
                            <div className='text-RED-_100'>{errors.limit}</div> 
                            : null
                          }
                        </div>

                        <div className='flex flex-col lg:w-[400px] mt-2 '>
                            <div className='flex'>
                              <input
                                type='checkbox'
                                name='totalVotes'
                                value={values?.totalVotes}
                                onChange={handleChange}
                              />
                              <span className='text-sm font-medium text-NEUTRAL-_200 ml-1'>Show total Votes</span>
                            </div>
                            {/* <ErrorMessage name='totalVotes'/> */}
                          </div>
                      </div>
                    </div>

                    {/* <FieldArray
                      name='judges'
                      render={arrayHelpers => (
                        <div className='flex flex-col gap-10'>
                          <div className='grid xs:grid-cols-1 lg:grid-cols-2 gap-2'>
                            {
                              values.judges && values.judges.length > 0 ? (
                                values.judges.map((judges, index) => (
                                  <Judges
                                    key={index} //  + victim?.firstName + victim?.lastName
                                    index={index}
                                    handleChange={handleChange}
                                    setFieldValue={setFieldValue}
                                    judges={judges}
                                    arrayHelpers={arrayHelpers}
                                  />
                                ))) :
                                <div></div>
                            }
                          </div>
                          <button
                            className='bg-NEUTRAL-_900 flex justify-center mt-5 gap-3 items-center rounded-md xs:w-[180px] lg:w-[257px] h-[56px]'
                            // style={{ height: "56px"}}
                            type='button'
                            onClick={() => {
                              arrayHelpers.push({ email: "" })
                            }}
                          >
                            <img src={addIcon} alt="Invite More" loading='lazy' />
                            <span className='text-[#fff] xs:text-sm lg:text-lg'>Invite More</span>
                          </button>
                        </div>
                      )}
                    /> */}

                    <div className='xs:w-full lg:w-[1000px] xs:mt-10 lg:mt-20  lg:h-[116px] bg-[#fff] rounded-xl p-6'>
                      <h2 className='xs:text-base  md:text-xl text-[#000]'>Voting/Judging Rules </h2>
                      <p className='xs:text-sm md:text-base text-NEUTRAL-_800'>
                        EduContest automatically generates Rules for the selected contest. 
                        Click Edit Fields to customise your details 
                      </p>
                    </div>

                    <div className="xs:w-full lg:w-[914px] h-[239px] overflow-y-auto bg-[#fff] p-3">
                      <p className="xs:text-sm lg:text-base text-[#000] font-medium">
                        NO PURCHASE IS NECESSARY TO ENTER OR WIN. A PURCHASE DOES NOT INCREASE THE CHANCES OF WINNING
                      </p>

                      <p className="text-NEUTRAL-_1100 xs:text-sm lg:text-base mt-2 font-normal">
                        Sponsor: The Sponsor of Photo Contest is sight

                        <span className="block">
                          Eligibility: Instant Entry (the "Sweepstakes") is only open to those who sign up at 
                          https://educontest.com/CAMPAIGN_KEY. The Sweepstakes is open worldwide, 
                          and is void where prohibited by law. 
                          Employees, independent contractors, interns, officers, directors, 
                          and agents of sight (the "Sponsor") their respective affiliates, subsidiaries, 
                          advertising and promotion agencies, suppliers and their immediate family members and/or 
                          those living in the same household of each are not eligible to participate in the Sweepstakes. 
                          The Sweepstakes is subject to all applicable federal, state and local laws and regulations. 
                          Void where prohibited.
                        </span>


                        <span className="block">
                          Agreement to Rules: By entering the Sweepstakes, the contestant ("You") agree to comply with 
                          and abide by these Rules and the decisions of the Sponsor, 
                          and you represent and warrant that you meet the eligibility requirements. 
                          In addition, you agree to accept the Sponsor's decisions as final and 
                          binding as it relates to the content of this campaign. Entrants should look solely to the 
                          Sponsor with any questions, comments or issues related to the Sweepstakes.
                        </span>

                        <span className="block">
                          Entry Period: The Sweepstakes begins at on 01 April, 2023 at 12:00AM CAT and ends 
                          at on 30 April, 2023 at 11:59PM CAT (the "Entry Period"). 
                          Entries submitted before or after the Entry Period will not be eligible.
                        </span>


                        <span className="block">
                          How to Enter: The Sweepstakes must be entered by submitting an entry using the online 
                          form provided at https://gleam.io/CAMPAIGN_KEY and pass any verification requirements 
                          (email or fraud score) set by the Sponsor. The entry must fulfil all requirements of the 
                          Sweepstakes, as specified, to be eligible to win a prize. 
                          Entries that are incomplete or do not adhere to the rules or specifications of the Sweepstakes
                          may be disqualified at the sole discretion of the Sponsor. 
                          You must provide the information requested. 
                          You may not enter more times than indicated by using multiple email addresses, identities, 
                          or devices in an attempt to circumvent the rules. 
                          If you use fraudulent methods or otherwise attempt to circumvent the rules of the Sweepstakes,
                          your submission may be disqualified at the sole discretion of the Sponsor.
                        </span>


                        <span className="block">
                          Prizes: The winner(s) of the Sweepstakes (the "Winner") will receive the following prizes:
                          1 winner(s) will receive
                          Actual/appraised value of prizes may differ at time of prize award. 
                          The specifics of the prize shall be solely determined by the Sponsor. 
                          No cash or other prize substitution shall be permitted except for at the Sponsor's discretion.
                          The prize is non transferable. Substitution of the prize or transfer/assignment of the prize 
                          to others or request for the cash equivalent of the prize by the Winner is not permitted. 
                          Any and all prize related expenses, including without limitation any and all federal, state, 
                          and/or local taxes shall be the sole responsibility of the Winner. 
                          Acceptance of the prize constitutes permission for the Sponsor to use the Winner’s name, 
                          likeness, and entry for purposes of advertising and trade without further compensation, 
                          unless prohibited by law.
                        </span>


                        <span className="block">
                          Odds of Winning: The odds of winning depend on the number of eligible entries received.
                        </span>


                        <span className="block">
                          Winner Selection and Notification: The Winner will be selected by Random Draw under the 
                          supervision of the Sponsor. The Winner will be notified within 7 days of the winner selection.
                          The Sponsor shall have no liability for a Winner's failure to receive notices due to spam, 
                          junk e-mail or other security settings or for a Winner’s provision of incorrect or otherwise 
                          non-functioning contact information. If the Winner cannot be contacted, is ineligible, 
                          fails to claim the prize within 7 days from the time award notification was sent, or fails to 
                          timely return a completed and executed declaration and release as required, the prize may be 
                          forfeited and an alternate Winner selected. Receipt of the prize offered in this Campaign 
                          by the Winner is conditioned upon compliance with any and all federal, state, and local laws 
                          and regulations. Any violation of these official rules by the Winner at the Sponsor's sole 
                          discretion will result in the Winner's disqualification as winner, and all privileges as 
                          winner will be immediately terminated.
                        </span>


                        <span className="block">
                          Rights Granted by the Entrant: By entering this content (e.g., photo, video, text, etc.), 
                          You understand and agree that the Sponsor and anyone acting on behalf of the Sponsor or its 
                          respective licensees, successors, and assigns, shall have the right, where permitted by law, 
                          to print, publish, broadcast, distribute, and use in any media now known or hereafter 
                          developed, in perpetuity and throughout the World, without limitation, your entry, name, 
                          portrait, picture, voice, likeness, image, statements about the Campaign, and biographical 
                          information for news, publicity, information, trade, advertising, public relations, 
                          and promotional purposes without any further compensation, notice, review, or consent. 
                          By entering this content, you represent and warrant that your entry is an original work of 
                          authorship, and does not violate any third party’s proprietary or intellectual property rights.
                          If your entry infringes upon the intellectual property right of another, 
                          you will be disqualified at the sole discretion of the Sponsor. 
                          If the content of your entry is claimed to constitute infringement of any proprietary or 
                          intellectual proprietary rights of any third party, you shall, at your sole expense, 
                          defend or settle against such claims. You shall indemnify, defend, and hold harmless sight from 
                          and against any suit, proceeding, claims, liability, loss, damage, costs or expense, 
                          which sight may incur, suffer, or be required to pay arising out of such infringement or 
                          suspected infringement of any third party’s right.
                        </span>


                        <span className="block">
                          Terms and Conditions: The Sponsor reserves the right, in its sole discretion, to cancel, 
                          terminate, modify or suspend the Sweepstakes should virus, bug, non-authorised human 
                          intervention, fraud, or other cause beyond the Sponsor’s control corrupt or affect the 
                          administration, security, fairness, or proper conduct of the Sweepstakes. 
                          In such cases, the Sponsor may select a winner(s) from eligible entries received before 
                          and/or after the action taken by the Sponsor if appropriate. 
                          The Sponsor reserves the right at its sole discretion to disqualify any individual who 
                          tampers or attempts to tamper with the entry process or the operation of the Sweepstakes or 
                          website or violates these Terms & Conditions. The Sponsor has the right, 
                          in its sole discretion, to maintain the integrity of the Sweepstakes, to void entries for any 
                          reason, including, but not limited to: multiple entries from the same user from different 
                          IP addresses; multiple entries from the same computer in excess of that allowed by Sweepstakes
                          rules; or the use of bots, macros, scripts, or other technical means for entering. 
                          Any attempt by an entrant to deliberately damage any website or undermine the legitimate 
                          operation of the Sweepstakes may be a violation of criminal and civil laws. 
                          Should such an attempt be made, the Sponsor reserves the right to seek damages to the fullest 
                          extent permitted by law.
                        </span>


                        <span className="block">
                          Limitation of Liability: By entering the Sweepstakes you agree to release and hold harmless 
                          sight and its subsidiaries, affiliates, advertising and promotion agencies, partners, 
                          representatives, agents, successors, assigns, employees, officers and directors from any 
                          liability, illness, injury, death, loss, litigation, claim or damage that may occur, 
                          directly or indirectly, whether caused by negligence or not, from (i) such entrant’s 
                          participation in the Sweepstakes and/or his/her acceptance, possession, use, or misuse of any 
                          prize or any portion thereof; (ii) unauthorised human intervention in any part of the 
                          Sweepstakes; (iii) electronic or human error in the administration of the Sweepstakes or the 
                          processing of entries; (iv) technical errors of any kind, including but not limited to the 
                          malfunction of any computer, cable, network, hardware, or software, or other mechanical 
                          equipment; (v) the unavailability or inaccessibility of any transmissions, telephone, or 
                          Internet service; (vi) printing errors; (vii) lost, late, postage due, misdirected, or 
                          undeliverable mail.
                        </span>


                        <span className="block">
                          Disputes: This Sweepstakes is governed by the laws of Nigeria, without respect to conflict 
                          of law doctrines. By participating in this Campaign, you agree that any and all disputes that 
                          cannot be resolved between the parties, and causes of action arising out of or connected with 
                          this Campaign, shall be resolved individually, without resort to any form of class action, 
                          exclusively before a court located in Nigeria having jurisdiction. Further, 
                          in any such dispute, under no circumstances shall You be permitted to obtain awards for, 
                          and hereby waives all rights to, punitive, incidental, or consequential damages, 
                          including reasonable attorney’s fees, other than actual out-of-pocket expenses 
                          (i.e. costs associated with entering the Sweepstakes). 
                          You further waives all rights to have damages multiplied or increased.
                        </span>


                        <span className="block">
                          Winners List: To request a copy of the winners list please contact the Sponsor. 
                          Requests must be sent within four (4) weeks of the end of the Entry Period.
                          The Sweepstakes is in no way sponsored, endorsed, administered by, or associated with 
                          Facebook, Twitter, Instagram, Snapchat, YouTube, Reddit, Pinterest, 
                          LinkedIn or any other social networks that are used to share the Sweepstakes. 
                          You understand that you are providing your information to the owner of the Sweepstakes and 
                          not to Facebook, Twitter, Instagram, Snapchat, YouTube, Reddit, Pinterest, LinkedIn or any 
                          other social networks.
                        </span>


                        <span className="block">
                          Acceptance of Rules: By participating in the Sweepstakes, You have affirmatively reviewed, 
                          accepted, and agreed to all of the Official Rules, Terms and Conditions.
                          Edit Fields Add Custom Terms & Conditions
                        </span>

                      </p>
                    </div>
                
                  </div>

                  <div className='flex xs:mt-3 md:mt-5 lg:mt-5 gap-4 justify-end'>
                    <button 
                      type="submit" 
                      // onClick={() => }
                      className="font-normal bg-primary text-base p-2 rounded-md text-[#fff] border border-solid"
                      style={{ width: "130px" }}
                    >
                      Continue
                    </button>

                    <button 
                      type="button" 
                      onClick={() => setActiveTab("User Details")}
                      className="font-normal border-primary bg-[#fff] rounded-md text-primary text-base p-2 border border-solid"
                      style={{ width: "130px" }}
                    >
                      Cancel
                    </button>
    
                  </div>
                </Form>
              )
            }}
          </Formik>

      </div>

    </div>
  )
}

export default WinnerSelection