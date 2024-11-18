/**
 * v0 by Vercel.
 * @see https://v0.dev/t/qPuokvew3Wu
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input"
import { JSX, SVGProps } from "react"

export default function SearchInput() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <SearchIcon className="h-4 w-4" />
      <Input type="text" placeholder="Enter your text..." />
    </div>
  )
}

function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}