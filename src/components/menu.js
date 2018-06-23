import {
  Link
} from 'react-router-dom'

class Menu extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div id="menu">
				<ul>
					<li className="title">大会简介</li>
					<li><Link to="/">简介</Link></li>
					<li className="title">参会</li>
					<li><Link to="/register" className="important">注册</Link></li>
					<li><Link to="/travel">日程</Link></li>
					<li><Link to="/guide">指南</Link></li>
					<li className="title">赞助</li>
					<li><Link to="/register">赞助伙伴</Link></li>
					<li><Link to="/register">赞助机制</Link></li>
					<li className="title">招商</li>
					<li><Link to="/register">展位规划</Link></li>
					<li><Link to="/register">展位招商</Link></li>
					<li className="title">专家</li>
					<li><Link to="/register">演讲专家</Link></li>
					<li><Link to="/register">论文征集</Link></li>
					<li className="title">展示</li>
					<li><Link to="/register">创赛成果展示</Link></li>
					<li><Link to="/register">手术成果展示</Link></li>
					<li className="title">联系我们</li>
					<li><Link to="/register">联系方式</Link></li>
				</ul>
			</div>
		)
	}
}


export default Menu
