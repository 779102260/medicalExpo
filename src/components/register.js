import {TopHead} from './header.js';
import connect from '../context.js';

class Register extends Component{

	constructor(props){
		super(props);
		this.submit=this.submit.bind(this);
		this.checkEmail=this.checkEmail.bind(this);
		this.checkUserName=this.checkUserName.bind(this);
		this.checkPhone=this.checkPhone.bind(this);
		this.checkPwd=this.checkPwd.bind(this);
		this.checkPwd2=this.checkPwd2.bind(this);
		this.noEmpty=this.noEmpty.bind(this);
	}
	componentWillReceiveProps(nextProps){
        window.scrollTo(0,0)
    }
	submit(){
		if(this.check()){
			$.ajax({
				// url:'http://192.168.1.2:8080/pr-manage/login/post',
				url:'login/post',
				type:'POST',
				data:{
					'username':document.querySelector('.email').value,
					'truename':document.querySelector('.username').value,
					'sex':document.querySelector('input[name="sex"]:checked').value,
					'password':document.querySelector('.pwd').value,
					'area1':1,//?
					'area2':document.querySelector('.area').value,
					'zhiwu':document.querySelector('.job').value,
					'mobile':document.querySelector('.phone').value,
					'company':document.querySelector('.company').value,
					'comtype':document.querySelector('.type').value,
					'nums':document.querySelector('.personNum').value,
					'indusPid':document.querySelector('.belongArea').value,
					'address':document.querySelector('.cpAddress').value,
					'domain':document.querySelector('.cpSite').value,
					'summary':document.querySelector('.cpInfo').value,
					'purpose':document.querySelector('input[name="purpose"]:checked').value,
					cid: 31 //
				},
				success:function (msg){
					if(msg.code==='200'){
						TopHead.prototype.login();
					}
				}
			});
		}
	}
	check(){
		let result=
			this.checkEmail() && 
			this.checkUserName() && 
			this.checkPhone() && 
			this.checkPwd() && 
			this.checkPwd2() &&
			this.checkNoEmpty(document.querySelector('input[name="sex"]:checked')) &&
			this.checkNoEmpty(document.querySelector('.area')) &&
			this.checkNoEmpty(document.querySelector('.job')) &&
			this.checkNoEmpty(document.querySelector('.phone')) &&
			this.checkNoEmpty(document.querySelector('.company')) &&
			this.checkNoEmpty(document.querySelector('.type')) &&
			this.checkNoEmpty(document.querySelector('.personNum')) &&
			this.checkNoEmpty(document.querySelector('.belongArea')) &&
			this.checkNoEmpty(document.querySelector('.cpAddress')) &&
			// this.checkNoEmpty(document.querySelector('.cpSite')) &&
			// this.checkNoEmpty(document.querySelector('.cpInfo')) &&
			this.checkNoEmpty(document.querySelector('input[name="purpose"]:checked'));
		if(result){
			return true;
		}
		
		//ajax
	}
	checkNoEmpty(ele){
		let val=ele.value;
		if(!val){
			ele.parentNode.querySelector('.des').className+=' notValidated';
			return false;
		}else{
			ele.parentNode.querySelector('.des') &&
			(ele.parentNode.querySelector('.des').className='des');
			return true;
		}
	}
	checkEmail(){
		let lan=this.props.ctx.lan;

		let ele=document.querySelector('.email');
		if(!this.checkNoEmpty(ele)){
			return;
		}
		if(ele.value.indexOf('@')==-1){
			ele.nextElementSibling.className+=' notValidated';
			ele.nextElementSibling.innerText='* '+lan.emailError;
			return false;
		}else{
			ele.nextElementSibling.className='des';
			ele.nextElementSibling.innerText='* '+lan.required;
			return true;
		}
	}
	checkUserName(e){
		let target;
		if(e===undefined){
			target=document.querySelector('.username')
		}else{
			target=e.target
		}
		return this.checkNoEmpty(target);
	}
	checkPhone(e){
		let lan=this.props.ctx.lan;

		let ele=document.querySelector('.phone');
		if(!this.checkNoEmpty(ele)){
			return false;
		}
		let reg=/[\S]/;
		let val=ele.value;
		if(!reg.test(val)){
			ele.nextElementSibling.className+=' notValidated';
			ele.nextElementSibling.innerText='* '+lan.phoneError;
			return false;
		}else{
			ele.nextElementSibling.className='des';
			ele.nextElementSibling.innerText='* '+lan.required;
			return true;
		}
	}
	checkPwd(e){
		let lan=this.props.ctx.lan;

		let ele=document.querySelector('.pwd');
		if(!this.checkNoEmpty(ele)){
			return false;
		}
		this.checkPwd2();

		let val=ele.value;
		if(val.toString().length<	6){
			ele.parentNode.querySelector('.des').className+=' notValidated';
			ele.parentNode.querySelector('.des').innerText='* '+lan.pwdLen6;
			return false;
		}else{
			ele.parentNode.querySelector('.des').className='des';
			ele.parentNode.querySelector('.des').innerText='* '+lan.required;
			return true;
		}
	}
	checkPwd2(e){
		let lan=this.props.ctx.lan;

		let ele=document.querySelector('.pwd2');
		if(!this.checkNoEmpty(ele)){
			return false;
		}
		let pwd=document.querySelector('.pwd').value;
		let pwd2=ele.value;
		if(pwd!==pwd2){
			ele.parentNode.querySelector('.des').className+=' notValidated';
			ele.parentNode.querySelector('.des').innerText='* '+lan.pwdNotCommon;
			return false;
		}else{
			ele.parentNode.querySelector('.des').className='des';
			ele.parentNode.querySelector('.des').innerText='* '+lan.required;
			return true;
		}
	}

