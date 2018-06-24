import {
  Link
} from 'react-router-dom'
import logo from '../images/logo1.jpg'
import connect from '../context.js';
class Menu extends Component{
	constructor(props){
		super(props)

		this.click=this.click.bind(this);
		this.toggleMenu=this.toggleMenu.bind(this);
	}
	componentDidMount(){
		this.click();
	}
	click(e){
		let lis=document.querySelectorAll('#menu ul li');
		
		let selected=false;
		for(let l=lis.length;l--;){
			let li=lis[l];
			let a=li.children[0];
			let menuName=a.getAttribute('href');

			if(location.href.indexOf(menuName)!==-1 && !selected){
				li.className+=' selected';
				selected=true;
			}else{
				li.className=li.className.replace('selected',' ');
			}

		}
		

		document.querySelector('.menuBtn').nextElementSibling.className='';

		document.body.scroll && document.body.scroll(0,0);
	}
	toggleMenu(e){
		let ul=e.currentTarget.nextElementSibling;
		if(ul.className.indexOf('menuShow')!==-1){
			ul.className='';
		}else{
			ul.className='menuShow';
		}
	}
	render(){
		let lan=this.props.ctx.lan;
		return(
			<div id="menu">
				<div className="menuBtn" onClick={this.toggleMenu}>
					<i className="icon-reorder"></i>
				</div>
				<ul>
					<li onClick={this.click}><Link to="/">{lan.home}</Link></li>
					<li onClick={this.click}><Link to="/travel">{lan.travel}</Link></li>
					<li onClick={this.click}><Link to="/speakers">{lan.speakers}</Link></li>
					<li onClick={this.click}><Link to="/train">{lan.train}</Link></li>
					<li onClick={this.click}><Link to="/TechnologyRelease">{lan.TechnologyRelease}</Link></li>
					<li onClick={this.click}><Link to="/patronageSystem">{lan.patronageSystem}</Link></li>
					<li onClick={this.click}><Link to="/business">{lan.business}</Link></li>
					<li onClick={this.click}><Link to="/guide">{lan.guide}</Link></li>
					<li onClick={this.click} className="_hide"><Link to="/introduction">{lan.introduction}</Link></li>
					<li onClick={this.click}  className="_hide important"><Link to="/register">{lan.register}</Link></li>
					<li onClick={this.click}  className="_hide important"><Link to="/organIntroduction"></Link></li>
					<li onClick={this.click}  className="_hide important"><Link to="/intro2017"></Link></li>
					<li onClick={this.click}  className="_hide important"><Link to="/intro2018"></Link></li>
					{/*<li onClick={this.click}><Link to="/supportors">赞助伙伴</Link></li>*/}
					{/*<li onClick={this.click}><Link to="/booth">展位规划</Link></li>*/}
					{/*<li onClick={this.click}><Link to="/collection">论文征集</Link></li>
					<li onClick={this.click}><Link to="/register">创赛成果展示</Link></li>
					<li onClick={this.click}><Link to="/register">手术成果展示</Link></li>*/}
					<li onClick={this.click}><Link to="/contact">{lan.contact}</Link></li>
				</ul>
			</div>
		)
	}
}


export default connect(Menu)
