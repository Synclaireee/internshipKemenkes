import React from 'react'
import { Layout } from 'antd'
import routes from 'constants/routes'
import Header from 'components/Header'
import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Login from './login'
import Identity from './identity'
import Registration from './registration'
import PostRegistration from './postRegistration'
import NotFound from './notfound'


function App() {
  return (
      <Router>
        <Layout style={{ width: '100vw', minHeight:'100vh'}}>
          <Layout.Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
            <Header />
          </Layout.Header>
          <Layout.Content className={'app__content'}>
            <Switch>
              <Route exact path={routes.BASE}>
                <Identity />
              </Route>
              <Route exact path={routes.LOGIN}>
                <Login />
              </Route>
              <Route exact path = {routes.REGISTRATION}>
                <Registration />
              </Route>
              <Route exact path = {routes.POSTREGISTRATION}>
                <PostRegistration />
              </Route>
              <Route path={routes.NOTFOUND}>
                <NotFound />
              </Route>
              <Redirect to = {routes.NOTFOUND}/>
            </Switch>
          </Layout.Content>
        </Layout>
      </Router>
  )
}

export default App
