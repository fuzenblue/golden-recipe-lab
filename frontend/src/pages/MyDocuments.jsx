import BottomNav from '../components/BottomNav';
import { Link } from 'react-router-dom';

function MyDocuments() {
  const documents = [
    {
      id: 'vc1',
      title: 'Personal ID (VC1)',
      status: 'verified',
      statusText: 'ยืนยันแล้ว',
      statusColor: '#00AA00',
      issued: '01 ม.ค. 2567',
      expires: '15 มี.ค. 2570',
    },
    {
      id: 'vc2',
      title: 'Employment (VC2)',
      status: 'verified',
      statusText: 'ยืนยันแล้ว',
      statusColor: '#00AA00',
      issued: '15 ม.ค. 2567',
      expires: null,
      detail: 'คณะวิทยาศาสตร์',
    },
    {
      id: 'vc3',
      title: 'Teaching Records (VC3)',
      status: 'requesting',
      statusText: 'กำลังขอข้อมูล...',
      statusColor: '#FF9900',
      issued: null,
      expires: null,
    },
    {
      id: 'vc4',
      title: 'Publications (VC4)',
      status: 'verified',
      statusText: 'ยืนยันแล้ว',
      statusColor: '#00AA00',
      issued: '20 ก.พ. 2567',
      expires: null,
      detail: '5 publications on record',
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'verified': return 'check';
      case 'requesting': return 'clock';
      case 'missing': return 'xmark';
      default: return 'circle';
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] pb-20">
      <header className="bg-white border-b border-[#E0E0E0] px-4 py-3 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <Link to="/" className="p-1 hover:bg-[#F5F5F5] rounded-full">
            <i className="fa-solid fa-arrow-left text-[#333333]"></i>
          </Link>
          <h1 className="text-lg font-semibold text-[#333333]">เอกสารของฉัน</h1>
        </div>
      </header>

      <div className="px-4 py-6">
        <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
          <button className="px-4 py-2 bg-[#0066CC] text-white rounded-full text-sm font-medium whitespace-nowrap">
            ทั้งหมด
          </button>
          <button className="px-4 py-2 bg-white text-[#666666] rounded-full text-sm font-medium border border-[#E0E0E0] whitespace-nowrap hover:bg-[#F5F5F5]">
            Personal
          </button>
          <button className="px-4 py-2 bg-white text-[#666666] rounded-full text-sm font-medium border border-[#E0E0E0] whitespace-nowrap hover:bg-[#F5F5F5]">
            Employment
          </button>
          <button className="px-4 py-2 bg-white text-[#666666] rounded-full text-sm font-medium border border-[#E0E0E0] whitespace-nowrap hover:bg-[#F5F5F5]">
            Academic
          </button>
        </div>

        <div className="space-y-4">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-lg p-4 shadow-sm border border-[#E0E0E0]"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-[#333333] mb-1">{doc.title}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="flex items-center gap-1 text-sm font-medium"
                      style={{ color: doc.statusColor }}
                    >
                      <i className={"fa-solid fa-" + getStatusIcon(doc.status)}></i> {doc.statusText}
                    </span>
                  </div>
                  {doc.issued && (
                    <p className="text-xs text-[#666666]">ออกให้เมื่อ: {doc.issued}</p>
                  )}
                  {doc.expires && (
                    <p className="text-xs text-[#666666]">หมดอายุ: {doc.expires}</p>
                  )}
                  {doc.detail && (
                    <p className="text-xs text-[#666666] mt-1">{doc.detail}</p>
                  )}
                </div>
              </div>

              {doc.status === 'verified' ? (
                <div className="flex gap-2">
                  <button className="flex-1 px-3 py-2 bg-[#0066CC] text-white rounded-lg text-sm font-medium hover:bg-[#0052A3] transition-colors flex items-center justify-center gap-2">
                    <i className="fa-solid fa-eye"></i>
                    ดู
                  </button>
                  <button className="px-3 py-2 bg-white border border-[#E0E0E0] text-[#333333] rounded-lg text-sm font-medium hover:bg-[#F5F5F5] transition-colors flex items-center justify-center gap-2">
                    <i className="fa-solid fa-share-nodes"></i>
                    แชร์
                  </button>
                  <button className="px-3 py-2 bg-white border border-[#E0E0E0] text-[#333333] rounded-lg text-sm font-medium hover:bg-[#F5F5F5] transition-colors flex items-center justify-center gap-2">
                    <i className="fa-solid fa-download"></i>
                  </button>
                </div>
              ) : doc.status === 'requesting' ? (
                <div className="flex gap-2">
                  <button className="flex-1 px-3 py-2 bg-[#FF9900] text-white rounded-lg text-sm font-medium hover:bg-[#E68A00] transition-colors flex items-center justify-center gap-2">
                    <i className="fa-solid fa-clock"></i>
                    รอดำเนินการ
                  </button>
                  <button className="px-3 py-2 bg-white border border-[#E0E0E0] text-[#333333] rounded-lg text-sm font-medium hover:bg-[#F5F5F5] transition-colors">
                    ยกเลิก
                  </button>
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <Link
          to="/submit-request"
          className="mt-6 flex items-center justify-center gap-2 px-4 py-3 bg-white border-2 border-dashed border-[#0066CC] text-[#0066CC] rounded-lg font-semibold hover:bg-[#E3F2FD] transition-colors"
        >
          <i className="fa-solid fa-plus"></i>
          เพิ่มเอกสารใหม่
        </Link>
      </div>

      <BottomNav />
    </div>
  );
}

export default MyDocuments;
