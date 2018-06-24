
export default class Collection extends Component{
	constructor(props){
		super(props)
	}
	componentWillReceiveProps(nextProps){
        window.scrollTo(0,0)
    }
	render(){
		let types=[
			'医疗器械整体发展',
			'医疗器械研发',
			'国际间合作',
			'审批及生产法规',
			'热点疾病治疗',
			'心脏器械',
			'3D打印',
			'人体建模'
		]
		return(
			<div id="collection">
				<div>
					<h4 className="collection_title">征集演讲人</h4>
					<p>本次大会聚焦医疗器械行业设计、研发、审批、制造、及公共管理等方面</p>
					<div>
						<p>大会现征集以下领域的优秀讲者：</p>
						<ul>
							{
								types.map((v,i)=>{
									return <li key={i}>{v}</li>
								})
							}
						</ul>
					</div>
				</div>
				<div>
					<h4 className="collection_title">联系方式</h4>
					<ul>
						<li>
							<p>邮箱：guoshangjie@ittn.com.cn</p>
							<p>请将个人简介、照片、联系方式、演讲题目及演讲内容概要发送至邮箱</p>
						</li>
						<li>
							<p>电话：15818609651</p>
							<p>直接联系我们</p>
						</li>
					</ul>
				</div>
			</div>
		)
	}
} 