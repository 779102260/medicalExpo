

class TopHead extends Component{
	constructor(props){
		super(props)
	}


	render(){
		return(
			<div id="topHead">
				<div className="left">
					<p className="logo">第二届国际医疗器械设计（中国）大会</p>
					<p className="englishLogo">Design of Medical Devices Conference, China 2018</p>
				</div>
				<div className="center">
					<p className="time"><span className="icon-time"></span><span className="timeText">{lan.time}</span></p>
					<p className="address"><span className="icon-map-marker"></span><span>{lan.address}</span></p>
				</div>
				<div className="right">
					<span className="login">登陆</span>
					<select className="toggleLanguage">
						<option value="zh">
							中文
						</option>
						<option value="en">
							English
						</option>
					</select>
				</div>
			</div>
		)
	}
}


export default function Head() {
	return <TopHead />
}