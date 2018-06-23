
class Box extends Component{
	constructor(props){
		super(props);
		this.click=this.click.bind(this);
	}
	click(e){
		
	}
	render(){
		return(
			<div className="box" onClick={this.click}>
				log
			</div>
		)
	}
}

export default class Supportors extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div id="supportors">
				
			</div>
		)
	}
}