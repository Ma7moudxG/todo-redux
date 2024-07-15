import './App.css'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import Todo from './components/Todo.jsx'

function App() {

  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  )
}

export default App
