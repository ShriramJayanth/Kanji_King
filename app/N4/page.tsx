import KanjiBlock from "@/components/KanjiBlock";

const N4: React.FC = () => {
  const kanjiList1: string[] = ['住', '所', '京', '都', '府', '県', '市', '区', '町', '村'];
  const kanjiList2: string[] = ['明', '暗', '遠', '近', '強', '弱', '重', '軽', '太', '細'];
  const kanjiList3: string[] = ['特', '別', '有', '便', '利', '不', '切', '元', '好', '急'];
  const kanjiList4: string[] = ['低', '広', '短', '良', '悪', '正', '変', '赤', '青', '黒'];
  const kanjiList5: string[] = ['映', '画', '音', '楽', '歌', '写', '真', '旅', '世', '界'];
  const kanjiList6: string[] = ['仕', '事', '銀', '員', '医', '者', '働', '屋', '産', '業'];
  const kanjiList7: string[] = ["林", "森", "地", "池", "海","洋", "雪", "光", "台", "風"];
  const kanjiList8: string[] = ["季", "節", "春", "夏", "秋","冬", "暑", "寒", "暖", "涼"];
  const kanjiList9: string[] = ["体", "頭", "顔", "首", "心","声", "病", "薬", "科", "内"];
  const kanjiList10: string[] = ["朝", "昼", "夜", "夕", "方","晩", "計", "曜", "以", "度"];
  

  return (
    <div className="h-[100vh] bg-customWhite flex flex-col items-center">
      {/* Header */}
      <div className="h-[10%] w-[100%] flex items-center justify-center text-6xl text-customWhite bg-customBlue shadow-lg">
        N4 Kanji
      </div>

      {/* Content area with scroll */}
      <div className="h-[90%] w-[100%] p-4 flex flex-col items-center gap-8 overflow-y-auto">
        <KanjiBlock kanjiList={kanjiList1} lessonNumber={1} lesson="N4"/>
        <KanjiBlock kanjiList={kanjiList2} lessonNumber={2} lesson="N4"/>
        <KanjiBlock kanjiList={kanjiList3} lessonNumber={3} lesson="N4"/>
        <KanjiBlock kanjiList={kanjiList4} lessonNumber={4} lesson="N4"/>
        <KanjiBlock kanjiList={kanjiList5} lessonNumber={5} lesson="N4"/>
        <KanjiBlock kanjiList={kanjiList6} lessonNumber={6} lesson="N4"/>
        <KanjiBlock kanjiList={kanjiList7} lessonNumber={7} lesson="N4"/>
        <KanjiBlock kanjiList={kanjiList8} lessonNumber={8} lesson="N4"/>
        <KanjiBlock kanjiList={kanjiList9} lessonNumber={9} lesson="N4"/>
        <KanjiBlock kanjiList={kanjiList10} lessonNumber={10} lesson="N4"/>
      </div>
    </div>
  );
};

export default N4;
