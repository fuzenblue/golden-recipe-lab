import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks';
import {
  submitOIDC4VP,
  toggleCredentialForPresentation,
  selectAllForPresentation,
  clearSelection,
  clearVP,
  fetchDemoCredentials,
} from '../../store/slices/credentialsSlice';
import { submitApplication } from '../../store/slices/applicationsSlice';
import Button from '../../components/ui/Button';
import Checkbox from '../../components/ui/Checkbox';

const TYPE_LABELS = {
  VC1: { th: 'ข้อมูลส่วนบุคคลและการศึกษา', icon: 'fa-user' },
  VC2: { th: 'ตรวจสอบประวัติการจ้างงานและภาระงาน', icon: 'fa-briefcase' },
  VC3: { th: 'ผลงานทางวิชาการ', icon: 'fa-chart-simple' },
};

const STATUS_BADGE = {
  verified: { color: 'text-green-700 bg-green-100', label: 'ยืนยันแล้ว' },
  ready: { color: 'text-blue-700 bg-blue-100', label: 'พร้อมใช้' },
  pending: { color: 'text-yellow-700 bg-yellow-100', label: 'รอดำเนินการ' },
  received: { color: 'text-purple-700 bg-purple-100', label: 'ได้รับแล้ว' },
  expired: { color: 'text-red-700 bg-red-100', label: 'หมดอายุ' },
  revoked: { color: 'text-gray-700 bg-gray-100', label: 'ถูกเพิกถอน' },
};

const OIDC4VP_STEPS = [
  { key: 'creating_session', label: 'สร้างเซสชันการตรวจสอบ', icon: 'fa-qrcode' },
  { key: 'building_vp', label: 'สร้าง Verifiable Presentation', icon: 'fa-file-shield' },
  { key: 'submitting', label: 'ส่ง VP ไปยังผู้ตรวจสอบ', icon: 'fa-paper-plane' },
  { key: 'verifying', label: 'ตรวจสอบลายเซ็นดิจิทัล', icon: 'fa-shield-halved' },
];

