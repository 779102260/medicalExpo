import connect from '../context.js';
class Footer extends PureComponent{
	constructor(props){
		super(props)
	}

	render(){
		let lan=this.props.ctx.lan;
		return(
			<div id="footer">
				<div>
					<div>
						<h3>{lan.contactUs}</h3>
						<p className="name"><i className="icon-user-md"></i>{lan.contactUss[0]}</p>
						<p><i className="icon-phone-sign"></i>{lan.contactUss[1]}</p>
						{/*<p><i className="icon-envelope-alt"></i>{lan.contactUss[2]}</p>*/}
					</div>
				</div>
				<div>
					京ICP备11012836-4
				</div>
			</div>
		)
	}
}

export default connect(Footer)