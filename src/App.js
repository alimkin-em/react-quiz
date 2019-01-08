import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Layout from './hoc/Layout/Layout.jsx'
import Quiz from './containers/Quiz/Quiz.jsx'
import QuizList from './containers/QuizList/QuizList.jsx'
import QuizCreator from './containers/QuizCreator/QuizCreator.jsx'
import Auth from './containers/Auth/Auth.jsx'

class App extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path='/auth' component={Auth}></Route>
                    <Route path='/quiz-creator' component={QuizCreator}></Route>
                    <Route path='/quiz/:id' component={Quiz}></Route>
                    <Route path='/' component={QuizList}></Route>
                </Switch>
            </Layout>
        );
    }
}

export default App;
