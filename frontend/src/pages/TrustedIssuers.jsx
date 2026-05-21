const demoIssuers = [
  { id: 1, name: 'กรมการปกครอง', nameEn: 'Dept of Provincial Admin', type: 'Government', credentials: ['VC1'], color: 'bg-primary' },
  { id: 2, name: 'สำนักงานจัดการบุคลากร มศว', nameEn: 'HR Office - SWU', type: 'University', credentials: ['VC2'], color: 'bg-secondary' },
  { id: 3, name: 'คณะวิทยาศาสตร์ มศว', nameEn: 'Faculty of Science', type: 'Faculty', credentials: ['VC3'], color: 'bg-success' },
  { id: 4, name: 'Scopus - Elsevier', nameEn: 'Scopus', type: 'Database', credentials: ['VC4'], color: 'bg-warning' },
  { id: 5, name: 'TCI', nameEn: 'Thai-Journal Citation Index', type: 'Database', credentials: ['VC4'], color: 'bg-warning' },
];

const TrustedIssuers = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold">ผู้ออกหนังสือรับรอง</h1>
        <span className="text-caption text-base-content/50">Issuers</span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div className="bg-base-100 rounded-box border border-base-300 p-3 text-center">
          <p className="text-xs text-base-content/60">ทั้งหมด</p>
          <p className="text-lg font-bold text-primary">{demoIssuers.length}</p>
        </div>
        <div className="bg-base-100 rounded-box border border-base-300 p-3 text-center">
          <p className="text-xs text-base-content/60">มหาวิทยาลัย</p>
          <p className="text-lg font-bold text-secondary">2</p>
        </div>
        <div className="bg-base-100 rounded-box border border-base-300 p-3 text-center">
          <p className="text-xs text-base-content/60">ฐานข้อมูล</p>
          <p className="text-lg font-bold text-warning">2</p>
        </div>
      </div>

      <div className="space-y-2">
        {demoIssuers.map((issuer) => (
          <div key={issuer.id} className="bg-base-100 rounded-box border border-base-300 p-3.5">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 ${issuer.color} text-white rounded-lg flex items-center justify-center flex-shrink-0`}>
                <i className="fa-solid fa-certificate"></i>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">{issuer.name}</p>
                <p className="text-xs text-base-content/50 truncate">{issuer.nameEn}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="badge badge-outline badge-sm">{issuer.type}</span>
                <span className="badge badge-success badge-sm gap-1">
                  <i className="fa-solid fa-check text-xs"></i>
                </span>
              </div>
            </div>
            <div className="mt-2 flex gap-1">
              {issuer.credentials.map((vc) => (
                <span key={vc} className="badge badge-ghost badge-xs">{vc}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TrustedIssuers;