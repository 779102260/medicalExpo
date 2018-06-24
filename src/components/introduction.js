import intr from '../images/intr.jpg';
import connect from '../context.js';

class Introduction extends Component{
	constructor(props){
		super(props);
	}
	componentWillReceiveProps(nextProps){
        window.scrollTo(0,0);
    }
    render(){
		let lan=this.props.ctx.lan;
		return (
			<div id="introduction">
				<p>
					<img src={intr} /> 
				</p>
				{
					lan.introductionContext.map((item,i)=>{
						return <p key={i}>{item}</p>
					})
				}
			</div>
		)
	}
}

export default connect(Introduction);