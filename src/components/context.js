import {
  Route
} from 'react-router-dom'

import Introduction from './introduction.js'
import Register from './register.js'
import Travel from './travel.js'
import Guide from './guide.js'

class Context extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div id="context">
				<Route exact path="/" component={Introduction}/>
				<Route exact path="/register" component={Register}/>
				<Route exact path="/travel" component={Travel}/>
				<Route exact path="/guide" component={Guide}/>
			</div>
		)
	}
}

export default Context