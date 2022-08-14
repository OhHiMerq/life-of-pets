import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
type NavLayoutProps = {
  children?: React.ReactNode
}

const NavLayout = ({ children }: NavLayoutProps) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  return (
    <>
      <header>
        <div>
          <h1>Redwood Blog</h1>
          {isAuthenticated ? (
            <div>
              <span>Logged in as {currentUser.email}</span>{' '}
              <nav>
                <ul>
                  <li>
                    <Link to={routes.home()}>Home</Link>
                  </li>
                  <li>
                    <Link to={routes.follow()}>Follow</Link>
                  </li>
                  <li>
                    <Link to={routes.profile()}>Profile</Link>
                  </li>
                </ul>
              </nav>
              <button type="button" onClick={logOut}>
                Logout
              </button>
            </div>
          ) : (
            <div>
              <Link to={routes.login()}>Login</Link>
            </div>
          )}
        </div>
      </header>
      <main>{children}</main>
    </>
  )
}

export default NavLayout
