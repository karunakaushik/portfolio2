import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import Loader from 'react-loader'
// import LoaderComponent from './components/common/loader/Loader'
// import Header from './components/main/index'
// import About from './components/about/index'

const Loading = () => {
  return <Loader>loading...</Loader>
}
const HomeIndex = Loadable({
  loader: () => import('./components/main/index'),
  loading: Loading
})
const About = Loadable({
  loader: () => import('./components/about/index'),
  loading: Loading
})
const Academic = Loadable({
  loader: () => import('./components/academic/index'),
  loading: Loading
})
const Skill = Loadable({
  loader: () => import('./components/skill/index'),
  loading: Loading
})
const Contact = Loadable({
  loader: () => import('./components/contact/index'),
  loading: Loading
})

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <About />
//     </div>
//   );
// }

// export default App;
export default class App extends React.Component {
  render() {
      return (
          <BrowserRouter>
              <Switch>
                  <React.Fragment>
                      
                      <Route path="/about" component={About}/>
                      <Route path="/skill" component={Skill}/>
                      <Route exact path="/" component={HomeIndex} />
                      <Route path="/acads" component={Academic}/>
                      <Route path="/contact" component={Contact}/>


                  </React.Fragment>
              </Switch>
          </BrowserRouter>
      )
  }
}

