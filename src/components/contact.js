import connect from '../context.js';


class Contact extends Component{
	constructor(props){
		super(props)
	}
	componentWillReceiveProps(nextProps){
        window.scrollTo(0,0)
    }
	render(){
		let lan=this.props.ctx.lan;
		return(
			<div id="contact">
				<div>
					<h4 className="contact_title">
						{lan.consulting}
					</h4>
					{
						lan.consultings.map((item,i)=>{
							return (
								<div className="person" key={i}>
									<p className="name"><i className="icon-user-md"></i>{item[0]}</p>
									<p><i className="icon-phone-sign"></i>{item[1]}</p>
									<p><i className="icon-envelope-alt"></i>{item[2]}</p>
								</div>
							)
						})
					}
				</div>
				<div>
					<h4 className="contact_title">
						{lan.Investment}
					</h4>
					{
						lan.Investments.map((item,i)=>{
							return (
								<div className="person" key={i}>
									<p className="name"><i className="icon-user-md"></i>{item[0]}</p>
									<p><i className="icon-phone-sign"></i>{item[1]}</p>
									<p><i className="icon-envelope-alt"></i>{item[2]}</p>
								</div>
							)
						})
					}
				</div>
			</div>

		)
	}
}
export default  connect(Contact)