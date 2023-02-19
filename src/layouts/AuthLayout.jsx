import { Outlet } from "react-router-dom"

export default function AuthLayout() {
  return (
    <div className="">
        <h2>UpTask</h2>
        <Outlet />
    </div>
  )
}
