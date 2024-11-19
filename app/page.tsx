import CategoryBadges from "@/components/CategoryBadges";
import SearchInput from "@/components/SearchInput";
import Tables from "@/components/Tables";

export default function Home() {
  return (
          <div>
              <header className="w-full">
                  <nav className="flex justify-between items-center px-10 2xl:px-36 py-6">
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

                  <div className="w-full">

                      <div className="flex justify-around px-10 2xl:px-36">
                        <CategoryBadges />
                       </div>
                  </div>
                  <div>
                   <Tables />
                  </div>
              </div>

  );
}
