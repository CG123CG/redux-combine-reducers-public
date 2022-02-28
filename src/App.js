import './App.css'
import Test from './components/Test'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

function App() {
  const store = configureStore()

  return (
    <div className="App">
      <h1>combineReducers in Redux</h1>
      <Provider store={store}>
        <Test />
      </Provider>
    </div>
  )
}

export default App
