import { useState } from 'react';
import { Download, Share2 } from 'lucide-react';
import Button from '../components/ui/Button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/Tabs';
import BottomNav from '../components/BottomNav';
import WalletVC1 from './wallet/WalletVC1';
import WalletVC2 from './wallet/WalletVC2';
import WalletVC3 from './wallet/WalletVC3';

function Wallet() {
  const [activeTab, setActiveTab] = useState('vc1');

  return (
    <div className="min-h-screen bg-[#F5F5F5] pb-20">
      <header className="bg-white border-b border-[#E0E0E0] px-4 py-3 sticky top-0 z-10">
        <div className="max-w-[432px] mx-auto">
          <h1 className="text-lg font-semibold text-[#333333]">
            กระเป๋าเอกสาร / Wallet
          </h1>
        </div>
      </header>

      <div className="max-w-[432px] mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-white border border-[#E0E0E0] mb-6">
            <TabsTrigger
              value="vc1"
              className="data-[state=active]:bg-[#0066CC] data-[state=active]:text-white"
            >
              VC1
            </TabsTrigger>
            <TabsTrigger
              value="vc2"
              className="data-[state=active]:bg-[#0066CC] data-[state=active]:text-white"
            >
              VC2
            </TabsTrigger>
            <TabsTrigger
              value="vc3"
              className="data-[state=active]:bg-[#0066CC] data-[state=active]:text-white"
            >
              VC3
            </TabsTrigger>
          </TabsList>

          <TabsContent value="vc1" className="space-y-4">
            <WalletVC1 />
            <div className="flex gap-3">
              <Button variant="outline" className="flex-1 border-[#0066CC] text-[#0066CC] hover:bg-[#E3F2FD]">
                <Share2 className="w-4 h-4 mr-2" />
                แชร์ / Share
              </Button>
              <Button variant="outline" className="flex-1 border-[#0066CC] text-[#0066CC] hover:bg-[#E3F2FD]">
                <Download className="w-4 h-4 mr-2" />
                ดาวน์โหลด / Download
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="vc2" className="space-y-4">
            <WalletVC2 />
            <div className="flex gap-3">
              <Button variant="outline" className="flex-1 border-[#0066CC] text-[#0066CC] hover:bg-[#E3F2FD]">
                <Share2 className="w-4 h-4 mr-2" />
                แชร์ / Share
              </Button>
              <Button variant="outline" className="flex-1 border-[#0066CC] text-[#0066CC] hover:bg-[#E3F2FD]">
                <Download className="w-4 h-4 mr-2" />
                ดาวน์โหลด / Download
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="vc3" className="space-y-4">
            <WalletVC3 />
            <div className="flex gap-3">
              <Button variant="outline" className="flex-1 border-[#0066CC] text-[#0066CC] hover:bg-[#E3F2FD]">
                <Share2 className="w-4 h-4 mr-2" />
                แชร์ / Share
              </Button>
              <Button variant="outline" className="flex-1 border-[#0066CC] text-[#0066CC] hover:bg-[#E3F2FD]">
                <Download className="w-4 h-4 mr-2" />
                ดาวน์โหลด / Download
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <BottomNav />
    </div>
  );
}

export default Wallet;
