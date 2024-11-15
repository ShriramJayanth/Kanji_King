"use client";
// app/N4/[id]/page.tsx
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";

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

const kanjiData: { [key: string]: KanjiDetail } = {
  住: {
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
      { word: "住所", reading: "じゅうしょ", meaning: "address" },
    ],
  },
  所: {
    character: "所",
    meaning: "place; location",
    strokes: 8,
    jlptLevel: "N4",
    lesson: 1,
    kunYomi: "ところ",
    onYomi: "ショ",
    compounds: [
      { word: "場所", reading: "ばしょ", meaning: "place" },
      {
        word: "所在地",
        reading: "しょざいち",
        meaning: "location; place of residence",
      },
      {
        word: "事務所",
        reading: "じむしょ",
        meaning: "office; business office",
      },
      { word: "所", reading: "ところ", meaning: "place; spot" },
    ],
  },
  京: {
    character: "京",
    meaning: "capital",
    strokes: 8,
    jlptLevel: "N4",
    lesson: 1,
    kunYomi: "-",
    onYomi: "キョウ",
    compounds: [{ word: "京都", reading: "きょうと", meaning: "kyōto" }],
  },
  都: {
    character: "都",
    meaning: "metropolis; capital; city",
    strokes: 11,
    jlptLevel: "N4",
    lesson: 1,
    kunYomi: "みやこ",
    onYomi: "ト, ツ",
    compounds: [
      { word: "東京都", reading: "とうきょうと", meaning: "Tokyo Metropolis" },
      { word: "都会", reading: "とかい", meaning: "city; urban area" },
      { word: "首都", reading: "しゅと", meaning: "capital city" },
      { word: "都", reading: "みやこ", meaning: "capital; metropolis" },
      {
        word: "都合がいい",
        reading: "つごうがいい",
        meaning: "convenient; suitable",
      },
    ],
  },
  府: {
    character: "府",
    meaning: "prefecture; government office",
    strokes: 8,
    jlptLevel: "N4",
    lesson: 1,
    kunYomi: "ふ",
    onYomi: "フ",
    compounds: [
      { word: "大阪府", reading: "おおさかふ", meaning: "Osaka Prefecture" },
      { word: "京都府", reading: "きょうとふ", meaning: "Kyoto Prefecture" },
      { word: "府", reading: "ふ", meaning: "prefecture; government office" },
      { word: "政府", reading: "せいふ", meaning: "government" },
    ],
  },
  県:{
    character: "県",
    meaning: "prefecture",
    strokes: 9,
    jlptLevel: "N4",
    lesson: 1,
    kunYomi: "けん",
    onYomi: "ケン",
    compounds: [
      { word: "東京都", reading: "とうきょうと", meaning: "Tokyo Metropolis" },
      { word: "北海道", reading: "ほっかいどう", meaning: "Hokkaido" },
      { word: "神奈川県", reading: "かながわけん", meaning: "Kanagawa Prefecture" },
      { word: "県", reading: "けん", meaning: "prefecture" }
    ]
  },
  市:{
    character: "市",
    meaning: "city; market",
    strokes: 5,
    jlptLevel: "N4",
    lesson: 1,
    kunYomi: "いち",
    onYomi: "シ",
    compounds: [
      { word: "大阪市", reading: "おおさかし", meaning: "Osaka City" },
      { word: "東京都市", reading: "とうきょうし", meaning: "Tokyo Metropolitan Area" },
      { word: "市", reading: "いち", meaning: "market; city" },
      { word: "市長", reading: "しちょう", meaning: "mayor" }
    ]
  },
  区:{
    character: "区",
    meaning: "ward; district",
    strokes: 5,
    jlptLevel: "N4",
    lesson: 1,
    kunYomi: "く",
    onYomi: "ク",
    compounds: [
      { word: "港区", reading: "みなとく", meaning: "Minato Ward (Tokyo)" },
      { word: "新宿区", reading: "しんじゅくく", meaning: "Shinjuku Ward (Tokyo)" },
      { word: "区", reading: "く", meaning: "ward; district" },
      { word: "区役所", reading: "くやくしょ", meaning: "ward office" }
    ]
  },
  町:{
    character: "町",
    meaning: "town; neighborhood",
    strokes: 6,
    jlptLevel: "N4",
    lesson: 1,
    kunYomi: "まち",
    onYomi: "チョウ, トウ",
    compounds: [
      { word: "町田市", reading: "まちだし", meaning: "Machida City" },
      { word: "下町", reading: "したまち", meaning: "downtown; old town" },
      { word: "町", reading: "まち", meaning: "town; neighborhood" },
      { word: "商店町", reading: "しょうてんまち", meaning: "shopping street" },
      { word: "町長", reading: "ちょうちょう", meaning: "town mayor" }
    ]
  },
  村:{
    character: "村",
    meaning: "village",
    strokes: 7,
    jlptLevel: "N4",
    lesson: 1,
    kunYomi: "むら",
    onYomi: "ソン",
    compounds: [
      { word: "村", reading: "むら", meaning: "village" },
      { word: "村長", reading: "そんちょう", meaning: "village chief; village mayor" },
      { word: "村人", reading: "むらびと", meaning: "villager" },
      { word: "農村", reading: "のうそん", meaning: "rural village" }
    ]
  }  
};

const KanjiDetailPage = () => {
  const parms = useParams();
  const id = parms.id as string;
  const kanjichar = decodeURIComponent(id);
  const kanji = kanjiData[kanjichar];
  if (!kanji) {
    notFound();
  }

  return (
    <div className="min-h-[100vh] bg-customWhite flex flex-col items-center p-12">
      {/* Header */}
      <div className="w-full max-w-5xl text-customWhite text-6xl font-bold bg-customBlue p-6 rounded-lg shadow-lg mb-8 text-center">
        Kanji Detail
      </div>

      {/* Content */}
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg p-10 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:w-1/2">
            <h1 className="text-7xl font-bold text-customBlue mb-4">
              {kanji.character}
            </h1>
            <p className="text-3xl text-gray-700 mb-4">{kanji.meaning}</p>
            <div className="grid grid-cols-2 gap-6 text-xl mt-6">
              <div>
                <span className="font-semibold">Strokes:</span> {kanji.strokes}
              </div>
              <div>
                <span className="font-semibold">JLPT Level:</span>{" "}
                {kanji.jlptLevel}
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
          </div>

          {/* Stroke Order GIF */}
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <img
              src={`/assets/${id}.gif`}
              alt="Kanji Stroke Order"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
        </div>

        {/* Compounds Section */}
        <div className="mt-8">
          <h2 className="text-4xl font-semibold text-customBlue mb-6">
            Compounds
          </h2>
          <ul className="list-disc pl-7 space-y-4 text-lg">
            {kanji.compounds.map((compound, index) => (
              <li key={index} className="text-xl">
                <span className="font-semibold text-3xl">{compound.word}</span>{" "}
                ({compound.reading}): {compound.meaning}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default KanjiDetailPage;
