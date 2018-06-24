//百度地图
class BaiduMap extends PureComponent{
	componentDidMount(){
		let map = new BMap.Map("baiduMap");          // 创建地图实例  
		let point = new BMap.Point(116.411314,39.996135);  // 创建点坐标  
		map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别
		map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
		// 添加标注
		var marker = new BMap.Marker(point);        // 创建标注    
		map.addOverlay(marker);                     // 将标注添加到地图中 
	}

	render(){
		return(
			<div id="baiduMap"></div>
		)
	}
}

export {BaiduMap}