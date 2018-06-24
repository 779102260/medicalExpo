import Register from './register.js'

import logo from '../images/logo1.jpg'
import logoText from '../images/logo_text1.jpg'
import logoTextEn from '../images/logo_text2.jpg'

import connect from '../context.js';

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
		let lan=this.props.lan;
		let ctx={
			lan:lan
		}
		return(
			<div className="RegWrap">
				<div className="title">
					<span>{lan.register}</span>
					<p className="close" onClick={this.close}><i className="icon-remove"></i></p>
				</div>
				<Register ctx={ctx}/>
			</div>
		)
	}
}

class FindPWD extends PureComponent{
	constructor(props){
		super(props);
		
		this.checkEmail=this.checkEmail.bind(this);
		this.checkCode=this.checkCode.bind(this);
		this.checkPwd=this.checkPwd.bind(this);
		this.checkPwd2=this.checkPwd2.bind(this);
		this.nextStep=this.nextStep.bind(this);
		this.perStep=this.perStep.bind(this);
		this.submit=this.submit.bind(this);

	}
	close(e){
		let wrap=document.querySelector('.loginWrap');
		ReactDOM.unmountComponentAtNode(wrap);
		wrap.remove();
	}
	checkEmail(e){
		let lan=this.props.lan;

		let ele=this.step1.querySelector('.email');
		let value=ele.value;
		if(!value){
			ele.nextElementSibling.innerText='* '+lan.required;
			return false;
		}
		if(ele.value.indexOf('@')==-1){
			ele.nextElementSibling.innerText='* '+lan.emailError;
			return false;
		}else{
			ele.nextElementSibling.innerText='';
			return true;
		}
	}
	checkCode(e){
		let ele=this.step2.querySelector('.code');
		let value=ele.value;
		if(!value){
			ele.nextElementSibling.innerText='* '+lan.required;
			return false;
		}else{
			ele.nextElementSibling.innerText='';
			return true;
		}
		return true;
	}
	checkPwd(e){
		let ele=this.step2.querySelector('.pwd');
		let value=ele.value;
		if(!value){
			ele.nextElementSibling.innerText='* '+lan.required;
			return;
		}
		this.checkPwd2();

		if(value.toString().length<	6){
			ele.nextElementSibling.innerText='* '+lan.pwdLen6;
			return false;
		}else{
			ele.nextElementSibling.innerText='';
			return true;
		}
	}
	checkPwd2(e){
		let ele=this.step2.querySelector('.pwd2');
		let value=ele.value;
		if(!value){
			ele.nextElementSibling.innerText='*'+lan.required;
			return;
		}
		let pwd=document.querySelector('.pwd').value;
		let pwd2=value;
		if(pwd!==pwd2){
			ele.nextElementSibling.innerText='* '+lan.pwdNotCommon;
			return false;
		}else{
			ele.nextElementSibling.innerText='';
			return true;
		}
	}
	nextStep(e){
		if(this.checkEmail()){
			// $.ajax({
			// 	url:'xx1',
			// 	type:'post',
			// 	data:{
			// 		email:this.step1.querySelector('.email').value
			// 	},
			// 	success:function(msg){
					this.step1.className='body _hide';
					this.step2.className='body';
			// 	}
			// });
		}
	}
	perStep(e){
		this.step1.className='body';
		this.step2.className='body _hide';
	}
	submit(){
		let  oThis=this;
		if(this.checkCode() && this.checkPwd() && this.checkPwd2()){
			// $.ajax({
			// 	url:'xx2',
			// 	type:'post',
			// 	data:{
			// 		code:this.step2.querySelector('.code').value,
			// 		pwd:this.step1.querySelector('.pwd').value
			// 	},
			// 	success:function(msg){
					oThis.close();
					TopHead.prototype.login();
			// 	}
			// });
		}
	}
	render(){
		let lan=this.props.lan;
		return(
			<div className="findPWD">
				<div className="title">
					<span>{lan.findBackPwd}</span>
					<p className="close" onClick={this.close}><i className="icon-remove"></i></p>
				</div>
				<div className="body"  ref={(dom)=>this.step1=dom}>
					<p className="row">
						<span className="text">
							{lan.pleaseInputEmail}
						</span>
						<input type="text" className="email" onBlur={this.checkEmail}/>
						<span className="tishi"></span>
					</p>
					<p className="btn">
						<span onClick={this.nextStep}>{lan.nextStep}</span>
					</p>
				</div>
				<div className="body _hide" ref={(dom)=>this.step2=dom}>
					<p className="row">
						<span className="text">
							{lan.emailCode}
						</span>
						<input type="text" className="code" onBlur={this.checkCode}/>
						<span className="tishi"></span>
					</p>
					<p className="row">
						<span className="text">
							{lan.newPwd}
						</span>
						<input type="password" className="pwd" onBlur={this.checkPwd}/>
						<span className="tishi"></span>
					</p>
					<p className="row">
						<span className="text">
							{lan.inputAgain}
						</span>
						<input type="password" className="pwd2" onBlur={this.checkPwd2}/>
						<span className="tishi"></span>
					</p>
					<p className="btn">
						<span onClick={this.perStep}>{lan.perStep}</span>
						<span onClick={this.submit}>{lan.complete}</span>
					</p>
				</div>
			</div>
		)
	}
}

