import hotelPic1 from '../images/hotel1.jpg'

const Hotel=(props)=>{
	let score=props.score;
	let arr=new Array(score+1);
	score=arr.join('★');
	return(
		<div className="hotel">
			<div className="hotel_pic">
				<img src={props.pic} alt={props.name}/>
			</div>
			<div className="hotel_content">
				<p className="hotel_head">
					<a className="hotel_name" src={props.url}>{props.name}</a>
					<span className="hotel_score">{score}</span>
				</p>
				<p className="hotel_inter">{props.intr}</p>
				<p className="hotel_price">{props.distance}</p>
			</div>
		</div>
	)
}
export default class Guide extends Component{
	componentDidMount(){
		let map = new BMap.Map("baiduMap");          // 创建地图实例  
		let point = new BMap.Point(116.409138,39.995619);  // 创建点坐标  
		map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别
		map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
		// 添加标注
		var marker = new BMap.Marker(point);        // 创建标注    
		map.addOverlay(marker);                     // 将标注添加到地图中 
	}
	render(){
		let hotel1={
			pic:hotelPic1,
			name:'五洲皇冠国际酒店',
			url:'http://www.v-continent.com/',
			score:5,
			intr:'北京五洲皇冠国际酒店位于繁华的亚奥商圈，是北四环安慧桥的地标性建筑。毗邻北京国际会议中心；步行即可到达鸟巢、水立方及奥林匹克公园，与中关村、望京、上地等科技园区咫尺之遥。酒店地处北京北四环中路，邻近北辰时代名门百货、北辰时代生活广场、北辰购物中心等大型综合商场，吃喝玩乐一应俱全！',
			distance:'距首都机场:车程40分钟 <br />  距北京国际会议中心：步行5分钟'
		}
		return(
			<div id="guide">
				<div className="map">
					<div id="baiduMap" >

					</div>
					<div className="textInter">
						<p>邮编：100101</p>
						<p>网址：http://www.bicc.com.cn/</p>
						<p>地址：中国北京市朝阳区北辰东路8号</p>
						<p>北京国际会议中心隶属北辰集团，地处亚奥商圈，提供一流会议、展览、办公、居住、娱乐、购物等一站式服务。坐拥亚奥商圈，北眺奥运场馆，南临四环主路，环境优美、交通便利。北京国际会议中心曾获得北京市旅游局授予的“五星级最佳服务场所”的称号，1996年4月15日北京国际会议中心加入国际会议与集会协会(ICCA)，成为其会员。是一家五星级会议服务接待场所，拥有各种类型的会议室48间，展览面积5000平方米。</p>
					</div>
				</div>
				<div className="hotels">
					<Hotel {...hotel1}/>
				</div>
			</div>
		)
	}
}