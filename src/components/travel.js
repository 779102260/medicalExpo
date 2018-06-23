import time from '../images/travel_time.jpg'

export default class Travel extends Component{
	render(){
		return(
			<div id="travel">
				<div className="time clearfix">
					<div><img src={time} /></div>
					<div>
						<p className="title">大会时间和地点</p>
						<p>2018</p>
						<p>12.10-12.12</p>
						<p>中国北京国际会议中心</p>
					</div>
				</div>
				<div className="plan">
					<div className="title">
						<p>培训</p>
					</div>
					<div className="planContent">
						<div className="planTime"><span>2018.12.10 上午 9:00 - 11:00</span></div>
						<div><span className="smallTitle">会议地点</span><span>北京国际会议中心第五会议厅</span></div>
						<div><span className="smallTitle">活动内容</span><span>明尼苏达大学医疗器械设计培训</span></div>
						<div>
							<div><span className="smallTitle">嘉宾简介</span></div>
							<div className="smallContent">
								<p><span>Joe Hale</span>，明尼苏达大学 “Earl E. Bakken （厄尔巴肯）医疗器械中心创新伙伴计划”的主任</p>
								<p><span>Gwen Fischer</span>，美国明尼苏达大学共济会儿童医院重症监护医生、芝加哥洛约拉大学斯特里奇医学院医学博士</p>
								<p><span>Mike Finch</span>，儿童医院及诊所，美国明尼苏达大学卡尔森管理学院</p>
							</div>
						</div>
					</div>
					<div  className="planContent">
						<div className="planTime"><span>2018.12.10 下午 12:00 - 17:00</span></div>
						<div><span className="smallTitle">活动内容</span><span>FDA培训和CFDA双向培训</span></div>
						<div>
							<div><span className="smallTitle">嘉宾简介</span></div>
							<div className="smallContent">
								<p><span>Joe Hale</span>，明尼苏达大学 “Earl E. Bakken （厄尔巴肯）医疗器械中心创新伙伴计划”的主任</p>
								<p><span>Gwen Fischer</span>，美国明尼苏达大学共济会儿童医院重症监护医生、芝加哥洛约拉大学斯特里奇医学院医学博士</p>
								<p><span>Mike Finch</span>，儿童医院及诊所，美国明尼苏达大学卡尔森管理学院</p>
							</div>
						</div>
					</div>
				</div>
				
				<div className="plan">
					<div className="title">
						<p>会议开幕式</p>
					</div>
					<div className="planContent">
						<div  className="planTime"><span>2018.12.11上午 19:00 - 11:00</span></div>
						<div><span  className="smallTitle">活动内容</span><span>会议开幕式</span></div>
						<div>
							<div><span className="smallTitle">议题简介</span></div>
							<div  className="smallContent">
								<p>国际医疗器械项目如何适应中国医疗器械市场</p>
								<p>中国医疗器械审评审批进展</p>
								<p>医疗器械领域如何加强国际协调合作</p>
								<p>不同国家间审批规范如何更好协调合作</p>
							</div>
						</div>
					</div>
				</div>


			</div>
		)
	}
}