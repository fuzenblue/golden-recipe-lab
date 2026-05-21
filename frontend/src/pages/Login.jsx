import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { login } from '../store/slices/authSlice';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Label from '../components/ui/Label';
import logoSrc from '../logo.png';

function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.auth);
  const [email, setEmail] = useState('demo@grl.ac.th');
  const [password, setPassword] = useState('etda@2026');
  const [showPassword, setShowPassword] = useState(false);
  const [acceptedTos, setAcceptedTos] = useState(false);
  const [showTosModal, setShowTosModal] = useState(false);
  const [acceptedPdpa, setAcceptedPdpa] = useState(false);
  const [showPdpaModal, setShowPdpaModal] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('กรุณากรอกอีเมลและรหัสผ่าน');
      return;
    }

    const result = await dispatch(login({ email, password }));
    if (login.fulfilled.match(result)) {
      const hasPin = localStorage.getItem('hasPin');
      navigate(hasPin ? '/pin-verify' : '/pin-setup');
    } else {
      setError('อีเมลหรือรหัสผ่านไม่ถูกต้อง');
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-[432px] space-y-6">
        <div className="text-center space-y-2">
          <div className="w-20 h-20 mx-auto">
            <img src={logoSrc} alt="GRL Logo" className="w-full h-full object-contain rounded-xl" />
          </div>
          <h1 className="text-xl font-bold text-[#333333]">Acard Academic</h1>
          <p className="text-sm text-[#999999]">present by golden recipe lab</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-[#E0E0E0] p-6 space-y-4">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#333333] flex items-center gap-2">
                <Mail className="w-4 h-4" />
                อีเมล
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="demo@grl.ac.th"
                className="w-full bg-[#F5F5F5] border-[#E0E0E0] focus:border-[#0066CC] focus:ring-[#0066CC]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-[#333333] flex items-center gap-2">
                <Lock className="w-4 h-4" />
                รหัสผ่าน
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="********"
                  className="w-full bg-[#F5F5F5] border-[#E0E0E0] focus:border-[#0066CC] focus:ring-[#0066CC] pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#999999] hover:text-[#333333]"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={acceptedTos}
                  onChange={(e) => setAcceptedTos(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded border-[#E0E0E0] text-[#0066CC] focus:ring-[#0066CC]"
                />
                <span className="text-xs text-[#666666] leading-relaxed">
                  ข้าพเจ้าได้อ่านและยอมรับ{' '}
                  <button type="button" onClick={() => setShowTosModal(true)} className="text-[#0066CC] hover:underline inline">
                    ข้อตกลงและเงื่อนไขการให้บริการ (ToS)
                  </button>
                </span>
              </label>

              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={acceptedPdpa}
                  onChange={(e) => setAcceptedPdpa(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded border-[#E0E0E0] text-[#0066CC] focus:ring-[#0066CC]"
                />
                <span className="text-xs text-[#666666] leading-relaxed">
                  ข้าพเจ้าได้อ่านและยินยอม{' '}
                  <button type="button" onClick={() => setShowPdpaModal(true)} className="text-[#0066CC] hover:underline inline">
                    PDPA Consent
                  </button>
                </span>
              </label>
            </div>

            {error && (
              <div className="bg-[#CC0000]/10 border border-[#CC0000] text-[#CC0000] px-4 py-2 rounded text-sm">
                {error}
              </div>
            )}

            <Button
              type="submit"
              disabled={isLoading || !acceptedTos || !acceptedPdpa}
              className="w-full bg-[#0066CC] hover:bg-[#0052A3] text-white font-semibold disabled:bg-[#E0E0E0] disabled:text-[#999999]"
            >
              {isLoading ? 'กำลังเข้า...' : 'เข้าสู่ระบบ'}
            </Button>
          </form>

          <div className="text-center space-y-1 text-sm">
            <button className="text-[#0066CC] hover:underline block w-full">
              ลืมรหัสผ่าน?
            </button>
            <p className="text-[#999999] text-xs mt-4">
              ทดลองใช้: demo@grl.ac.th / etda@2026
            </p>
          </div>
        </div>
      </div>

      {showTosModal && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center"
          onClick={() => setShowTosModal(false)}
        >
          <div
            className="bg-white rounded-t-xl sm:rounded-xl w-full max-w-[432px] max-h-[80vh] flex flex-col shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#E0E0E0] sticky top-0 bg-white rounded-t-xl">
              <h2 className="text-base font-semibold text-[#333333]">ข้อตกลงและเงื่อนไขการให้บริการ</h2>
              <button onClick={() => setShowTosModal(false)} className="p-1 hover:bg-[#F5F5F5] rounded-full">
                <i className="fa-solid fa-xmark text-[#999999] text-xl"></i>
              </button>
            </div>

            <div className="overflow-y-auto p-4 space-y-4 flex-1">
              <div className="text-xs text-[#999999]">วันที่มีผลบังคับใช้: 20 พฤษภาคม 2569</div>

              <div className="bg-[#E3F2FD] border border-[#0066CC]/20 rounded-lg p-3 text-xs text-[#333333] leading-relaxed">
                ยินดีต้อนรับสู่ ACARD WALLET (ซึ่งต่อไปนี้จะเรียกว่า "แอปพลิเคชัน") จัดทำขึ้นเพื่อให้บริการกระเป๋าเงินอิเล็กทรอนิกส์สำหรับจัดเก็บ พิสูจน์ตัวตน และบริหารจัดการสิทธิ์รวมถึงผลงานทางวิชาการดิจิทัล (Verifiable Credentials)
                <br /><br />
                กรุณาอ่านข้อตกลงและเงื่อนไขการให้บริการฉบับนี้ (ซึ่งต่อไปนี้จะเรียกว่า "ข้อตกลง") อย่างละเอียดถี่ถ้วน การที่ผู้ใช้บริการทำการลงทะเบียน เข้าสู่ระบบ หรือใช้งานแอปพลิเคชัน ไม่ว่าส่วนใดส่วนหนึ่ง ให้ถือว่าผู้ใช้บริการได้อ่าน เข้าใจ ยอมรับ และผูกพันตามเงื่อนไขของข้อตกลงนี้ทุกประการโดยไม่มีเงื่อนไข หากท่านไม่ยอมรับเงื่อนไขนี้ โปรดปฏิเสธการเข้าใช้งานและลบแอปพลิเคชันออกจากอุปกรณ์ของท่านทันที
                <br /><br />
                <strong>หมายเหตุ:</strong> การให้ความยินยอมเกี่ยวกับข้อมูลส่วนบุคคล (PDPA Consent) เป็นเอกสารแยกต่างหากจากข้อตกลงฉบับนี้ ผู้ใช้บริการจะได้รับแบบฟอร์มความยินยอมแยกต่างหากในขั้นตอนลงทะเบียน
              </div>

              <div className="bg-white rounded-lg border border-[#E0E0E0] p-3 space-y-3">
                <h3 className="text-xs font-bold text-[#0066CC]">ข้อ 1. คํานิยามและกลไกทางเทคโนโลยี</h3>
                <div className="text-xs text-[#333333] space-y-2">
                  <p><span className="font-semibold">ผู้ใช้บริการ (Holder)</span> หมายถึง อาจารย์ พนักงานมหาวิทยาลัย ข้าราชการ หรือบุคลากรสายวิชาการที่ลงทะเบียนเข้าใช้งานแอปพลิเคชันเพื่อบริหารจัดการสิทธิ์ของตน</p>
                  <p><span className="font-semibold">ผู้ออกเอกสารรับรอง (Issuer)</span> หมายถึง หน่วยงาน องค์กร หรือบุคคลที่มีอํานาจหน้าที่ตามกฎหมายหรือตามข้อบังคับสถาบันในการออกเอกสารสิทธิ์ดิจิทัล เช่น กรมการปกครอง, กองบริหารงานบุคคล (HR), สํานักทะเบียนกลาง, คณะกรรมการจริยธรรมการวิจัย (IRB), สํานักพิมพ์วารสารวิชาการ และผู้ร่วมวิจัย (Co-authors)</p>
                  <p><span className="font-semibold">ผู้ตรวจสอบสิทธิ์ (Verifier)</span> หมายถึง คณะกรรมการประจําคณะ, คณะกรรมการพิจารณาตําแหน่งทางวิชาการ (ก.พ.ว.), สภามหาวิทยาลัย หรือผู้ทรงคุณวุฒิภายนอก (Readers)</p>
                  <p><span className="font-semibold">เอกสารสิทธิ์ดิจิทัล (Verifiable Credentials — VC)</span> หมายถึง ข้อมูลหรือชุดเอกสารในรูปแบบดิจิทัลที่ลงลายมือชื่ออิเล็กทรอนิกส์เข้ารหัส (Cryptographic Signature) โดย Issuer เพื่อการันตีความแท้จริงของข้อมูล และจัดเก็บไว้ในแอปพลิเคชันของผู้ใช้บริการ</p>
                  <p><span className="font-semibold">แฟ้มนำเสนอผลงานดิจิทัล (Verifiable Presentation — VP)</span> หมายถึง ชุดข้อมูลที่เกิดจากการมัดรวมเอกสารสิทธิ์ดิจิทัล (VC) หลายใบเข้าด้วยกันตามคําสั่งของผู้ใช้บริการ เพื่อนําส่งให้ Verifier ทําการตรวจสอบ</p>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-[#E0E0E0] p-3 space-y-2">
                <h3 className="text-xs font-bold text-[#0066CC]">ข้อ 2. การพิสูจน์ตัวตน ความปลอดภัย และการถือครองสิทธิ์</h3>
                <p className="text-xs text-[#333333]"><span className="font-semibold">2.1</span> ผู้ใช้บริการต้องผูกบัญชีผ่านระบบยืนยันตัวตนกลางและต้องตั้ง PIN ร่วมกับ Biometrics เพื่อปลดล็อค Private Key ผู้ใช้บริการมีหน้าที่รักษาความลับของรหัสผ่านและPIN</p>
                <p className="text-xs text-[#333333]"><span className="font-semibold">2.2</span> ACARD WALLET ทําหน้าที่เป็นเพียงกระเป๋าจัดเก็บดิจิทัล ระบบจะไม่เก็บ Log ข้อมูลส่วนบุคคล Metadata ของธุรกรรม หรือเนื้อหาเอกสารสิทธิ์ดิจิทัลใดๆ ไว้บนเซิร์ฟเวอร์ส่วนกลาง ระบบหลังบ้านไม่มีสิทธิ์เข้าถึง ดึงข้อมูล หรือส่งต่อข้อมูลใดๆ โดยพลการ</p>
              </div>

              <div className="bg-white rounded-lg border border-[#E0E0E0] p-3 space-y-2">
                <h3 className="text-xs font-bold text-[#0066CC]">ข้อ 3. ข้อมูลร่วมและการดึงข้อมูลอัตโนมัติ</h3>
                <p className="text-xs text-[#333333]"><span className="font-semibold">3.1</span> ระบบจะทําหน้าที่ดึงข้อมูลร่วม (เช่น ชื่อ-นามสกุลไทย-อังกฤษ, วันดํารงตําแหน่ง, รหัสรายวิชา, ชื่อบทความวิจัย และเลข DOI/ISBN) จากหน่วยงานต้นสังกัดและสถาบันตรวจสอบระดับสากลโดยตรง ข้อมูลเหล่านี้จะถูกล็อกและเชื่อมโยงข้ามเอกสารแบบ Word-by-word โดยอัตโนมัติ</p>
                <p className="text-xs text-[#333333]"><span className="font-semibold">3.2</span> เนื่องจากข้อมูลในตั๋วดิจิทัลถูกออกโดย Issuer แต่ละหน่วยงานโดยตรง แอปพลิเคชันจะจำกัดความรับผิดชอบสำหรับความคลาดเคลื่อน ความล่าช้า หรือความผิดพลาดของข้อมูลดิบที่ส่งมาจากฐานข้อมูลต้นทาง หากพบว่าข้อมูลไม่ถูกต้อง ผู้ใช้บริการต้องแจ้งแก้ไขไปยัง Issuer ต้นสังกัดโดยตรง</p>
              </div>

              <div className="bg-white rounded-lg border border-[#E0E0E0] p-3 space-y-2">
                <h3 className="text-xs font-bold text-[#0066CC]">ข้อ 4. ผลผูกพันทางกฎหมายและจริยธรรมวิชาการ</h3>
                <p className="text-xs text-[#333333]"><span className="font-semibold">4.1</span> การกดอนุมัติ ส่งคําร้อง หรือรับรองสัดส่วนผลงานผ่านแอปพลิเคชันโดยใช้ Private Key และ PIN ถือเป็นการลงลายมือชื่ออิเล็กทรอนิกส์ที่มีผลผูกพันทางกฎหมายตาม พ.ร.บ. ธุรกรรมทางอิเล็กทรอนิกส์ พ.ศ. 2544 (และที่แก้ไขเพิ่มเติม) เสมือนการลงลายเซ็นสดบนเอกสารกระดาษทุกประการ</p>
                <p className="text-xs text-[#333333]"><span className="font-semibold">4.2</span> การที่ผู้ใช้บริการกดยื่นคําขอและสลักหลังรับรองตนเองในระบบ ให้ถือว่าผู้ใช้บริการได้ให้การรับรองว่าผลงานทุกชิ้นเป็นไปตามเกณฑ์จริยธรรม 5 ประการของ ก.พ.อ. ปราศจากการคัดลอกผลงาน (Plagiarism) หรือการบิดเบือนผลวิจัย หากตรวจพบการทุจริตทางวิชาการ ผู้ใช้บริการต้องรับผิดชอบทางแพ่งและทางวินัยตามกฎหมาย โดยผู้พัฒนาแอปพลิเคชันไม่มีส่วนรับผิดชอบ</p>
                <p className="text-xs text-[#CC0000]">หมายเหตุทางกฎหมาย: ความรับผิดทางอาญาเป็นเรื่องระหว่างบุคคลกับรัฐ ไม่สามารถกําหนดหรือโอนผ่านสัญญาเอกชนได้ตามประมวลกฎหมายอาญา มาตรา 59 ข้อตกลงนี้จึงไม่ครอบคลุมและไม่มีผลต่อความรับผิดทางอาญาของผู้ใช้บริการแต่อย่างใด</p>
              </div>

              <div className="bg-white rounded-lg border border-[#E0E0E0] p-3 space-y-2">
                <h3 className="text-xs font-bold text-[#0066CC]">ข้อ 5. ระบบตรวจสอบอัจฉริยะและการปฏิเสธความรับผิดชอบผลการพิจารณา</h3>
                <p className="text-xs text-[#333333]"><span className="font-semibold">5.1</span> ระบบใช้ชุดคําสั่งอัตโนมัติในการตรวจจับคุณสมบัติเบื้องต้น เช่น คํานวณระยะเวลาครองตําแหน่งสะสม หรือตรวจนับเปอร์เซ็นต์สัดส่วนทีมวิจัยให้ครบ 100% เพื่อแสดงสถานะไฟเขียว (Verified Pass)</p>
                <p className="text-xs text-[#333333]"><span className="font-semibold">5.2</span> Verified Pass ไม่ได้การันตีว่าผู้ใช้บริการจะได้รับอนุมัติตําแหน่ง ผลการตัดสินขึ้นอยู่กับดุลยพินิจของผู้ทรงคุณวุฒิภายนอก (Readers) และมติของสภามหาวิทยาลัย</p>
              </div>

              <div className="bg-white rounded-lg border border-[#E0E0E0] p-3 space-y-2">
                <h3 className="text-xs font-bold text-[#0066CC]">ข้อ 6. การคุ้มครองข้อมูลส่วนบุคคล</h3>
                <p className="text-xs text-[#333333]">แอปพลิเคชันให้ความสําคัญขั้นสูงสุดกับการคุ้มครองข้อมูลส่วนบุคคลตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA) โดยมีหลักการดังต่อไปนี้</p>
                <p className="text-xs text-[#333333]">• การขอความยินยอม (Consent) ในการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคล จะดําเนินการผ่านแบบฟอร์มความยินยอมแยกต่างหาก (Consent Form) ตามมาตรา 19 แห่ง PDPA</p>
                <p className="text-xs text-[#333333]">• ผู้ใช้บริการมีสิทธิ์เพิกถอนความยินยอมได้ตลอดเวลา โดยการเพิกถอนจะไม่กระทบต่อความชอบด้วยกฎหมายของการประมวลผลที่ได้กระทําไปแล้ว</p>
                <p className="text-xs text-[#333333]">• ข้อมูลประวัติ พฤติกรรมการใช้งาน และไฟล์ผลงานทางวิชาการทั้งหมดจะถูกประมวลผลเพื่อวัตถุประสงค์ในการยื่นขอตําแหน่งวิชาการเท่านั้น</p>
                <p className="text-xs text-[#333333]">• ระบบจะไม่นําข้อมูลส่วนบุคคลของผู้ใช้บริการไปประมวลผลเพื่อแสวงหาผลประโยชน์ทางการค้า หรือเปิดเผยแก่บุคคลที่สามโดยไม่ได้รับอนุญาต</p>
              </div>

              <div className="bg-white rounded-lg border border-[#E0E0E0] p-3 space-y-2">
                <h3 className="text-xs font-bold text-[#0066CC]">ข้อ 7. การระงับการให้บริการและการแก้ไขเพิ่มเติมข้อตกลง</h3>
                <p className="text-xs text-[#333333]"><span className="font-semibold">7.1</span> แอปพลิเคชันขอสงวนสิทธิ์ในการระงับการเข้าถึงระบบหากพบการพยายามเจาะระบบ ปลอมแปลงใบรับรอง หรือแอบอ้างใช้กุญแจเข้ารหัสลับ ซึ่งเป็นความผิดตาม พ.ร.บ. ว่าด้วยการกระทําความผิดเกี่ยวกับคอมพิวเตอร์ พ.ศ. 2550 (และที่แก้ไขเพิ่มเติม)</p>
                <p className="text-xs text-[#333333]"><span className="font-semibold">7.2</span> การแก้ไขข้อตกลงจะมีผลต่อเมื่อผู้ใช้บริการได้รับแจ้งและแสดงการยอมรับอย่างชัดแจ้งผ่านระบบแอปพลิเคชันเท่านั้น</p>
                <p className="text-xs text-[#CC0000]">หมายเหตุทางกฎหมาย: ลบข้อความ "การใช้งานระบบต่อไปหลังจากการประกาศเปลี่ยนแปลง ถือว่าผู้ใช้บริการยอมรับเงื่อนไขใหม่โดยปริยาย" ออกทั้งหมด เนื่องจากขัดต่อ ป.พ.พ. มาตรา 366 และ พ.ร.บ. ว่าด้วยข้อสัญญาที่ไม่เป็นธรรม พ.ศ. 2540 มาตรา 4</p>
              </div>

              <div className="bg-white rounded-lg border border-[#E0E0E0] p-3">
                <h3 className="text-xs font-bold text-[#0066CC] mb-1">ข้อ 8. กฎหมายที่ใช้บังคับ</h3>
                <p className="text-xs text-[#333333]">ข้อตกลงและเงื่อนไขการให้บริการฉบับนี้ รวมถึงการตีความและการระงับข้อพิพาทใดๆ ที่เกิดขึ้นจากการใช้งานแอปพลิเคชัน ACARD WALLET ให้เป็นไปตามและตีความตามกฎหมายของราชอาณาจักรไทยเท่านั้น โดยตัดสิทธิ์กฎหมายขัดกัน</p>
              </div>
            </div>

            <div className="px-4 py-3 border-t border-[#E0E0E0] sticky bottom-0 bg-white rounded-b-xl">
              <button
                onClick={() => {
                  setAcceptedTos(true);
                  setShowTosModal(false);
                }}
                className="w-full py-2.5 bg-[#0066CC] text-white rounded-lg font-semibold text-sm hover:bg-[#0052A3] transition-colors"
              >
                ยอมรับข้อตกลง
              </button>
            </div>
          </div>
        </div>
      )}

      {showPdpaModal && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center"
          onClick={() => setShowPdpaModal(false)}
        >
          <div
            className="bg-white rounded-t-xl sm:rounded-xl w-full max-w-[432px] max-h-[80vh] flex flex-col shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#E0E0E0] sticky top-0 bg-white rounded-t-xl">
              <h2 className="text-base font-semibold text-[#333333]">PDPA Consent</h2>
              <button onClick={() => setShowPdpaModal(false)} className="p-1 hover:bg-[#F5F5F5] rounded-full">
                <i className="fa-solid fa-xmark text-[#999999] text-xl"></i>
              </button>
            </div>

            <div className="overflow-y-auto p-4 space-y-4 flex-1">
              <div className="bg-[#E3F2FD] border border-[#0066CC]/20 rounded-lg p-3 text-xs text-[#333333] leading-relaxed">
                แอปพลิเคชันให้ความสำคัญขั้นสูงสุดกับการคุ้มครองข้อมูลส่วนบุคคลตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA) โดยมีหลักการดังต่อไปนี้
              </div>

              <div className="bg-white rounded-lg border border-[#E0E0E0] p-3 space-y-2">
                <h3 className="text-xs font-bold text-[#0066CC]">การขอความยินยอม (Consent)</h3>
                <p className="text-xs text-[#333333]">การเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคล จะดำเนินการผ่านแบบฟอร์มความยินยอมแยกต่างหาก (Consent Form) ซึ่งผู้ใช้บริการจะได้รับในขั้นตอนลงทะเบียน ตามมาตรา 19 แห่ง PDPA</p>
              </div>

              <div className="bg-white rounded-lg border border-[#E0E0E0] p-3 space-y-2">
                <h3 className="text-xs font-bold text-[#0066CC]">สิทธิ์ในการเพิกถอน</h3>
                <p className="text-xs text-[#333333]">ผู้ใช้บริการมีสิทธิ์เพิกถอนความยินยอมได้ตลอดเวลา โดยการเพิกถอนจะไม่กระทบต่อความชอบด้วยกฎหมายของการประมวลผลที่ได้กระทำไปแล้วก่อนการเพิกถอน</p>
              </div>

              <div className="bg-white rounded-lg border border-[#E0E0E0] p-3 space-y-2">
                <h3 className="text-xs font-bold text-[#0066CC]">วัตถุประสงค์ของการประมวลผล</h3>
                <p className="text-xs text-[#333333]">ข้อมูลประวัติ พฤติกรรมการใช้งาน และไฟล์ผลงานทางวิชาการทั้งหมดจะถูกประมวลผลเพื่อวัตถุประสงค์ในการยื่นขอตำแหน่งวิชาการเท่านั้น</p>
              </div>

              <div className="bg-white rounded-lg border border-[#E0E0E0] p-3 space-y-2">
                <h3 className="text-xs font-bold text-[#0066CC]">การไม่แสวงหาผลประโยชน์</h3>
                <p className="text-xs text-[#333333]">ระบบจะไม่นำข้อมูลส่วนบุคคลของผู้ใช้บริการไปประมวลผลเพื่อแสวงหาผลประโยชน์ทางการค้า หรือเปิดเผยแก่บุคคลที่สามโดยไม่ได้รับอนุญาต</p>
              </div>
            </div>

            <div className="px-4 py-3 border-t border-[#E0E0E0] sticky bottom-0 bg-white rounded-b-xl">
              <button
                onClick={() => {
                  setAcceptedPdpa(true);
                  setShowPdpaModal(false);
                }}
                className="w-full py-2.5 bg-[#0066CC] text-white rounded-lg font-semibold text-sm hover:bg-[#0052A3] transition-colors"
              >
                ยินยอมให้เก็บข้อมูลส่วนบุคคล
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
