import './style.css'
import { Link } from 'react-router-dom'

export const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li>
          <Link to="/" state={"my state HOME"}>HOME</Link>
        </li>
        <li>
          <Link to="/about">SOBRE</Link>
        </li>
        <li>
          <Link to="/Post">POST</Link>
        </li>
        <li>
          <Link to="/Post/10">POST 10</Link>
        </li>
        <li>
          <Link to="/redirect">REDIRECT</Link>
        </li>
      </ul>
    </nav>
  )
}