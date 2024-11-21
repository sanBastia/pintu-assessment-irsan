import React from 'react'

import { AlertCircle } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

const ErrorComponent = ({error} :{error: string}) => {
  return (
    <div className="w-full">
    <div className="flex px-10 2xl:px-36 my-4">
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
      {error}
      </AlertDescription>
    </Alert>
    </div>
</div>
  )
}

export default ErrorComponent

