import { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: 'Verifiable Credential คืออะไร?',
    answer: 'Verifiable Credential (VC) คือหนังสือรับรองดิจิทัลที่สามารถตรวจสอบได้ทางคณิตศาสตร์ ใช้ยืนยันคุณวุฒิ การทำงาน หรือผลงานวิชาการของคุณอย่างปลอดภัย',
  },
  {
    id: 2,
    question: 'จะขอหนังสือรับรองได้อย่างไร?',
    answer: 'ไปที่หน้า "กระเป๋าเอกสาร" แล้วกด "ขอหนังสือรับรอง" เลือกประเภทและผู้ออกหนังสือรับรอง ผู้ออกจะตรวจสอบและออกหนังสือรับรองดิจิทัลให้คุณ',
  },
  {
    id: 3,
    question: 'จะยื่นขอตำแหน่งทางวิชาการได้อย่างไร?',
    answer: 'ตรวจสอบให้แน่ใจว่าหนังสือรับรองทั้งหมดได้รับการยืนยันแล้ว ไปที่หน้า "คำร้อง" และกด "สมัครตำแหน่งใหม่" เลือกตำแหน่งที่ต้องการและส่งคำร้อง',
  },
  {
    id: 4,
    question: 'การตรวจสอบใช้เวลานานเท่าไร?',
    answer: 'ระยะเวลาขึ้นอยู่กับผู้ออกหนังสือรับรอง การตรวจสอบจากฝ่ายบุคคลใช้ 1-3 วัน การตรวจสอบจากวารสารวิชาการอาจใช้ 1-2 สัปดาห์',
  },
];

const Help = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold">ช่วยเหลือ</h1>
      </div>

      <div className="space-y-3">
        <p className="text-sm font-semibold text-base-content/70 flex items-center gap-1.5">
          <i className="fa-solid fa-circle-question text-primary"></i>
          คำถามที่พบบ่อย
        </p>
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="bg-base-100 rounded-box border border-base-300 overflow-hidden"
          >
            <button
              onClick={() => setExpanded(expanded === faq.id ? null : faq.id)}
              className="w-full flex items-center justify-between p-4 text-left"
            >
              <span className="text-sm font-medium flex-1 pr-4">{faq.question}</span>
              <i className={`fa-solid fa-chevron-down text-xs text-base-content/40 transition-transform ${
                expanded === faq.id ? 'rotate-180' : ''
              }`}></i>
            </button>
            {expanded === faq.id && (
              <div className="px-4 pb-4">
                <p className="text-sm text-base-content/60 border-t border-base-200 pt-3">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-base-100 rounded-box border border-base-300 p-4">
        <p className="text-sm font-semibold mb-3 flex items-center gap-1.5">
          <i className="fa-solid fa-headset text-primary"></i>
          ติดต่อ
        </p>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-envelope text-base-content/40 w-4"></i>
            <span>support@grl.ac.th</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-phone text-base-content/40 w-4"></i>
            <span>02-xxx-xxxx</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-clock text-base-content/40 w-4"></i>
            <span>จ.-ศ. 9:00-17:00 น.</span>
          </div>
        </div>
      </div>

      <div className="bg-base-100 rounded-box border border-base-300 p-4 text-center">
        <p className="text-caption text-base-content/40">
          <strong>Acard Academic</strong> v1.0.0
        </p>
        <p className="text-caption text-base-content/30">
          present by golden recipe lab
        </p>
      </div>
    </>
  );
};

export default Help;