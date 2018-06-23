class Register extends Component{
	constructor(props){
		super(props);
		this.submit=this.submit.bind(this);
		this.checkUserName=this.checkUserName.bind(this);
		this.checkPhone=this.checkPhone.bind(this);
		this.checkPwd=this.checkPwd.bind(this);
		this.checkPwd2=this.checkPwd2.bind(this);
	}
	submit(){
		if(this.check()){

		}
	}
	check(){
		if(this.checkUserName() && this.checkPhone() && this.checkPwd() && this.checkPwd2()){
			return;
		}

		//ajax
	}
	checkNoEmpty(ele){
		let val=ele.value;
		if(!val){
			ele.nextElementSibling.className+=' notValidated';
			return false;
		}else{
			ele.nextElementSibling.className='des';
			return true;
		}
	}
	checkUserName(e){
		return this.checkNoEmpty(e.target);
	}
	checkPhone(e){
		let ele=document.querySelector('.phone');
		if(!this.checkNoEmpty(ele)){
			return false;
		}
		let reg=/^[1][3,4,5,7,8][0-9]{9}$/;
		let val=ele.value;
		if(!reg.test(val)){
			ele.nextElementSibling.className+=' notValidated';
			ele.nextElementSibling.innerText='* 填写的手机号有误';
			return false;
		}else{
			ele.nextElementSibling.className='des';
			ele.nextElementSibling.innerText='* 必填';
			return true;
		}
	}
	checkPwd(e){
		let ele=document.querySelector('.pwd');
		if(!this.checkNoEmpty(ele)){
			return false;
		}
		let val=ele.value;
		if(val.toString().length<	6){
			ele.nextElementSibling.className+=' notValidated';
			ele.nextElementSibling.innerText='* 密码长度大于6';
			return false;
		}else{
			ele.nextElementSibling.className='des';
			ele.nextElementSibling.innerText='* 必填';
			return true;
		}
	}
	checkPwd2(e){
		let ele=document.querySelector('.pwd2');
		if(!this.checkNoEmpty(ele)){
			return false;
		}
		let pwd=document.querySelector('.pwd').value;
		let pwd2=ele.value;
		if(pwd!==pwd2){
			ele.nextElementSibling.className+=' notValidated';
			ele.nextElementSibling.innerText='* 两次输入密码不一致';
			return false;
		}else{
			ele.nextElementSibling.className='des';
			ele.nextElementSibling.innerText='* 必填';
			return true;
		}
	}
	render(){
		return(
			<div id="register">
				<h4>基本资料</h4>
				<ul>
					<li>
						<span>姓名</span>
						<input type="text" className="username" onBlur={this.checkUserName}/>
						<span className="des">* 必填</span>
					</li>
					<li>
						<span>手机号</span>
						<input type="text" className="phone" onBlur={this.checkPhone}/>
						<span className="des">* 必填</span>
					</li>
					<li>
						<span>密码</span>
						<input type="password" className="pwd" onBlur={this.checkPwd}/>
						<span className="des">* 必填</span>
					</li>
					<li>
						<span>确认密码</span>
						<input type="password" className="pwd2" onBlur={this.checkPwd2}/>
						<span className="des">* 必填</span>
					</li>
				</ul>
				<h4>公司信息</h4>
				<ul>
					<li>
						<span>公司名称</span>
						<input type="text"/>

					</li>
					<li>
						<span>机构类型</span>
						<input type="text"/>
					</li>
					<li>
						<span>所属领域</span>
						<input type="text"/>
					</li>
					<li>
						<span>单位地址</span>
						<input type="text"/>
					</li>
					<li>
						<span>单位网址</span>
						<input type="text"/>
					</li>
					<li>
						<span>参会意向</span>
						<input type="text"/>
					</li>
				</ul>

				<p className="confirm" onClick={this.submit}>提交</p>
			</div>
		)
	}
}

export default Register