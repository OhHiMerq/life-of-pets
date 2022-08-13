import { Link, routes } from '@redwoodjs/router'
type NavLayoutProps = {
  children?: React.ReactNode
}

const NavLayout = ({ children }: NavLayoutProps) => {
  return (
    <>
      <header>
        <h1>Redwood Blog</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.profile()}>Profile</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default NavLayout
