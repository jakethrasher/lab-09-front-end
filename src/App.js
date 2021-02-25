import React, { Component } from 'react'
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import CreatePage from './CreatePage';
import ListPage from './ListPage'
import DetailPage from './ListPage'
import Header from './Header'

export default class App extends Component {
  render() {
    return (
      <div>
         <Router>
                    <Header/>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <ListPage {...routerProps} />} 
                        />
                            <Route 
                                path="/create" 
                                exact
                                render={(routerProps) => <CreatePage {...routerProps} />} 
                            />
                        <Route 
                            path="/:id" 
                            exact
                            render={(routerProps) => <DetailPage {...routerProps} />} 
                        />
                    </Switch>
                </Router>
      </div>
    )
  }
}
