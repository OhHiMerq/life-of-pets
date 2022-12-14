// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Private, Router, Route, Set } from '@redwoodjs/router'

import NavLayout from './layouts/NavLayout/NavLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Set wrap={NavLayout}>
        <Private unauthenticated="login">
          <Route path="/" page={HomePage} name="home" />
          <Route path="/article/{id:Int}" page={ArticlePage} name="article" />
          <Route path="/profile/{id:Int}" page={ProfilePage} name="profile" />
          <Route path="/profile" page={ProfilePage} name="profile" />
          <Route path="/follow" page={FollowPage} name="follow" />
        </Private>
      </Set>{' '}
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
