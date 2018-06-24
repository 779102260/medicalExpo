import Register from './register.js'

class RegWindow extends Component{
	constructor(props){
		super(props);
	}
	close(e){
		let wrap=document.querySelector('.loginWrap');
		ReactDOM.unmountComponentAtNode(wrap);
		wrap.remove();
	}
	render(){
		return(
			<div className="RegWrap">
				<div className="title">
					<span>注册</span>
					<p className="close" onClick={this.close}><i className="icon-remove"></i></p>
				</div>
				<Register/>
			</div>
		)
	}
}
class Login extends Component{
	constructor(props){
		super(props);

		this.close=this.close.bind(this);
		this.reg=this.reg.bind(this);
	}
	close(e){
		let wrap=document.querySelector('.loginWrap');
		ReactDOM.unmountComponentAtNode(wrap);
		wrap.remove();
	}
	reg(){
		let wrap=document.querySelector('.loginWrap');
		ReactDOM.unmountComponentAtNode(wrap);
		ReactDOM.render(
			<RegWindow />,
			wrap
		);
	}
	render(){
		return(
			<div id="login" ref={(dom)=>this.login=dom}>
				<p className="close" onClick={this.close}><i className="icon-remove"></i></p>
				<p className="title">登陆</p>
				<p className="username">
					<i className="icon-user"></i>
					<input type="text" ref={(dom)=>{this.username=dom}} placeholder="　用户名"/>
				</p>
				<p className="pwd">
					<i className="icon-key"></i>
					<input type="text" ref={(dom)=>{this.pwd=dom}} placeholder="　密码"/>
				</p>
				<p className="load">登陆</p>
				<p className="bottom"><span onClick={this.reg}>注册</span><span>忘记密码</span></p>
			</div>
		)
	}
}

class TopHead extends Component{
	constructor(props){
		super(props);

		this.login=this.login.bind(this)
	}
	login(){
		let loginWrap=document.createElement('div');
		loginWrap.className='loginWrap';
		document.body.append(loginWrap);
		ReactDOM.render(
			<Login />,
			loginWrap
		);
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
					<span className="login" onClick={this.login}>登陆</span>
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