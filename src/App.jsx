import React from "react"
import RootLayout from "./components/layouts/RootLayout"
import Counter from "./components/pages/Counter"
import Home from "./components/pages/Home"

function App(){
  console.log("process.env.PORT:", process.env.PORT)
  return(
    <>
    <RootLayout>
      <div>
        <Home/>
      </div>
    </RootLayout>
    </>
  )
}

export default App