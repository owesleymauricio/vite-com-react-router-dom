import { Outlet, useParams } from "react-router-dom"

export const Post = () => {
  const params = useParams();
  console.log("params" , params)

  const { id } = params

  return (
    <div>
      <h1>
        Post { id }
      </h1>
      <Outlet />
    </div>
  )
}