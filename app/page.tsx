import CategoryBadges from "@/components/CategoryBadges";
import Tables from "@/components/Tables";


export default async function Home() {

  return (
          <main>
              <header className="w-full">
                  <div className="flex justify-between items-center px-10 2xl:px-36 py-6">
                        <div className='flex item-centers'>
                          <h1 className="font-bold font-sans text-2xl">
                          Harga Crypto dalam Rupiah hari ini
                          </h1>
                      </div>
                      </div>
                </header>
          
                        <CategoryBadges /> 
                        <Tables />
              </main>

  );
}
