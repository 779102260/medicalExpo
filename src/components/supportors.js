import hz1 from '../images/coop/1.jpg'
import hz2 from '../images/coop/2.jpg'
import hz3 from '../images/coop/3.jpg'
import hz4 from '../images/coop/4.jpg'
import hz5 from '../images/coop/5.jpg'
import hz6 from '../images/coop/6.jpg'
import hz7 from '../images/coop/7.jpg'
import hz14 from '../images/coop/14.jpg'

import connect from '../context.js';
/*
url 点击链接
pic 图片
*/
class Box extends Component{
	constructor(props){
		super(props);
		this.click=this.click.bind(this);
	}
	componentWillReceiveProps(nextProps){
        window.scrollTo(0,0)
    }
	click(e){
		// window.open(this.props.url,'_blank');
	}
	render(){
		return(
			<div className="box" onClick={this.click} title={this.props.name}>
				{this.props.pic && <img src={this.props.pic}  className="log"/>}
				{/*<span>{this.props.text}</span>*/}
			</div>
		)
	}
}

class Supportors extends Component{
	constructor(props){
		super(props);
	}

	render(){
		let lan=this.props.ctx.lan;
		
		let coops=lan.coops;
		let cooperation=[{
			pic:hz1,
			name:coops.hz1
		},{
			pic:hz2,
			name:coops.hz2
		},{
			pic:hz3,
			name:coops.hz3
		},{
			pic:hz4,
			name:coops.hz4
		},{
			pic:hz5,
			name:coops.hz5
		},{
			pic:hz6,
			name:coops.hz6
		},{
			pic:hz7,
			name:coops.hz7
		},,{
			pic:hz14,
			name:coops.hz14
		}];
		let cooperationList=cooperation.map((o,i)=>{
			return <Box {...o} key={i}/>
		});


		return(
			<div id="supportors">
				<div className="supportors_head">
					<p>{lan.partner}</p>
					<div>{cooperationList}</div>
				</div>
				{/*<div className="supportors_head">
					<p>{lan.sponsor}</p>
				</div>
				*/}
			</div>
		)
	}
}
export default connect(Supportors)