import PageHeader from "@/components/PageHeader";
import CategoryBadges from "@/components/CategoryBadges";
import Tables from "@/components/Tables";


export default async function Home() {

  return (
          <main>
                <PageHeader />
                        <CategoryBadges /> 
                        <Tables />
              </main>

  );
}
