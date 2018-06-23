import boothCss from '../css/booth.css'

import b2 from '../images/2.png'
import b3 from '../images/3.png'

class Business extends Component{
	render(){
		return (
			<div className="booth business">
				<h3>参展对象</h3>
				<ul>
					<li>1. 国内医疗器械园区</li>
					<li>2. 医疗器械企业</li>
					<li>3. 国际、国内相关项目</li>
					<li>4. 大学与研发机构、投资、法律等专业服务机构等</li>
				</ul>
				<h3>参展费用</h3>
				<table >
					<tr>
						<td>展位规格</td>
						<td>展位一面开放</td>
						<td>展位两面开放及以上</td>
					</tr>
					<tr>
						<td>3m×3m</td>
						<td>RMB 15,000.00</td>
						<td>RMB 18,000.00</td>
					</tr>
					<tr>
						<td>6m×6m</td>
						<td colspan="2">￥ 96000 （$ 15000）</td>
					</tr>
				</table>
				<div className="b2">
					<div><img src={b2} /></div>
					<div><img src={b3} /></div>
				</div>
			</div>
		)
	}
}

export default Business