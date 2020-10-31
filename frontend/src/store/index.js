import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { reducer } from './reducers/index'
import thunk from 'redux-thunk'

const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
));

export default store