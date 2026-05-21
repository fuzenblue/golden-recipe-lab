import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppSelector } from './hooks';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Wallet from './pages/Wallet';
import Applications from './pages/Applications';
import Settings from './pages/Settings';
import Help from './pages/Help';
import TrustedIssuers from './pages/TrustedIssuers';
import TeachingRecords from './pages/TeachingRecords';
import NotFound from './pages/NotFound';
import PinSetup from './pages/PinSetup';
import PinVerify from './pages/PinVerify';
import { ApplicationStep1, ApplicationStep2, ApplicationStep3, ApplicationVerify } from './pages/application';

function App() {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const hasPin = localStorage.getItem('hasPin');

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/pin-setup" element={<PinSetup />} />
      <Route path="/pin-verify" element={<PinVerify />} />
      
      <Route
        path="/"
        element={
          isAuthenticated && hasPin ? (
            <Layout />
          ) : (
            <Navigate to="/login" />
          )
        }
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="wallet" element={<Wallet />} />
        <Route path="applications" element={<Applications />} />
        <Route path="application/step1" element={<ApplicationStep1 />} />
        <Route path="application/step2" element={<ApplicationStep2 />} />
        <Route path="application/step3" element={<ApplicationStep3 />} />
        <Route path="application/verify" element={<ApplicationVerify />} />
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