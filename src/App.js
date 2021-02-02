// import './App.css'
import Header from './components/Header'
import Home from './screens/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './screens/Checkout'

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route path='/checkout'>
          <Checkout />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>

  );
}

export default App;

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/8.2.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="/__/firebase/8.2.1/firebase-analytics.js"></script>

// <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>