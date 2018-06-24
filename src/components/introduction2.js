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
				<h3>{lan.activeLight[0]}</h3>
				<div>
					<p>{lan.activeLight[1]}</p>
					<p>{lan.activeLight[2]}</p>
				</div>
				<h3>{lan.speakerss[0]}</h3>
				<div>
					<p>{'1. '+lan.speakerss[1]}</p>
					<p>{lan.speakerss[2]}</p>
					<p>{'2. '+lan.speakerss[3]}</p>
					<p>{lan.speakerss[4]}</p>
					<p>{'3. '+lan.speakerss[4]}</p>
					<p>{lan.speakerss[5]}</p>
				</div>
				<h3>{lan.huiyineirong[0]}</h3>
				<div>
					<p>{'1. '+lan.huiyineirong[1]} </p>
					<p>{lan.huiyineirong[2]}</p>
					<p>{lan.huiyineirong[3]}</p>
					<p>{'2. '+lan.huiyineirong[4]}</p>
					<p>{lan.huiyineirong[5]}</p>
					<p>{lan.huiyineirong[6]}</p>
					<p>{'3. '+lan.huiyineirong[7]}</p>
					<p>{lan.huiyineirong[8]}</p>
					<p>{'4. '+lan.huiyineirong[9]}</p>
					<p>{lan.huiyineirong[10]}</p>
					<p>{'5. '+lan.huiyineirong[11]}</p>
					<p>{lan.huiyineirong[12]}</p>
				</div>
				<h3>{lan.zhubanfang[0]}</h3>
				{
					lan.zhubanfangs.map((item,i)=>{
						return (
							<div key={i}>
								<p className="htitle">{item[0]}</p>
								<p>{item[1]}</p>
							</div>
						)
					})
				}
				<h3>{lan.hezuohuoban}</h3>
				{
					lan.hezuohuobans.map((item,i)=>{
						return (
							<div key={i}>
								<p className="htitle">{item[0]}</p>
								<p>{item[1]}</p>
							</div>
						)
					})
				}
				
				<h3>{lan.chengbandanwei}</h3>
				{
					lan.chengbandanweis.map((item,i)=>{
						return (
							<div key={i}>
								<p className="htitle">{item[0]}</p>
								<p>{item[1]}</p>
							</div>
						)
					})
				}

				<h3>{lan.zhichidanwei}</h3>
				{
					lan.zhichidanweis.map((item,i)=>{
						return (
							<div key={i}>
								<p className="htitle">{item[0]}</p>
								<p>{item[1]}</p>
							</div>
						)
					})
				}

				<h3>{lan.canhuijigou}</h3>
				{
					lan.canhuijigous.map((item,i)=>{
						return (
							<div key={i}>
								{
									item.map((str,j)=>{
										if(j===0){
											return <p className="htitle" key={j}>{str}</p>
										}
										return <p key={j}>{str}</p>
									})
								}
							</div>
						)
					})
				}
			</div>
		)
	}
}

export default connect(Introduction);