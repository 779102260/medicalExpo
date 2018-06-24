import boothCss from '../css/booth.css'
import Supportors from './supportors.js'
import connect from '../context.js';
class PatronageSystem extends Component{
	constructor(props){
		super(props);
	}
	componentDidMount(nextProps){
        window.scrollTo(0,0)
    }
	render(){
		let lan=this.props.ctx.lan;
		let supportContent=lan.supportContent;
		let supportContent1=lan.supportContent1;
		return (
			<div>
				<div className="booth psystem">
					<h3 className="boothcase">{supportContent[0]}</h3>
					<p>
						{supportContent[1]}
					</p>
					<table>
						<thead>
							<tr>
								<td className="out">
									<span className="hb">{supportContent[2]}</span>
									{/*<span className="line"></span>*/}
									<span className="level">{supportContent[3]}</span>
								</td>
								<td>{supportContent[4]}<br/>800,000</td>
								<td>{supportContent[5]}<br/>500,000</td>
								<td>{supportContent[6]}<br/>200,000</td>
							</tr>
							<tr>
								<td>{supportContent[7]}</td>
								<td>72m<sup>2</sup></td>
								<td>36m<sup>2</sup></td>
								<td>18m<sup>2</sup></td>
							</tr>
							<tr>
								<td>{supportContent[8]}</td>
								<td>20</td>
								<td>10</td>
								<td>5</td>
							</tr>
							<tr>
								<td>{supportContent[9]}</td>
								<td>√</td>
								<td>√</td>
								<td>√</td>
							</tr>
							<tr>
								<td>{supportContent[10]}</td>
								<td>√</td>
								<td>√</td>
								<td>√</td>
							</tr>
							<tr>
								<td>{supportContent[11]}</td>
								<td>√</td>
								<td>×</td>
								<td>×</td>
							</tr>
							<tr>
								<td>{supportContent[12]}</td>
								<td>√</td>
								<td>√</td>
								<td>√</td>
							</tr>
							<tr>
								<td>{supportContent[13]}</td>
								<td>√</td>
								<td>√</td>
								<td>√</td>
							</tr>
							<tr>
								<td>{supportContent[14]}</td>
								<td>√</td>
								<td>√</td>
								<td>√</td>
							</tr>
							<tr>
								<td>{supportContent[15]}</td>
								<td>3</td>
								<td>2</td>
								<td>1</td>
							</tr>
							<tr>
								<td>{supportContent[16]}</td>
								<td>3</td>
								<td>2</td>
								<td>1</td>
							</tr>
							<tr>
								<td>{supportContent[17]}</td>
								<td>√</td>
								<td>×</td>
								<td>×</td>
							</tr>
							<tr>
								<td>{supportContent[18]}</td>
								<td>×</td>
								<td>√</td>
								<td>×</td>
							</tr>
							<tr>
								<td>{supportContent[19]}</td>
								<td>×</td>
								<td>×</td>
								<td>√</td>
							</tr>
							<tr>
								<td>{supportContent[20]}</td>
								<td>√</td>
								<td>×</td>
								<td>×</td>
							</tr>
							<tr>
								<td>{supportContent[21]}</td>
								<td>×</td>
								<td>√</td>
								<td>×</td>
							</tr>
							<tr>
								<td>{supportContent[22]}</td>
								<td>×</td>
								<td>×</td>
								<td>√</td>
							</tr>
							<tr>
								<td>{supportContent[23]}</td>
								<td>√</td>
								<td>√</td>
								<td>√</td>
							</tr>
							<tr>
								<td>{supportContent[24]}</td>
								<td>2</td>
								<td>1</td>
								<td>1</td>
							</tr>
							<tr>
								<td>{supportContent[25]}</td>
								<td>{'90'+lan.minute}</td>
								<td>{'45'+lan.minute}</td>
								<td>×</td>
							</tr>
							<tr>
								<td>{supportContent[26]}</td>
								<td>√</td>
								<td>×</td>
								<td>×</td>
							</tr>
						</thead>
					</table>
					<h3 className="boothcase">{supportContent1[0]}</h3>
					<table>
						<thead>
							<tr>
								<td>
									{supportContent1[1]}
								</td>
								<td>{supportContent1[2]}</td>
								<td>{supportContent1[3]}</td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{supportContent1[4]}</td>
								<td>
									{
										supportContent1[5].map((item,i)=>{
											return <p key={i}>{item}</p>
										})
									}
								</td>
								<td>￥60,000.00</td>
							</tr>
							<tr>
								<td>{supportContent1[6]}</td>
								<td>
									{
										supportContent1[7].map((item,i)=>{
											return <p key={i}>{item}</p>
										})
									}
								</td>
								<td>￥50,000.00</td>
							</tr>
							<tr>
								<td>{supportContent1[8]}</td>
								<td>
									{
										supportContent1[9].map((item,i)=>{
											return <p key={i}>{item}</p>
										})
									}
								</td>
								<td>￥100,000.00</td>
							</tr>
							<tr>
								<td>{supportContent1[10]}</td>
								<td>
									{
										supportContent1[11].map((item,i)=>{
											return <p key={i}>{item}</p>
										})
									}
								</td>
								<td>￥150,000.00</td>
							</tr>
							<tr>
								<td>{supportContent1[12]}</td>
								<td>
									{
										supportContent1[13].map((item,i)=>{
											return <p key={i}>{item}</p>
										})
									}
								</td>
								<td>￥20,000.00</td>
							</tr>
							<tr>
								<td>{supportContent1[14]}</td>
								<td>
									{
										supportContent1[15].map((item,i)=>{
											return <p key={i}>{item}</p>
										})
									}
								</td>
								<td>
									<p>￥20,000.00</p>
									<p>￥20,000.00</p>
									<p>￥10,000.00</p>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<Supportors />
			</div>
		)
	}
}

export default connect(PatronageSystem)