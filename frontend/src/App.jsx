import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppSelector } from './hooks';
import Layout from './components/Layout';

import Login from './pages/Login';
import PinSetup from './pages/PinSetup';
import PinVerify from './pages/PinVerify';
import Dashboard from './pages/Dashboard';
import Wallet from './pages/Wallet';
import Applications from './pages/Applications';
import Profile from './pages/Profile';
import MyDocuments from './pages/MyDocuments';
import SubmitRequest from './pages/SubmitRequest';
import VCForm from './pages/VCForm';

import { ApplicationStep1, ApplicationStep2, ApplicationStep3, ApplicationVerify } from './pages/application';

import Settings from './pages/Settings';
import Help from './pages/Help';
import TrustedIssuers from './pages/TrustedIssuers';
import TeachingRecords from './pages/TeachingRecords';
import NotFound from './pages/NotFound';

function App() {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const hasPin = localStorage.getItem('hasPin');

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/pin-setup" element={<PinSetup />} />
      <Route path="/pin-verify" element={<PinVerify />} />

      <Route path="/dashboard" element={isAuthenticated && hasPin ? <Dashboard /> : <Navigate to="/login" />} />
      <Route path="/wallet" element={isAuthenticated && hasPin ? <Wallet /> : <Navigate to="/login" />} />
      <Route path="/applications" element={isAuthenticated && hasPin ? <Applications /> : <Navigate to="/login" />} />
      <Route path="/profile" element={isAuthenticated && hasPin ? <Profile /> : <Navigate to="/login" />} />
      <Route path="/documents" element={isAuthenticated && hasPin ? <MyDocuments /> : <Navigate to="/login" />} />
      <Route path="/submit-request" element={isAuthenticated && hasPin ? <SubmitRequest /> : <Navigate to="/login" />} />
      <Route path="/vc/:vcType" element={isAuthenticated && hasPin ? <VCForm /> : <Navigate to="/login" />} />
      <Route path="/application/step1" element={isAuthenticated && hasPin ? <ApplicationStep1 /> : <Navigate to="/login" />} />
      <Route path="/application/step2" element={isAuthenticated && hasPin ? <ApplicationStep2 /> : <Navigate to="/login" />} />
      <Route path="/application/step3" element={isAuthenticated && hasPin ? <ApplicationStep3 /> : <Navigate to="/login" />} />
      <Route path="/application/verify" element={isAuthenticated && hasPin ? <ApplicationVerify /> : <Navigate to="/login" />} />

      <Route path="/" element={isAuthenticated && hasPin ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />

      <Route
        element={isAuthenticated && hasPin ? <Layout /> : <Navigate to="/login" />}
      >
        <Route path="teaching" element={<TeachingRecords />} />
        <Route path="settings" element={<Settings />} />
        <Route path="help" element={<Help />} />
        <Route path="issuers" element={<TrustedIssuers />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
