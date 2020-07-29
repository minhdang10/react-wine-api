import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import axios from 'axios';

import Wine1 from "./components/w1";
import Wine2 from "./components/w2";
import Wine3 from "./components/w3";
import Wine4 from "./components/w4";
import Wine5 from "./components/w5";
import Wine6 from "./components/w6";
import Wine7 from "./components/w7";
import Wine8 from "./components/w8";

const wine_api = 'http://myapi-profstream.herokuapp.com/api/1d82a5/wines';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      info:[],
      wine1:[],
      wine2:[],
      wine3:[],
      wine4:[],
      wine5:[],
      wine6:[],
      wine7:[],
      wine8:[]
    };  
  }

  async getWine(){
    try{
      const stat = await axios.get(wine_api);
      this.setState({info: stat.data});
      this.setState({wine1: this.state.info[0]});
      this.setState({wine2: this.state.info[1]});
      this.setState({wine3: this.state.info[2]});
      this.setState({wine4: this.state.info[3]});
      this.setState({wine5: this.state.info[4]});
      this.setState({wine6: this.state.info[5]});
      this.setState({wine7: this.state.info[6]});
      this.setState({wine8: this.state.info[7]});
      this.setState({wine9: this.state.info[8]});
    }
    catch{
      console.log('Error!')
    }
  }

  componentDidMount(){
    this.getWine();
  }
  render() {
    return(
      <Router>
        <h2>Wine Browser</h2>
        <div className='winelist'>
          <button href='#'><Link to='/wine/6546'>{this.state.wine1.name}</Link></button>
          <button href='#'><Link to='/wine/6547'>{this.state.wine2.name}</Link></button>
          <button href='#'><Link to='/wine/6548'>{this.state.wine3.name}</Link></button>
          <button href='#'><Link to='/wine/6549'>{this.state.wine4.name}</Link></button>
          <button href='#'><Link to='/wine/6550'>{this.state.wine5.name}</Link></button>
          <button href='#'><Link to='/wine/6551'>{this.state.wine6.name}</Link></button>
          <button href='#'><Link to='/wine/6552'>{this.state.wine7.name}</Link></button>
          <button href='#'><Link to='/wine/6553'>{this.state.wine8.name}</Link></button>
        </div>

        <Switch>
          <Route path='/wine/6546' component={Wine1}/>
          <Route path='/wine/6547' component={Wine2}/>
          <Route path='/wine/6548' component={Wine3}/>
          <Route path='/wine/6549' component={Wine4}/>
          <Route path='/wine/6550' component={Wine5}/>
          <Route path='/wine/6551' component={Wine6}/>
          <Route path='/wine/6552' component={Wine7}/>
          <Route path='/wine/6553' component={Wine8}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
