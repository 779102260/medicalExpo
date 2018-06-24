import Head from './header.js'
import Menu from './menu.js'
import Context from './context.js'

import Footer from './footer.js'

import {
  BrowserRouter as Router,
} from 'react-router-dom'

import zh from '../lang/lang_zh.js'
import en from '../lang/lang_en.js'
import {Provider} from '../context.js';

class App extends PureComponent{
	constructor(props){
		super(props);
		
		this.toggleLanguage=(lan)=>{
			this.setState((state)=>({
				selected:lan
			}))
		}

		this.state={
			selected:'zh',
			zh,
			en,
			toggleLanguage:this.toggleLanguage
		}
	}

	render(){
		return(
			<Router>
				<Provider value={this.state}>
					<Head />
					<Menu />
					<div id="main">
						<Context />
					</div>
					<Footer />
				</Provider>
			</Router>
		)
	}
}

export default App