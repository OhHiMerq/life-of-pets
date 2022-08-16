import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import 'src/index.css'
type NavLayoutProps = {
  children?: React.ReactNode
}
const LinkStyle = {
  textDecoration: 'none',
  fontSize: '1.5rem',
  color: 'white',
}
const NavLayout = ({ children }: NavLayoutProps) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  return (
    <>
      <header
        style={{
          width: '90%',
          height: '5em',
          display: 'flex',
          padding: '0 5%',
          backgroundColor: '#348bd1',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ fontSize: '2rem', color: 'white', fontWeight: 'bold' }}>
          MICROBLOG
        </div>
        {isAuthenticated ? (
          <>
            <nav className="nav">
              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  alignItems: 'baseline',
                }}
              >
                <li style={{ marginLeft: '3rem' }}>
                  <Link to={routes.home()} style={LinkStyle}>
                    Home
                  </Link>
                </li>
                <li style={{ marginLeft: '3rem' }}>
                  <Link to={routes.follow()} style={LinkStyle}>
                    Follow
                  </Link>
                </li>
                <li style={{ marginLeft: '3rem' }}>
                  <Link to={routes.profile()} style={LinkStyle}>
                    Profile
                  </Link>
                </li>
              </ul>
            </nav>
            <div>
              <span
                style={{
                  fontSize: '1rem',
                  color: 'white',
                }}
              >
                Logged in as {currentUser.email}
              </span>{' '}
              <button type="button" onClick={logOut} className="btn-logout">
                Logout
              </button>
            </div>
          </>
        ) : (
          <div>
            <Link to={routes.login()}>Login</Link>
          </div>
        )}
      </header>
      <main style={{ margin: 'auto', maxWidth: '35rem' }}>{children}</main>
    </>
  )
}

export default NavLayout
