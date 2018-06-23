
/*

url 点击链接
pic 图片
text 文字
*/
class Box extends Component{
	constructor(props){
		super(props);
		this.click=this.click.bind(this);
	}
	click(e){
		window.open(this.props.url,'_blank');
	}
	render(){
		return(
			<div className="box" onClick={this.click}>
				{this.props.pic && <img src={this.props.pic} alt="" className="log"/>}
				<span>{this.props.text}</span>
			</div>
		)
	}
}

export default class Supportors extends Component{
	constructor(props){
		super(props);
	}

	render(){
		let cooperation=[{
			text:'科技部中国生物技术发展中心'
		},{
			text:'中国医学装备协会'
		},{
			text:'中国医疗器械行业协会'
		},{
			text:'北京健康促进会'
		},{
			text:'中关村发展集团'
		},{
			text:'中关村医疗器械园'
		}];
		let cooperationList=cooperation.map((o,i)=>{
			return <Box {...o} key={i}/>
		});


		return(
			<div id="supportors">
				<div className="supportors_head">
					<p>合作伙伴</p>
					<div>{cooperationList}</div>
				</div>
				<div className="supportors_head">
					<p>赞助商</p>
				</div>
			</div>
		)
	}
}