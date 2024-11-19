import { useQuery } from "@tanstack/react-query"

export function useGetData() {
  return useQuery({
    queryFn: async () => {
      const res = await fetch(
        "https://api.pintu.co.id/v2/trade/price-changes"
      );
    const data = await res.json();
    return data
    },
    queryKey: ["fetchPintuApiPriceChanges"],
  })
}