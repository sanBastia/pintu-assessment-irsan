import SearchInput from "@/components/searchInput";

export default function Home() {
  return (
    <>
    <header className="w-full">
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center px-10 2xl:px-36 py-6">
              <div className='flex item-centers'>
                <h1 className="font-bold font-sans text-2xl">
                Harga Crypto dalam Rupiah hari ini
                </h1>
            </div>
            <div className='flex-end items-center'>
            <SearchInput />
        </div>
            </nav>
      </header>
   
 </>
  );
}
