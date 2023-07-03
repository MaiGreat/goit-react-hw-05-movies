import { Link } from "react-router-dom"
import css from './header.module.css'


const Header = () => {
    return (
<nav className={css.header}>
  <Link className={css.text} to="/">Home</Link>
  <Link className={css.text} to="/movies">Movies</Link>
</nav>
    )
}

export default Header