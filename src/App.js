import './App.css';
import {Route, Switch} from 'react-router-dom';
import  StepOne from './components/Step.One';
import  StepTwo from './components/Step.Two';
import  StepThree from './components/Step.Three';
import Header from './components/Header';
import {Provider} from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Header />
      <div>
        <Switch>
          <Route exact component={StepOne} path="/"/>
          <Route component={StepTwo} path="/steptwo"/>
          <Route component={StepThree} path="/stepthree"/>
        </Switch>
      </div>
      </div>
    </Provider>
  );
}

export default App;