	noEmpty(e){
		let target=e.target;
		if(!this.checkNoEmpty(target)){
			
		};
	}
	render(){
		let lan=this.props.ctx.lan;
		return(
			<div id="register">
				<h4>{lan.baseInfo}</h4>
				<ul>
					<li>
						<span>{lan.countEmail}</span>
						<input type="text" className="email" onBlur={this.checkEmail}/>
						<span className="des">{lan.required}</span>
					</li>
					<li>
						<span>{lan.reallyName}</span>
						<input type="text" className="username" onBlur={this.checkUserName}/>
						<span className="des">{lan.required}</span>
					</li>
					<li>
						<span>{lan.sex}</span>
						<input type="radio" name="sex" value="male" defaultChecked/><label htmlFor="">{lan.male}</label>
						<input type="radio" name="sex" value="female"/><label htmlFor="">{lan.female}</label>
						<span className="des">{lan.required}</span>
					</li>
					<li>
						<span>{lan.pwd}</span>
						<input type="password" className="pwd" onBlur={this.checkPwd}/>
						<span className="des">{lan.required}</span>
					</li>
					<li>
						<span>{lan.pwdConfirm}</span>
						<input type="password" className="pwd2" onBlur={this.checkPwd2}/>
						<span className="des">{lan.required}</span>
					</li>
					<li>
						<span>{lan.area}</span>
						<select type="password" className="area" onBlur={this.noEmpty}>
							{
								lan.areas.map((item,i)=>{
									return <option value={item[0]} key={item[0]}>{item[1]}</option>
								})
							}
						</select>
						<span className="des">{lan.required}</span>
					</li>
					<li>
						<span>{lan.job}</span>
						<input type="text" className="job" onBlur={this.noEmpty}/>
						<span className="des">{lan.required}</span>
					</li>
					<li>
						<span>{lan.connectPhone}</span>
						<input type="text" className="phone" onBlur={this.noEmpty}/>
						<span className="des">{lan.required}</span>
					</li>
				</ul>
				<h4>{lan.companyInfo}</h4>
				<ul>
					<li>
						<span>{lan.companyName}</span>
						<input type="text"  className="company" onBlur={this.noEmpty}/>
						<span className="des">{lan.required}</span>
					</li>
					<li>
						<span>{lan.mechanismType}</span>
						<select className="type" onBlur={this.noEmpty}>
							{
								lan.mechanismTypes.map((item,i)=>{
									return <option value={item[0]} key={i}>{item[1]}</option>
								})
							}
						</select>
						<select className="personNum" onBlur={this.noEmpty}>
							{
								lan.personNum.map((item,i)=>{
									return <option value={item[0]} key={i}>{item[1]}</option>
								})
							}
						</select>
						<span className="des">{lan.required}</span>
					</li>
					<li>
						<span>{lan.belongArea}</span>
						<select className="belongArea" onBlur={this.noEmpty}>
							{
								lan.belongAreas.map((item,i)=>{
									return <option value={item[0]} key={i}>{item[1]}</option>
								})
							}
						</select>
						<span className="des">{lan.required}</span>
					</li>
					<li>
						<span>{lan.companyAdress}</span>
						<input type="text" className="cpAddress" onBlur={this.noEmpty}/>
						<span className="des">{lan.required}</span>
					</li>
					<li>
						<span>{lan.companyWebSite}</span>
						<input type="text" className="cpSite"/>
					</li>
					<li>
						<span>{lan.companyIntr}</span>
						<textarea name="" id="" rows="5" className="cpInfo">

						</textarea>
					</li>
					<li className="wanted">
						<span>{lan.wanted}</span>
						<input type="checkbox" name="purpose" value={lan.purpose1} defaultChecked/>
						<label>{lan.purpose1}</label>
		                <input type="checkbox" name="purpose" value={lan.purpose2} />
		                <label>{lan.purpose2}</label>
		                <input type="checkbox" name="purpose" value={lan.purpose3} />
		                <label>{lan.purpose3}</label>
		                <input type="checkbox" name="purpose" value={lan.purpose4} />
		                <label>{lan.purpose4}</label>
					</li>
				</ul>
				<h4>{lan.consumeIntr}</h4>
				<table>
					<thead>
						<tr>
							<td>{lan.consumeType}</td>
							<td>{lan.joinor}</td>
							<td>{lan.before201811}</td>
							<td>{lan.after201811}</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td rowSpan='2'>{lan.joinExpo}</td>
							<td>{lan.internal}</td>
							<td>￥ 2,800</td>
							<td>￥ 3,100</td>
						</tr>
						<tr>
							<td>{lan.abroad}</td>
							<td>$ 400</td>
							<td>$ 450</td>
						</tr>
						<tr>
							<td rowSpan='2'>{lan.joinExpoAndTrian}</td>
							<td>{lan.internal}</td>
							<td>￥ 3,800</td>
							<td>￥ 4,100</td>
						</tr>
						<tr>
							<td>{lan.abroad}</td>
							<td>$ 550</td>
							<td>$ 600</td>
						</tr>
					</tbody>
				</table>
				<h4>{lan.account}</h4>
				
				<table>
					<thead>
						<tr>
							<td>{lan.accountType}</td>
							<td>{lan.account}</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								{lan.accountRMB}
							</td>
							<td>
								{
									lan.accountRMBInfo.map((item,i)=>{
										return <p key={i}>{item}</p>
									})
								}
							</td>
						</tr>
						<tr>
							<td>Us Dollar Account</td>
							<td>
								<p>Bank Account: 91130078801000000108</p>
								<p>Company Name: Advanta Science Events （Beijing）Co.Ltd</p>
								<p>Swift Code: SPDBCNSH390</p>
								<p>Bank Name: Shanghai PudongDevelopment BankBeijing Br.HaidianyuanZhihang Sub—Br.</p>
								<p>Bank Address: Floor 1, China chemical industry building, 62 west north fourth ring road</p>
							</td>
						</tr>
					</tbody>
				</table>


				<p className="confirm" onClick={this.submit}>{lan.submit}</p>
			</div>
		)
	}
}

export default connect(Register)