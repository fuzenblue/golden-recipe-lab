import userMock from '../../data/user-mock.json';

function WalletVC3({ initialIndex = 0 }) {
  const list = userMock.vc3;
  const data = list[initialIndex];

  if (!data) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-[#E0E0E0] p-4 text-center text-sm text-[#999999]">
        ไมพบขอมูล VC3
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-[#E0E0E0] overflow-hidden">
      <div className="bg-[#0066CC]/5 px-4 py-3 border-b border-[#E0E0E0]">
        <div className="flex items-center gap-2 text-sm">
          <i className="fa-solid fa-book-open text-[#0066CC]"></i>
          <div>
            <p className="font-semibold text-[#0066CC]">ออกโดย: โกลเดน เรสสิพี แล็ป</p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <div className="bg-[#E3F2FD] rounded-lg p-3">
          <h4 className="text-sm font-semibold text-[#0066CC]">ผลงานวิจัย</h4>
        </div>

        <div className="space-y-2">
          <div className="bg-[#F5F5F5] rounded p-3 space-y-1">
            <p className="text-xs font-medium text-[#333333]">{data.research_works_title}</p>
            {data.journal_publication_journal_name && (
              <p className="text-xs text-[#999999]">ตีพิมพใน: {data.journal_publication_journal_name}</p>
            )}
            {data.journal_publication_impact_factor && (
              <p className="text-xs text-[#999999]">Impact Factor: {data.journal_publication_impact_factor}</p>
            )}
            {data.research_works_quality_rating && (
              <p className="text-xs text-[#999999]">คุณภาพ: {data.research_works_quality_rating}</p>
            )}
            {data.research_works_ownership_percentage && (
              <p className="text-xs text-[#999999]">เปนเจาของผลงาน: {data.research_works_ownership_percentage}%</p>
            )}
            <p className="text-xs text-[#0066CC]">สถานะ: {data.applicant_status_in_work}</p>
          </div>
        </div>

        {data.participation_details && (
          <>
            <div className="h-px bg-[#E0E0E0]" />
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-[#333333] flex items-center gap-2">
                <i className="fa-solid fa-user-pen text-[#0066CC]"></i>
                รายละเอียดการมีสวนรวม
              </h4>
              <div className="pl-6">
                <p className="text-xs text-[#666666]">{data.participation_details}</p>
                {data.research_presentation_presentation_type && (
                  <p className="text-xs text-[#999999] mt-1">
                    ประเภทการนำเสนอ: {data.research_presentation_presentation_type}
                    {data.research_presentation_count ? ` (${data.research_presentation_count} ครั้ง)` : ''}
                  </p>
                )}
              </div>
            </div>
          </>
        )}

        {data.journal_publication_citations_count && (
          <>
            <div className="h-px bg-[#E0E0E0]" />
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-[#333333] flex items-center gap-2">
                <i className="fa-solid fa-quote-right text-[#0066CC]"></i>
                การอางอิง
              </h4>
              <div className="pl-6">
                <p className="text-xs text-[#999999]">จำนวนครั้ง: {data.journal_publication_citations_count} ครั้ง</p>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="bg-[#F5F5F5] px-4 py-3 border-t border-[#E0E0E0] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#00AA00]" />
          <span className="text-xs text-[#00AA00] font-medium">ยืนยันแลว</span>
        </div>
        <p className="text-xs text-[#999999]">อัพเดท: 10 พ.ค. 2569 16:45</p>
      </div>
    </div>
  );
}

export default WalletVC3;
