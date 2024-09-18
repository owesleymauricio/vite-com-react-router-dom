import { useLocation } from "react-router-dom"

export const Home = () => {
  const location = useLocation();
  const { state } = location
  return (
    <div>
      <h1>
        ola mundo
      </h1>
      <p> state vindo do usenavigation: {state}</p>
    </div>
  )
}