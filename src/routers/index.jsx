import React from 'react'
import { Route, Routes} from "react-router-dom";
import AuthLayout from '../layouts/authLayout'
import HomePageLayout from '../layouts/landingLayout'
import LoginPage from '../pages/auth/login'
import SignUp from '../pages/auth/signup'
import About from '../pages/landing/about'
import Apps from '../pages/landing/apps'
import Homepage from '../pages/landing/home'
import Kyc from '../pages/auth/signup/components/Kyc'
import BoardLayout from '../layouts/boardLayout'
import Dashboard from '../pages/board/dashboard'
import CreateCampaign from '../pages/board/createCampaign'
import ManageContest from '../pages/board/manageContest'
import Analytics from '../pages/board/analytics'
import Settings from '../pages/board/settings'
import PhotoContest from '../pages/board/createCampaign/photoContest'
import ManageEntries from '../pages/board/manageContest/manageEntries'
import ForgotPassword from '../pages/auth/forgotPassword'
import PasswordConfirmation from '../pages/auth/forgotPassword/PasswordConfirmation'
import { AuthProtectRoutes, ProtectRoutes } from './protectRoutes';
import VerifyOtp from '../pages/auth/verifyOtp';
import PasswordReset from '../pages/auth/forgotPassword/PasswordReset';
import ManageJudges from '../pages/board/manageJudges';
import JudgesInfo from '../pages/board/manageJudges/components/JudgesInfo';
import JudgesContests from '../pages/board/judgesContests';
import ViewContest from '../pages/board/judgesContests/components/ViewContest';
import ContestView from '../pages/board/createCampaign/photoContest/components/contest/ContestView';
import ContestPage from '../pages/contest/ContestPage';
import Vote from '../pages/vote';


export default function Routers () {

  return (
    <div>
        <Routes>

            <Route element={<HomePageLayout />}>
              {/* <Route path='/' element={<Homepage />} /> */}
              <Route path='/about' element={<About />} />
              <Route path='/apps' element={<Apps />} />
            </Route>

            <Route path='/contest-page' element={<ContestPage />} />
            <Route path='/vote' element={<Vote />} />

            <Route element={<BoardLayout /> }> {/* ProtectRoutes */}
              <Route path="/" element={<Dashboard />} />
              <Route path="/manage-contests" element={<ManageContest />} />
              <Route path="/manage-contests/manage-entries" element={<ManageEntries />} />
              <Route path="/create-campaign" element={<CreateCampaign />} />
              <Route path="/create-campaign/photo-contest" element={<PhotoContest />} />
              <Route path='/create-campaign/contest-view' element={<ContestView />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/manage-judges' element={<ManageJudges />} />
              <Route path='/judges-contests' element={<JudgesContests />} />
              <Route path='/judges-contests/:id' element={<ViewContest />} />
              <Route path='/manage-judges/judges-info' element={<JudgesInfo />} />
            </Route>
 
            <Route element={<AuthLayout />}> {/* AuthProtectRoutes */}
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<SignUp />} />
                <Route path='/verify-otp' element={<VerifyOtp />} />
                <Route path='/kyc' element={<Kyc />} />
                <Route path='/forgot-password' element={<ForgotPassword />} />
                <Route path='/password-confirmation' element={<PasswordConfirmation />} />
                <Route path='/reset-password' element={<PasswordReset />} />
            </Route>
        </Routes>
    </div>
  )
}
