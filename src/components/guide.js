import hotelPic1 from '../images/hotel1.jpg'
import hotelPic2 from '../images/hotel2.jpg'

import {BaiduMap} from './_common.js'

import connect from '../context.js'
import Register from './register.js'

const Hotel=(props)=>{
	let score=props.score;
	let arr=new Array(score+1);
	score=arr.join('★');

	let distanceList=props.distance.map((v,i)=>{
		if(i===0){
			let url=v.match(/[a-zA-Z\:\/\.]+/g).slice(-1);
			let text=v.split(url)[0];
			return <p>{text}<a href={url}>{url}</a></p>
		}
		return <p key={i}>{v}</p>
	});

	
	return(
		<div className="hotel clearfix">
			{/*<div className="hotel_pic">
				<img src={props.pic} alt={props.name}/>
			</div>*/}
			<div className="hotel_content">
				<p className="hotel_head">
					<a className="hotel_name" src={props.url}>{props.name}</a>
					{/*<span className="hotel_score">{score}</span>*/}
				</p>
				<p className="hotel_inter">{props.intr}</p>
				<div className="hotel_distance">{distanceList}</div>
			</div>
		</div>
	)
}
class Guide extends Component{
	// componentDidMount(){
	// 	let map = new BMap.Map("baiduMap");          // 创建地图实例  
	// 	let point = new BMap.Point(116.409138,39.995619);  // 创建点坐标  
	// 	map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别
	// 	map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
	// 	// 添加标注
	// 	var marker = new BMap.Marker(point);        // 创建标注    
	// 	map.addOverlay(marker);                     // 将标注添加到地图中 
	// }
	componentWillReceiveProps(nextProps){
        window.scrollTo(0,0)
    }
	render(){
		let lan=this.props.ctx.lan;
		let hotel1={
			pic:hotelPic1,
			name:lan.hotel1[0],
			url:'http://www.bicc.com.cn/',
			score:5,
			intr:lan.hotel1[1],
			distance:lan.hotel1[2]
		}
		// let hotel2={
		// 	pic:hotelPic2,
		// 	name:lan.hotel2[0],
		// 	url:'http://guan.388hotel.cn/hotel/hotel_index.asp?hotelid=30242',
		// 	score:5,
		// 	intr:lan.hotel2[1],
		// 	distance:lan.hotel2[2],
		// }
		return(
			<div id="guide">

				<div className="map">
					<BaiduMap />
					{/*<div className="textInter">
						<p><i className="icon-external-link"></i>　<a href="http://www.bicc.com.cn/">http://www.bicc.com.cn/</a> </p>
						<p><i className="icon-building"></i>{lan.mapAndIntr[0]}</p>
						<p>{lan.mapAndIntr[1]}</p>
					</div>*/}
					<div className="textInter hotels">
						<Hotel {...hotel1}/>
						{/*<Hotel {...hotel2}/>*/}
					</div>
				</div>

				<h3 className='h3'>{lan.userRegister}</h3>
				<Register />
			</div>
		)
	}
}
export default connect(Guide)