function ApplicationVerify() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const { items, selectedForPresentation, vpStatus, vpError, verificationResult, oidc4vpSession } =
    useAppSelector((state) => state.credentials);
  const [confirmed, setConfirmed] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const progress = 100;

  useEffect(() => {
    dispatch(fetchDemoCredentials());
    return () => {
      dispatch(clearVP());
    };
  }, [dispatch]);

  useEffect(() => {
    if (vpStatus === 'creating_session') setCurrentStep(0);
    else if (vpStatus === 'building_vp') setCurrentStep(1);
    else if (vpStatus === 'submitting') setCurrentStep(2);
    else if (vpStatus === 'verifying') setCurrentStep(3);
  }, [vpStatus]);

  useEffect(() => {
    if (vpStatus === 'verified' && verificationResult && oidc4vpSession) {
      dispatch(submitApplication({
        position: 'ผู้ช่วยศาสตราจารย์',
        credentials: selectedForPresentation,
        session: oidc4vpSession,
        verificationResult,
      }));
    }
  }, [vpStatus, verificationResult, oidc4vpSession, selectedForPresentation, dispatch]);

  const isProcessing = vpStatus !== 'idle' && vpStatus !== 'failed' && vpStatus !== 'verified';
  const isVerified = vpStatus === 'verified';

  const handleSelectAll = () => {
    if (selectedForPresentation.length === items.length) {
      dispatch(clearSelection());
    } else {
      dispatch(selectAllForPresentation());
    }
  };

  const handleSubmit = () => {
    if (confirmed && selectedForPresentation.length > 0) {
      dispatch(submitOIDC4VP());
    }
  };

  const handleDone = () => {
    dispatch(clearVP());
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <header className="bg-white border-b border-[#E0E0E0] px-4 py-3">
        <div className="max-w-[432px] mx-auto flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-[#0066CC] hover:text-[#0052A3]"
          >
            <i className="fa-solid fa-arrow-left"></i>
            <span className="text-sm">กลับ</span>
          </button>
          <div className="text-sm text-[#00AA00] font-medium">{progress}%</div>
        </div>
      </header>

      <div className="max-w-[432px] mx-auto px-4 py-6 space-y-6">
        <div className="bg-white rounded-lg shadow-sm border border-[#E0E0E0] p-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-base font-semibold text-[#333333]">ตรวจสอบและยืนยัน</h2>
            <span className="text-sm text-[#00AA00] font-medium">✓ พร้อมส่ง</span>
          </div>
          <div className="w-full bg-[#00AA00]/20 rounded-full h-2">
            <div className="bg-[#00AA00] h-2 rounded-full w-full" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-[#E0E0E0] p-4">
          <h3 className="font-semibold text-[#333333] mb-3 flex items-center gap-2">
            <i className="fa-solid fa-clipboard"></i>
            สรุปคำขอ
          </h3>

          <div className="bg-[#0066CC]/5 border border-[#0066CC]/20 rounded-lg p-3 mb-4">
            <p className="text-xs text-[#999999] mb-1 flex items-center gap-1">
              <i className="fa-solid fa-bullseye"></i>
              ตำแหน่งที่สมัคร
            </p>
            <p className="text-sm font-semibold text-[#0066CC]">ผู้ช่วยศาสตราจารย์</p>
          </div>

          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-semibold text-[#333333]">
              <i className="fa-solid fa-share-from-square mr-1"></i>
              เลือกข้อมูลที่ต้องการเปิดเผย
            </p>
            <button
              onClick={handleSelectAll}
              className="text-xs text-[#0066CC] hover:underline"
            >
              {selectedForPresentation.length === items.length && items.length > 0
                ? 'ยกเลิกทั้งหมด'
                : 'เลือกทั้งหมด'}
            </button>
          </div>
          <p className="text-xs text-[#999999] mb-3">
            ระบบจะสร้าง Verifiable Presentation (VP) ผ่าน OIDC4VP
            เพื่อส่งให้ผู้ตรวจสอบแบบไม่ต้องแสดงเอกสารจริง
          </p>

          <div className="space-y-3">
            {items.map((cred) => {
              const typeInfo = TYPE_LABELS[cred.type] || { th: cred.type, icon: 'fa-file' };
              const badge = STATUS_BADGE[cred.status] || STATUS_BADGE.ready;
              const isSelected = selectedForPresentation.includes(cred.id);

              return (
                <div
                  key={cred.id}
                  className={`border rounded-lg p-3 transition-colors cursor-pointer ${
                    isSelected
                      ? 'border-[#0066CC] bg-[#F0F7FF]'
                      : 'border-[#E0E0E0] hover:border-[#999999]'
                  }`}
                  onClick={() => !isProcessing && dispatch(toggleCredentialForPresentation(cred.id))}
                >
                  <div className="flex items-start gap-3">
                    <Checkbox
                      checked={isSelected}
                      disabled={isProcessing}
                      onCheckedChange={() => dispatch(toggleCredentialForPresentation(cred.id))}
                      className="mt-1"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <i className={`fa-solid ${typeInfo.icon} text-[#666666]`}></i>
                          <span className="text-sm font-semibold text-[#333333]">
                            {cred.type}: {typeInfo.th}
                          </span>
                        </div>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${badge.color}`}>
                          {badge.label}
                        </span>
                      </div>
                      <p className="text-xs text-[#666666] pl-7">
                        {cred.issuer}
                        {cred.claims?.fullName ? ` | ${cred.claims.fullName}` : ''}
                        {cred.claims?.title ? ` | ${cred.claims.title}` : ''}
                        {cred.claims?.position ? ` | ${cred.claims.position}` : ''}
                        {cred.claims?.journal ? ` | ${cred.claims.journal}` : ''}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {items.length === 0 && (
              <p className="text-sm text-[#999999] text-center py-4">
                <i className="fa-solid fa-circle-exclamation mr-1"></i>
                ไม่พบข้อมูลที่สามารถเปิดเผยได้
              </p>
            )}
          </div>

          {selectedForPresentation.length > 0 && !isProcessing && (
            <div className="mt-3 bg-[#E3F2FD] border border-[#0066CC]/20 rounded p-3">
              <p className="text-xs text-[#666666] flex items-start gap-2">
                <i className="fa-solid fa-shield-halved mt-0.5"></i>
                เลือก {selectedForPresentation.length} รายการ —
                ระบบจะสร้าง VP ผ่าน OIDC4VP พร้อมลายเซ็นดิจิทัล
              </p>
            </div>
          )}
        </div>

        {isProcessing && (
          <div className="bg-white rounded-lg shadow-sm border border-[#E0E0E0] p-4">
            <h3 className="font-semibold text-[#333333] mb-4 flex items-center gap-2">
              <i className="fa-solid fa-arrow-right-arrow-left text-[#0066CC]"></i>
              OIDC4VP Flow
            </h3>
            <div className="space-y-3">
              {OIDC4VP_STEPS.map((step, index) => {
                const isActive = index === currentStep;
                const isDone = index < currentStep;
                return (
                  <div key={step.key} className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 transition-all ${
                        isDone
                          ? 'bg-green-100 text-green-600'
                          : isActive
                            ? 'bg-blue-100 text-blue-600 ring-2 ring-blue-300'
                            : 'bg-gray-100 text-gray-400'
                      }`}
                    >
                      {isDone ? (
                        <i className="fa-solid fa-check"></i>
                      ) : isActive ? (
                        <i className="fa-solid fa-circle-notch animate-spin"></i>
                      ) : (
                        <i className={`fa-solid ${step.icon}`}></i>
                      )}
                    </div>
                    <div className="flex-1">
                      <p
                        className={`text-sm ${
                          isDone
                            ? 'text-green-600'
                            : isActive
                              ? 'text-blue-600 font-medium'
                              : 'text-gray-400'
                        }`}
                      >
                        {step.label}
                      </p>
                      {isActive && (
                        <p className="text-xs text-gray-400 mt-0.5">กำลังดำเนินการ...</p>
                      )}
                    </div>
                    {isDone && (
                      <i className="fa-solid fa-check-circle text-green-500"></i>
                    )}
                  </div>
                );
              })}
            </div>
            {oidc4vpSession && (
              <div className="mt-4 bg-gray-50 rounded-lg p-3 text-xs text-gray-500 font-mono break-all">
                <p className="flex items-center gap-1 mb-1">
                  <i className="fa-solid fa-qrcode"></i>
                  Session: {oidc4vpSession.sessionId}
                </p>
                <p className="flex items-center gap-1">
                  <i className="fa-solid fa-key"></i>
                  Nonce: {oidc4vpSession.nonce}
                </p>
              </div>
            )}
          </div>
        )}

        <div className="bg-white rounded-lg shadow-sm border border-[#E0E0E0] p-4">
          <div className="flex items-start gap-2">
            <i className="fa-solid fa-building-columns text-xl text-[#0066CC]"></i>
            <div>
              <p className="text-sm font-semibold text-[#333333]">ผู้ตรวจสอบ (Verifier)</p>
              <p className="text-sm text-[#666666]">
                {user?.institution || 'โกลเดน เรสสิพี แล็ป'}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-[#E0E0E0]">
          <Checkbox
            checked={confirmed}
            onCheckedChange={(checked) => !isProcessing && setConfirmed(checked)}
            className="mt-1"
          />
          <label
            className="text-sm text-[#333333] flex-1 cursor-pointer"
            onClick={() => !isProcessing && setConfirmed(!confirmed)}
          >
            <span className="block font-medium">
              ข้าพเจ้ายืนยันให้ส่งข้อมูลที่เลือกไปยังผู้ตรวจสอบ
            </span>
          </label>
        </div>

        {vpStatus === 'failed' && vpError && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-start gap-2">
            <i className="fa-solid fa-circle-exclamation text-red-500 mt-0.5"></i>
            <p className="text-sm text-red-700">{vpError}</p>
          </div>
        )}

        {!isProcessing && (
          <Button
            onClick={handleSubmit}
            disabled={!confirmed || selectedForPresentation.length === 0}
            className="w-full bg-[#00AA00] hover:bg-[#008800] text-white disabled:bg-[#E0E0E0] disabled:text-[#999999] disabled:cursor-not-allowed h-12 text-base font-semibold"
          >
            <i className="fa-solid fa-paper-plane mr-2"></i>
            ส่งใบสมัคร (OIDC4VP)
          </Button>
        )}
      </div>

      {isVerified && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
          onClick={handleDone}
        >
          <div
            className="bg-white rounded-xl shadow-xl p-6 w-full max-w-sm mx-auto text-center space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-[#00AA00]/10 flex items-center justify-center">
              <i className="fa-solid fa-check text-3xl text-[#00AA00]"></i>
            </div>
            <h2 className="text-lg font-bold text-[#333333]">ส่งใบสมัครสำเร็จ</h2>
            <div className="bg-[#F0F7FF] border border-[#0066CC]/20 rounded-lg p-3 text-left space-y-1">
              <p className="text-xs text-[#666666] flex items-center gap-1">
                <i className="fa-solid fa-qrcode"></i>
                OIDC4VP — Verifiable Presentation
              </p>
              <p className="text-xs text-[#333333] font-mono break-all">
                {selectedForPresentation.length} credentials | {oidc4vpSession?.nonce && `Nonce: ${oidc4vpSession.nonce}`}
              </p>
              {verificationResult && (
                <>
                  <p className="text-xs text-[#00AA00] mt-1 flex items-center gap-1">
                    <i className="fa-solid fa-shield-check"></i>
                    ลายเซ็นดิจิทัลถูกต้อง (Signature Valid)
                  </p>
                  <p className="text-xs text-[#00AA00] flex items-center gap-1">
                    <i className="fa-solid fa-clock"></i>
                    ยังไม่หมดอายุ (Not Expired)
                  </p>
                  <p className="text-xs text-[#666666] mt-1">
                    Holder: {verificationResult.holderDid || 'did:key:...'}
                  </p>
                </>
              )}
            </div>
            <p className="text-sm text-[#666666]">
              ใบสมัครของคุณถูกส่งไปยังระบบเรียบร้อยแล้ว
              <br />
              กรุณารอการตรวจสอบจากเจ้าหน้าที่
            </p>
            <button
              onClick={handleDone}
              className="w-full px-4 py-3 bg-[#0066CC] text-white rounded-lg font-semibold hover:bg-[#0052A3] transition"
            >
              รับทราบ
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ApplicationVerify;