class Login extends Component{
	constructor(props){
		super(props);

		this.close=this.close.bind(this);
		this.reg=this.reg.bind(this);
		this.findPWD=this.findPWD.bind(this);
		this.login=this.login.bind(this);
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
			<RegWindow lan={this.props.lan}/>,
			wrap
		);
	}
	findPWD(){
		let wrap=document.querySelector('.loginWrap');
		ReactDOM.unmountComponentAtNode(wrap);
		ReactDOM.render(
			<FindPWD lan={this.props.lan}/>,
			wrap
		);
	}
	login(){
		let oThis=this;
		let lan=this.props.lan;
		if(!this.username.value || !this.pwd.value){
			return;
		}
		$.ajax({
			url:'login/put',
			// url:'http://192.168.1.2:8080/pr-manage/login/put',
			type:'post',
			data:{
				username:this.username.value,
				password:this.pwd.value
			},
			success:function(msg){
				document.querySelector('.errMsg').innerText='';
				if(msg.code==="4041"){
					document.querySelector('.errMsg').innerText=lan.usernameNoEmpty
				}
				if(msg.code==="4042"){
					document.querySelector('.errMsg').innerText=lan.pwdNoEmpty
				}
				if(msg.code==="4043"){
					document.querySelector('.errMsg').innerText=lan.usernameNotFound
				}
				if(msg.code==="504"){
					document.querySelector('.errMsg').innerText=lan.pwdError
				}
				if(msg.code==="304"){
					document.querySelector('.errMsg').innerText=lan.emailUsed
				}
				if(msg.code==="200"){
					oThis.close();
					location.href=location.href;
				}
			}
		})
	}
	clearErrMsg(){
		document.querySelector('.errMsg').innerText='';
	}
	render(){
		let lan=this.props.lan;
		return(
			<div id="login" ref={(dom)=>this.login=dom}>
				<p className="close" onClick={this.close}><i className="icon-remove"></i></p>
				<p className="title">{lan.login}</p>
				<p className="username">
					<i className="icon-user"></i>
					<input type="text" ref={(dom)=>{this.username=dom}} placeholder={" "+lan.username} onFocus={this.clearErrMsg}/>
				</p>
				<p className="pwd">
					<i className="icon-key"></i>
					<input type="password" ref={(dom)=>{this.pwd=dom}} placeholder={" "+lan.pwd} onFocus={this.clearErrMsg}/>
				</p>
				<p className="errMsg"></p>
				<p className="load" onClick={this.login}>{lan.login}</p>
				<p className="bottom"><span onClick={this.reg}>{lan.register}</span>{/*<span onClick={this.findPWD}>{lan.findPwd}</span>*/}</p>
			</div>
		)
	}
}


class TopHead extends Component{
	constructor(props){
		super(props);
		
		this.state=({
			logined:false,
			username:''
		});
		this.login=this.login.bind(this);
		this.toggleLanguage=this.toggleLanguage.bind(this);
	}
	componentDidMount(){
		let oThis=this;
		$.ajax({
			url:'user/get',
			// url:'http://192.168.1.2:8080/pr-manage/user/get',
			type:'post',
			success:function(msg){
				if(msg.code==='401'){
					oThis.setState({
						logined:false,
						username:''
					});
				}else if(msg.code==='200'){
					oThis.setState({
						logined:true,
						username:msg.data.username
					});
				}
			}
		})
	}
	login(){
		let loginWrap=document.createElement('div');
		loginWrap.className='loginWrap';
		document.body.append(loginWrap);
		ReactDOM.render(
			<Login lan={this.props.ctx.lan}/>,
			loginWrap
		);
	}
	toggleLanguage(e){
		let type=e.currentTarget.querySelector('span').className.indexOf('china')!==-1?'zh':'en';
		this.props.ctx.toggleLanguage(type);
	}
	render(){
		let lan=this.props.ctx.lan;
		let logined=this.state.logined;
		let loginedUserName=logined && this.state.username;
		return(
			<div id="topHead">
				<div className="logoPic">
					<img src={logo}/>
				</div>
				<div className="left">
					{/*<p className="logo">第二届国际医疗器械设计（中国）大会</p>*/}
					<img src={this.props.ctx.selected==='zh'?logoText:logoTextEn} alt=""/>
					{/*<div className="logo">
						<p>第二届世界医疗器械设计（中国）大会</p>
						<p>暨首届中国国际医疗器械创新技术展览会</p>
					</div>*/}
					<span className="icon-map-marker address"></span><span className="address">{lan.address}</span>
				</div>
				{/*<div className="center">
					<p><span className="icon-map-marker"></span><span>{lan.address}</span></p>
				</div>*/}
				<div className="right">
					<div className="toggleLanguage">
						<a onClick={this.toggleLanguage}><span className="china"></span>中文</a>
						<span> | </span>
						<a onClick={this.toggleLanguage}><span className="english"></span>English</a>
					</div>
					<span className="login" onClick={this.login}>{logined?loginedUserName:lan.login}</span>
				</div>
			</div>
		)
	}
}

const TopHeadConnect = connect(TopHead);

export default TopHeadConnect

export {TopHead}