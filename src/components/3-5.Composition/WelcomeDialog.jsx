import React from 'react'
import CustomDiallog from './CustomDiallog'
import Dialog from './Dialog'

export default function WelcomeDialog() {
  // return (
  //   <Dialog>
  //     <h1>Welcome</h1>
  //     <h1>Thank you!</h1>
  //   </Dialog>
  // )
  return (
    <CustomDiallog title="Welcome" description="Thank you!" />
  )
}
