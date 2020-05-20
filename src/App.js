import React from 'react';
import AppRoutes from './Routes';
import store from './Redux/Store';
import { Provider } from 'react-redux'
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <AppRoutes />
        </div>
      </Provider>
    )
  }
}
export default App;