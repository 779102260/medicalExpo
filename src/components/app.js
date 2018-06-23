import Head from './header.js'
import Menu from './menu.js'
import Context from './context.js'

import {
  BrowserRouter as Router,
} from 'react-router-dom'


let App=(props)=>{
	return (
		<Router>
			<div>
				<Head />
				<div id="main">
					<Menu />
					<Context />
				</div>
			</div>
		</Router>
	)
}

export default App