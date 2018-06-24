import boothCss from '../css/booth.css'

import b1 from '../images/business1.jpg'
import b2 from '../images/business2.png'
import b3 from '../images/business3.png'
import connect from '../context.js';
class Business extends Component{
	componentWillReceiveProps(nextProps){
        window.scrollTo(0,0)
    }
	render(){
		let lan=this.props.ctx.lan;
		let businessConctent=lan.businessConctent;
		return (
			<div className="booth business">
				<h3>{businessConctent[0]}</h3>
				<ul>
					<li>{'1. '+businessConctent[1]}</li>
					<li>{'2. '+businessConctent[2]}</li>
					<li>{'3. '+businessConctent[3]}</li>
					<li>{'4. '+businessConctent[4]}</li>
				</ul>
				<h3>{businessConctent[5]}</h3>
				<p>
					{businessConctent[6]}
				</p>
				<h3>{businessConctent[7]}</h3>
				<p>
					{businessConctent[8]}<span>￥15000</span>（<span>$2380</span>）。
				</p>
				<div className="b2">
					<div><img src={b2} /></div>
					<div><img src={b3} /></div>
				</div>
				<h3>{businessConctent[9]}</h3>
				<p>
		            {businessConctent[10]}<span>￥96000.00</span>
		            （<span>$15000.00</span>）{businessConctent[11]}。
				</p>
				<div className="b1"><img src={b1} /></div>
				<h3>{lan.Investment}</h3>
				{
					lan.Investments.slice(0,1).map((item,i)=>{
						return (
							<div className="person" key={i}>
								<p className="name"><i className="icon-user-md"></i>{item[0]}</p>
								<p><i className="icon-phone-sign"></i>{item[1]}</p>
								<p><i className="icon-envelope-alt"></i>{item[2]}</p>
							</div>
						)
					})
				}
				{/*<table >
					<tr>
						<td>{businessConctent[13]}</td>
						<td>{businessConctent[14]}</td>
						<td>{businessConctent[15]}</td>
					</tr>
					<tr>
						<td>3m×3m</td>
						<td>RMB 15,000.00</td>
						<td>RMB 18,000.00</td>
					</tr>
					<tr>
						<td>6m×6m</td>
						<td colSpan="2">￥ 96000 （$ 15000）</td>
					</tr>
				</table>
				<div className="b2">
					<div><img src={b2} /></div>
					<div><img src={b3} /></div>
				</div>
				*/}
			</div>
		)
	}
}

export default connect(Business)