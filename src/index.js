import {createStore} from 'redux'
import {Provider} from 'react-redux'

import reducers from './components/reducers/reducers.js'
import App from './components/app.js'

import resetCss from './css/reset.css'

const store=createStore(reducers);

const AppWrap=<Provider store={store}><App /></Provider>;

ReactDOM.render(
	AppWrap,
	document.getElementById('root')
)


