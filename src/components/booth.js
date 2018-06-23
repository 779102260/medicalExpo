
import boothCss from '../css/booth.css'
import b1 from '../images/1.jpg'
import b2 from '../images/2.png'
import b3 from '../images/3.png'

class Booth extends Component{
	render(){
		return (
			<div className="booth">
				<h3>展览展示</h3>
				<p>
					本次大会设有展位，为与会者创造良好的环境，提供最新的专业技术和产品信息，
					满足供应商面对面洽谈对接的机会。展位将提供高度可见的机会，
					展示您在该领域的领先地位，提升您的技术、产品以及整个企业宝贵的知名度。
				</p>
				<h3>特装展台</h3>
				<p>
		            本次大会设置 6 X 6米特装展位12个。展位价格为<span>￥96000.00</span>元
		            （<span>$15000.00</span>）含场地费、设计搭建费。
				</p>
				<div className="b1"><img src={b1} /></div>
				<h3>标准展位</h3>
				<p>
					本次大会设标准展位（3X3米）70个。展位价格为<span>￥15000</span>（<span>$2380</span>）元。
				</p>
				<div className="b2">
					<div><img src={b2} /></div>
					<div><img src={b3} /></div>
				</div>
			</div>
		)
	}
}

export default Booth