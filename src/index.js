import {createStore} from 'redux'
import {Provider} from 'react-redux'

import reducers from './components/reducers/reducers.js'
import App from './components/app.js'

import fontIcon from './css/font-awesome.min.css'
import resetCss from './css/reset.css'
import indexCss from './css/index.css'

import zh from './lang/lang_zh.js'
import en from './lang/lang_en.js'

window.lan=zh;

const store=createStore(reducers);

const AppWrap=<Provider store={store}><App /></Provider>;

ReactDOM.render(
	AppWrap,
	document.getElementById('root')
)


