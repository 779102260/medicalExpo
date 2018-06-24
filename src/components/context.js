import {
  Route
} from 'react-router-dom'

import Home from './home.js'
import Introduction from './introduction2.js'
import Register from './register.js'
import Travel from './travel.js'
import Guide from './guide.js'
// import Supportors from './supportors.js'
import Train from './train.js'
import Booth from './booth.js'
import Business from './business.js'
import Collection from './collection.js'
import PatronageSystem from './patronageSystem.js'
import TechnologyRelease from './technologyRelease.js'
import Speakers from './speaker.js'
import Contact from './contact.js'
import OrganIntroduction from './organIntroduction.js'
import Intro2017 from './intro2017.js'
import Intro2018 from './intro2018.js'

class Context extends Component{
	constructor(props){
		super(props)
	}
	
	render(){
		return(
			<div id="context">
				<Route exact path="/" component={Home}/>
				<Route  path="/introduction" component={Introduction}/>
				<Route  path="/register" component={Register}/>
				<Route  path="/travel" component={Travel}/>
				<Route  path="/guide" component={Guide}/>
				<Route  path="/train" component={Train}/>
				{/*<Route  path="/supportors" component={Supportors}/>*/}
				<Route  path="/booth" component={Booth}/>
				<Route  path="/business" component={Business}/>
				<Route  path="/collection" component={Collection}/>
				<Route  path="/patronageSystem" component={PatronageSystem}/>
				<Route  path="/speakers" component={Speakers}/>
				<Route  path="/contact" component={Contact}/>
				<Route  path="/organIntroduction" component={OrganIntroduction}/>
				<Route  path="/intro2017" component={Intro2017}/>
				<Route  path="/intro2017" component={Intro2018}/>
			</div>
		)
	}
}

export default Context