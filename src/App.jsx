import React from "react"
import Login from "./components/Login"
import LayOut from "./components/LayOut"
import { useSelector } from "react-redux"
function App() {
  const isLoggedIn=useSelector(state=>state.auth.isLoggedIn);
  const cartitems=useSelector(state=>state.cart);
  return (
    <div>
     {!isLoggedIn && <Login/>}
     {isLoggedIn && <LayOut/>}
    </div>
  )
}

export default App
