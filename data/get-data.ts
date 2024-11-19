import { useQuery } from "@tanstack/react-query"

export function useGetPriceChanges() {
  return useQuery({
    queryFn: async () => {
      const res = (await fetch("/api/price-changes")).json();
    return res
    },
    queryKey: ["fetchPintuApiPriceChanges"],
  })
}
export function useGetSupportedCurrencies() {
  return useQuery({
    queryFn: async () => {
      const res = (await fetch("/api/supported-currencies")).json();
    return res
    },
    queryKey: ["fetchPintuApiSupportedCurrencies"],
  })
}