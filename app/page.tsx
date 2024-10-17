import Link from 'next/link';

export default function Home() {
  return (
    <div className="h-[100vh] bg-customWhite flex flex-col items-center justify-center">

      <div className="h-[20%] w-[100%] flex items-center justify-center text-6xl text-customWhite bg-customBlue shadow-lg">
        Kanji King
      </div>

      
      <div className="h-[80%] w-[100%] flex flex-col items-center justify-center gap-12 text-customWhite text-3xl">
      
        <Link href="/N5" className='h-[10%] w-[25%] bg-customBlue flex flex-col items-center justify-center rounded-lg cursor-pointer transition transform hover:scale-105 hover:shadow-2xl hover:bg-opacity-90'>
            N5 Kanji
        </Link>

        
          <Link href="/N4" className="h-[10%] w-[25%] bg-customBlue flex flex-col items-center justify-center rounded-lg cursor-pointer transition transform hover:scale-105 hover:shadow-2xl hover:bg-opacity-90">
            N4 Kanji
          </Link>

      </div>
    </div>
  );
}
