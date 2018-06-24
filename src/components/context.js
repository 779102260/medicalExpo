import {
  Route
} from 'react-router-dom'

import Introduction from './introduction.js'
import Register from './register.js'
import Travel from './travel.js'
import Guide from './guide.js'
import Supportors from './supportors.js'
import Booth from './booth.js'
import Business from './business.js'
import Collection from './collection.js'
import PatronageSystem from './patronageSystem.js'
import Contact from './contact.js'

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
				<Route exact path="/supportors" component={Supportors}/>
				<Route exact path="/booth" component={Booth}/>
				<Route exact path="/business" component={Business}/>
				<Route exact path="/collection" component={Collection}/>
				<Route exact path="/patronageSystem" component={PatronageSystem}/>
				<Route exact path="/contact" component={Contact}/>
			</div>
		)
	}
}

export default Context