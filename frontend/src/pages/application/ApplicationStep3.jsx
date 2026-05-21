import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, BarChart3, FileText, AlertTriangle, Building2, Edit3, Link,
} from 'lucide-react';
import Button from '../../components/ui/Button';
import Checkbox from '../../components/ui/Checkbox';
import { RadioGroup, RadioGroupItem } from '../../components/ui/RadioGroup';
import Label from '../../components/ui/Label';
import Textarea from '../../components/ui/Textarea';

function ApplicationStep3() {
  const navigate = useNavigate();
  const [confirmed, setConfirmed] = useState(false);
  const [hasVC3] = useState(true);
  const [selectedPublisher, setSelectedPublisher] = useState('');
  const [researchTopic, setResearchTopic] = useState('');
  const progress = 75;

  const handleNext = () => {
    if (hasVC3 && confirmed) {
      navigate('/application/verify');
    }
  };

  const handleRequestVC3 = () => {
    alert('VC3 request sent to publisher!');
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <header className="bg-white border-b border-[#E0E0E0] px-4 py-3">
        <div className="max-w-[432px] mx-auto flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-[#0066CC] hover:text-[#0052A3]"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm">กลับ / Back</span>
          </button>
          <div className="text-sm text-[#999999]">{progress}%</div>
        </div>
      </header>

      <div className="max-w-[432px] mx-auto px-4 py-6 space-y-6">
        <div className="bg-white rounded-lg shadow-sm border border-[#E0E0E0] p-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-base font-semibold text-[#333333]">ขั้นตอนที่ 3/4</h2>
            <span className="text-sm text-[#999999]">VC3: ผลงานวิชาการ</span>
          </div>
          <div className="w-full bg-[#E0E0E0] rounded-full h-2">
            <div
              className="bg-[#0066CC] h-2 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {hasVC3 ? (
          <>
            <div className="bg-white rounded-lg shadow-sm border border-[#E0E0E0] p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-[#333333] flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  สรุปผลงาน / Summary
                </h3>
                <span className="text-sm text-[#00AA00] font-medium">5 ผลงาน (ครบ)</span>
              </div>
              <p className="text-xs text-[#999999] mb-4">ต้องมีอย่างน้อย 5 ผลงาน</p>

              <div className="space-y-3">
                {[
                  { title: 'Deep Learning for Thai NLP', journal: 'ACM Transactions', year: '2565', impact: '3.5' },
                  { title: 'Neural Machine Translation', journal: 'Springer Nature', year: '2564', impact: '4.2' },
                  { title: 'BERT for Thai Language', journal: 'IEEE Access', year: '2563', impact: '3.8' },
                  { title: 'Transformer Architecture Study', journal: 'Nature Communications', year: '2562', impact: '4.5' },
                  { title: 'Thai Text Classification', journal: 'AI Journal', year: '2561', impact: '3.2' },
                ].map((pub, index) => (
                  <div
                    key={index}
                    className="p-3 bg-[#F5F5F5] rounded border border-[#E0E0E0]"
                  >
                    <div className="flex items-start justify-between mb-1">
                      <p className="text-sm font-medium text-[#333333] flex-1 flex items-start gap-2">
                        <FileText className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        {index + 1}. &ldquo;{pub.title}&rdquo;
                      </p>
                      <div className="w-2 h-2 rounded-full bg-[#00AA00] flex-shrink-0 mt-1.5" />
                    </div>
                    <p className="text-xs text-[#666666]">วารสาร: {pub.journal}</p>
                    <p className="text-xs text-[#999999]">ปี: {pub.year} | Impact Factor: {pub.impact}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-[#E0E0E0]">
              <Checkbox
                checked={confirmed}
                onCheckedChange={(checked) => setConfirmed(checked)}
                className="mt-1"
              />
              <label className="text-sm text-[#333333] flex-1 cursor-pointer" onClick={() => setConfirmed(!confirmed)}>
                <span className="block">ข้าพเจ้ายืนยันว่าข้อมูลข้างต้นถูกต้อง</span>
                <span className="text-xs text-[#999999]">I confirm the above information is correct</span>
              </label>
            </div>

            <Button
              onClick={handleNext}
              disabled={!confirmed}
              className="w-full bg-[#0066CC] hover:bg-[#0052A3] text-white disabled:bg-[#E0E0E0] disabled:text-[#999999] disabled:cursor-not-allowed"
            >
              ถัดไป / Next Step →
            </Button>
          </>
        ) : (
          <>
            <div className="bg-[#FF9900]/10 border border-[#FF9900] rounded-lg p-4">
              <div className="flex items-start gap-2 mb-3">
                <AlertTriangle className="w-6 h-6 text-[#FF9900] flex-shrink-0" />
                <div>
                  <p className="font-semibold text-[#FF9900]">คุณยังไม่มี VC3</p>
                  <p className="text-xs text-[#666666]">You don&apos;t have VC3 yet</p>
                  <p className="text-xs text-[#999999] mt-1">กรุณาขอ VC3 จากสำนักพิมพ์เพื่อดำเนินการต่อ</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-[#E0E0E0] p-4 space-y-4">
              <h3 className="font-semibold text-[#333333] flex items-center gap-2">
                <FileText className="w-5 h-5" />
                ขอ VC3 ใหม่ / Request New VC3
              </h3>

              <div>
                <Label className="text-sm font-medium text-[#333333] mb-2 flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  เลือกสำนักพิมพ์ / Select Publisher
                </Label>
                <RadioGroup
                  value={selectedPublisher}
                  onValueChange={setSelectedPublisher}
                >
                  <div className="space-y-2">
                    {['Scopus', 'TCI (Thai-Journal Citation)', 'SRI'].map(
                      (publisher) => (
                        <RadioGroupItem key={publisher} value={publisher} id={publisher}>
                          <span className="text-sm">{publisher}</span>
                        </RadioGroupItem>
                      )
                    )}
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="text-sm font-medium text-[#333333] mb-2 flex items-center gap-2">
                  <Edit3 className="w-4 h-4" />
                  หัวข้อวิจัย / Research Topic
                </Label>
                <Textarea
                  value={researchTopic}
                  onChange={(e) => setResearchTopic(e.target.value)}
                  placeholder="การประยุกต์ใช้ AI ในการศึกษา"
                  className="w-full"
                  rows={3}
                />
              </div>

              <div className="bg-[#E3F2FD] border border-[#0066CC]/20 rounded p-3">
                <p className="text-xs text-[#666666] flex items-start gap-2">
                  <Link className="w-4 h-4 flex-shrink-0" />
                  VC1 จะถูกแนบโดยอัตโนมัติเพื่อยืนยันตัวตน
                </p>
                <p className="text-xs text-[#999999]">VC1 will be attached automatically for identity</p>
              </div>

              <Button
                onClick={handleRequestVC3}
                disabled={!selectedPublisher || !researchTopic}
                className="w-full bg-[#0066CC] hover:bg-[#0052A3] text-white disabled:bg-[#E0E0E0] disabled:text-[#999999] disabled:cursor-not-allowed"
              >
                <FileText className="w-4 h-4 mr-2" />
                ขอ VC3 / Request VC3
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ApplicationStep3;
