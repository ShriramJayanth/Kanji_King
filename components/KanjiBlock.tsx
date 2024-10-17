import Link from 'next/link';
import React from 'react';

interface KanjiBlockProps {
  kanjiList: string[];
  lessonNumber: number;
  lesson:string;
}

const KanjiBlock: React.FC<KanjiBlockProps> = ({ kanjiList, lessonNumber,lesson }) => {
  return (
    <div className="w-[100%] flex flex-col items-center justify-center">
      {/* Kanji Grid */}
      <div className="grid grid-cols-5 gap-8"> {/* Increased gap for more spacing */}
        {kanjiList.map((kanji, index) => (
          <Link
            href={`${lesson}/${kanji}`}
            key={index}
            className="bg-gray-300 text-black text-3xl flex items-center justify-center h-20 w-20 rounded-lg shadow-lg"
          >
            {kanji}
          </Link>
        ))}
      </div>

      {/* Lesson Number */}
      <div className="text-customDarkBlue text-2xl font-bold mt-6"> {/* Adjusted margin for lesson number */}
        Lesson {lessonNumber}
      </div>

      {/* Quiz Buttons */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button className="bg-customBlue text-white px-6 py-3 text-lg rounded-lg shadow-md hover:bg-customDarkBlue">
          漢字 → ひらがな
        </button>
        <button className="bg-customBlue text-white px-6 py-3 text-lg rounded-lg shadow-md hover:bg-customDarkBlue">
          ひらがな → 漢字
        </button>
      </div>
    </div>
  );
};

export default KanjiBlock;
