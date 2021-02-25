import React, { Component } from 'react'
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import CreatePage from './CreatePage.js';
import ListPage from './ListPage.js'
import DetailPage from './DetailPage.js'
import Header from './Header.js'
import HomePage from './HomePage.js'


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
                            render={(routerProps) => <HomePage {...routerProps} />} 
                        />
                        <Route 
                            path="/records" 
                            exact
                            render={(routerProps) => <ListPage {...routerProps} />} 
                        />
                        <Route 
                            path="/records/:recordId" 
                            exact
                            render={(routerProps) => <DetailPage {...routerProps} />} 
                        />
                        <Route 
                            path="/create" 
                            exact
                            render={(routerProps) => <CreatePage {...routerProps} />} 
                        />
                        
                    </Switch>
                </Router>
      </div>
    )
  }
}
