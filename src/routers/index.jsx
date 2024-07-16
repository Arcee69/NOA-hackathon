import React from 'react'
import { Route, Routes} from "react-router-dom";
import AuthLayout from '../layouts/authLayout'

import LoginPage from '../pages/auth/login'
import SignUp from '../pages/auth/signup'

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


import ContestView from '../pages/board/createCampaign/photoContest/components/contest/ContestView';
import ContestPage from '../pages/contest/ContestPage';
import Vote from '../pages/vote';
import ManageAdmins from '../pages/board/manageAdmins';
import AdminInfo from '../pages/board/manageAdmins/components/AdminInfo';
import CreateAdmin from '../pages/board/manageAdmins/components/CreateAdmin';
import VideoContest from '../pages/board/createCampaign/videoContest';
import EssayContest from '../pages/board/createCampaign/photoContest';
import ManageQuiz from '../pages/board/manageQuiz';
import CreateQuiz from '../pages/board/manageQuiz/createQuiz';
import QuizView from '../pages/board/manageQuiz/createQuiz/components/contest/ContestView';
import QuizViewDetails from '../pages/board/manageQuiz/quizDetails';
import QuizViewAll from '../pages/board/manageQuiz/QuizViewAll';


export default function Routers () {

  return (
    <div>
        <Routes>

            <Route path='/contest-page' element={<ContestPage />} />
            <Route path='/vote' element={<Vote />} />

            <Route element={<ProtectRoutes /> }> {/*  */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/manage-contests" element={<ManageContest />} />
              <Route path="/manage-contests/manage-entries" element={<ManageEntries />} />
              <Route path="/create-campaign" element={<CreateCampaign />} />
              <Route path="/create-campaign/photo-contest" element={<PhotoContest />} />
              <Route path="/create-campaign/video-contest" element={<VideoContest />} />
              <Route path="/create-campaign/essay-contest" element={<EssayContest />} />
              <Route path='/create-campaign/contest-view' element={<ContestView />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/manage-admin' element={<ManageAdmins />} />
              <Route path='/manage-admin/create-admin' element={<CreateAdmin />} />
              <Route path='/quiz' element={<ManageQuiz />} />
              <Route path="/quiz/create-quiz" element={<CreateQuiz />} />
              <Route path="/quiz/view-quiz" element={<QuizView />} />
              <Route path="/quiz/view-details" element={<QuizViewDetails />} />
              <Route path="/quiz/view-all" element={<QuizViewAll />} />
              {/* <Route path='/judges-contests/:id' element={<ViewContest />} /> */}
              {/* <Route path='/manage-judges/judges-info' element={<JudgesInfo />} /> */}
              <Route path='/manage-admins/admins-info' element={<AdminInfo />} />
            </Route>
 
            <Route element={<AuthProtectRoutes />}> {/*  */}
                <Route path='/' element={<LoginPage />} />
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
