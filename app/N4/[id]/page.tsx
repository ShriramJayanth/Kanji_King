// app/N4/[id]/page.tsx
import { notFound } from 'next/navigation';

interface Compound {
  word: string;
  reading: string;
  meaning: string;
}

interface KanjiDetail {
  character: string;
  meaning: string;
  strokes: number;
  jlptLevel: string;
  lesson: number;
  kunYomi: string;
  onYomi: string;
  compounds: Compound[];
}

const kanjiData: KanjiDetail[] = [
  {
    character: "住",
    meaning: "live",
    strokes: 7,
    jlptLevel: "N4",
    lesson: 1,
    kunYomi: "すむ",
    onYomi: "ジュウ",
    compounds: [
      { word: "住む", reading: "すむ", meaning: "to live" },
      { word: "住民", reading: "じゅうみん", meaning: "inhabitants" },
      { word: "住宅", reading: "じゅうたく", meaning: "residence" },
      { word: "住所 ", reading: "じゅうしょ", meaning: "address"}
    ]
  }
  // Add more kanji data here
];

// This function generates static paths for each kanji character
export async function generateStaticParams() {
  return kanjiData.map((kanji) => ({
    id: kanji.character,
  }));
}

const KanjiDetailPage = ({ params }: { params: { id: string } }) => {
  const kanji = kanjiData[0];

//   if (!kanji) {
//     notFound();
//   }

  return (
    <div className="min-h-[100vh] bg-customWhite flex flex-col items-center p-8">
      {/* Header */}
      <div className="w-full max-w-3xl text-customWhite text-5xl font-bold bg-customBlue p-4 rounded-lg shadow-lg mb-6 text-center">
        Kanji Detail
      </div>

      {/* Content */}
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6 flex flex-col gap-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-customBlue mb-2">{kanji.character}</h1>
          <p className="text-2xl text-gray-700">{kanji.meaning}</p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-lg">
          <div>
            <span className="font-semibold">Strokes:</span> {kanji.strokes}
          </div>
          <div>
            <span className="font-semibold">JLPT Level:</span> {kanji.jlptLevel}
          </div>
          <div>
            <span className="font-semibold">Lesson:</span> {kanji.lesson}
          </div>
          <div>
            <span className="font-semibold">Kun Yomi:</span> {kanji.kunYomi}
          </div>
          <div>
            <span className="font-semibold">On Yomi:</span> {kanji.onYomi}
          </div>
        </div>
        
        {/* Compounds Section */}
        <div className="mt-6">
          <h2 className="text-3xl font-semibold text-customBlue mb-4">Compounds</h2>
          <ul className="list-disc pl-5 space-y-2">
            {kanji.compounds.map((compound, index) => (
              <li key={index} className="text-lg">
                <span className="font-semibold">{compound.word}</span> ({compound.reading}): {compound.meaning}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default KanjiDetailPage;
