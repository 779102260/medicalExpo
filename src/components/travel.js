//import time from '../images/travel_time.jpg'
import connect from '../context.js';

import intrEn from '../images/intr.jpg';
import intr from '../images/intr_cn.jpg';

class Travel extends Component{
	constructor(props){
		super(props);
		this.state={
			selected:"10"
		}
		this.changeTab=this.changeTab.bind(this);
	}
	componentWillReceiveProps(nextProps){
        window.scrollTo(0,0)
    }
	changeTab(e){
		let target=e.target;
		let index=target.getAttribute('data-tab');
		this.setState({
			selected:index
		});
	}
	render(){
		let lan=this.props.ctx.lan;

		let Page=
		this.state.selected==10?
		Travel10Connect:this.state.selected==11?
		Travel11Connect:Travel12Connect;
		return(
			<div id="travel">
				<p>
					<img src={this.props.ctx.selected==='zh'?intr:intrEn} /> 
				</p>
				<div className='tab clearfix'>
					<p onClick={this.changeTab} data-tab="10" className={this.state.selected==10?'selected':''}>12.10 {lan.mon}</p>
					<p onClick={this.changeTab} data-tab="11" className={this.state.selected==11?'selected':''}>12.11 {lan.tues}</p>
					<p onClick={this.changeTab} data-tab="12" className={this.state.selected==12?'selected':''}>12.12 {lan.wed}</p>
				</div>

				<div className="travelDetail">
					<Page />
				</div>
			</div>
		)
	}
}

class Travel10 extends Component{
	render(){
		let lan=this.props.ctx.lan;
		return(
			<div className="travel10">
				<div className="travelModule">
					<h3><i className="icon-stethoscope"> </i>{lan.workshop} <span className="icon-time">10:00 - 17:30</span></h3>
					<p className="address"> <span className="icon-map-marker"></span>{lan.Conference2A}</p>
					<p className="detail">
						{
							lan.workshopDetail.map((item,i)=>{
								return <p key={i}>{item}</p>
							})
						}
					</p>
				</div>
				<div className="travelModule">
					<h3><i className="icon-stethoscope"> </i> {lan.newworkshop} <span className="icon-time">10:00 - 17:30</span></h3>
					<p className="address"> <span className="icon-map-marker"></span>{lan.Conference3}</p>
					<p className="detail">
						{
							lan.newworkshopDetail.map((item,i)=>{
								return <p key={i}>{item}</p>
							})
						}
					</p>
				</div>
			</div>
		)
	}
}
const Travel10Connect=connect(Travel10);

class Travel11 extends Component{
	render(){
		let lan=this.props.ctx.lan;
		return(
			<div className="travel10">
				<div className="travelModule">
					<h3>
						<i className="icon-stethoscope"> </i>{lan.regAndSign} 
						<span className="icon-time">8:00 - 9:00 AM</span>
					</h3>
				</div>
				<div className="travelModule">
					<h3>
						<i className="icon-stethoscope"> </i>{lan.welcomeMeeting} 
						<span className="icon-time">9:00 - 11:00 AM</span>
					</h3>
					<p className="address"> <span className="icon-map-marker"></span>{lan.Conference2}</p>
					<div className="detail">
						{lan.travel10Content[0]}
						<ul className="list">
							<li>
								<span><i className="icon-comments-alt"></i>{lan.travel10Content[1]}</span>
								<span>{lan.travel10Content[2]}</span>
							</li>
							<li>
								<span><i className="icon-comments-alt"></i>{lan.travel10Content[3]}</span>
							</li>
							<li>
								<span><i className="icon-comments-alt"></i>{lan.travel10Content[4]}</span>
								<span>{lan.travel10Content[5]}</span>
							</li>
						</ul>
					</div>

				</div>

				<div className="travelModule">
					<h3>
						<i className="icon-stethoscope"> </i>{lan.restAndComm}
						<span className="icon-time">11:00-11:30 AM</span>
					</h3>
					<p className="address"> <span className="icon-map-marker"></span>{lan.Conference35}</p>
				</div>

				<div className="travelModule">
					<h3>
						<i className="icon-stethoscope"> </i>{lan.lunchMeeting} 
						<span className="icon-time">11:30 AM -12:30 PM</span>
					</h3>
					<p className="address"> <span className="icon-map-marker"></span>{lan.Conference2}</p>
					<div className="detail">
						<ul className="list">
							<li>
								<span><i className="icon-comments-alt"></i>{lan.travel11Content[0]}</span>
								<span>{lan.travel11Content[1]}</span>
							</li>
						</ul>
					</div>
				</div>

				<div className="travelModule">
					<h3>
						<i className="icon-stethoscope"> </i>{lan.restAndComm} 
						<span className="icon-time">12:30-1:00 PM</span>
					</h3>
					<p className="address"> <span className="icon-map-marker"></span>{lan.Conference35}</p>
				</div>

				<div className="travelModule">
					<h3>
						<i className="icon-stethoscope"> </i>{lan.operAndExp} 
						<span className="icon-time">2:30 - 3:30 PM</span>
					</h3>
					<p className="address"><span className="icon-map-marker"></span>{lan.Conference23}</p>
					<div className="detail">
						<ul className="list">
							<li>
								<span><i className="icon-comments-alt"></i> {lan.sceneOper} </span>
								<span>Kenneth Liao, UMN</span>
								<span>{lan.Conference2A250}</span>
							</li>
							<li>
								<span><i className="icon-comments-alt"></i> {lan.travel11Content[2]} </span>
								<span>Jazmin Aguado, Barcelona Supercomputing & Sudesh Sivarasu, University of Cape Town</span>
								<span>{lan.Conference2B250}</span>
							</li>
							<li>
								<span><i className="icon-comments-alt"></i> CFDA / IMDRF / USFDA： </span>
								<span>Organizer TBD</span>
								<span>{lan.Conference2C250}</span>
							</li>
							<li>
								<span><i className="icon-comments-alt"></i>{lan.travel11Content[3]}</span>
								<span>Mayo (I), Sandford, Cleveland, Harvard</span>
								<span>{lan.Conference3500}</span>
							</li>
						</ul>
					</div>
				</div>

				<div className="travelModule">
					<h3>
						<i className="icon-stethoscope"> </i>{lan.centerTopic} 
						<span className="icon-time">4:00 - 5:00 PM</span>
					</h3>
					<p className="address"> <span className="icon-map-marker"></span>{lan.Conference2}</p>
					<div className="detail">
						<ul className="list">
							<li>
								<span><i className="icon-comments-alt"></i> {lan.travel11Content[4]} </span>
								<span>{lan.travel11Content[5]}</span>
							</li>
						</ul>
					</div>
				</div>

				<div className="travelModule">
					<h3>
						<i className="icon-stethoscope"> </i>{lan.restAndVist}
						<span className="icon-time">5:00 - 5:30 PM</span>
					</h3>
					<p>{lan.freeActive}</p>
				</div>

				<div className="travelModule">
					<h3>
						<i className="icon-stethoscope"> </i>{lan.active} 
						<span className="icon-time">5:30 - 7:00 PM</span>
					</h3>
					<p className="address"> <span className="icon-map-marker"></span>{lan.travel11Content[5]}</p>
					<div className="detail">
						{lan.travel11Content[6]}
					</div>
				</div>
			</div>	
		)
	}
}
const Travel11Connect=connect(Travel11);

class Travel12 extends Component{
	render(){
		let lan=this.props.ctx.lan;
		return(
			<div className="travel10">
				<div className="travelModule">
					<h3>
						<i className="icon-stethoscope"> </i>{lan.regAndSign} 
						<span className="icon-time">8:00 - 9:00 AM</span>
					</h3>
				</div>
				<div className="travelModule">
					<h3>
						<i className="icon-stethoscope"> </i>{lan.centerTopic}
						<span className="icon-time">9:00 - 10:30 AM</span>
					</h3>
					<p className="address"> <span className="icon-map-marker"></span>{lan.Conference2}</p>
					<div className="detail">
						<ul className="list">
							<li>
								<span><i className="icon-comments-alt"></i>{lan.travel12Content[0]}</span>
								<span>{lan.travel12Content[1]}</span>
							</li>
							<li>
								<span><i className="icon-comments-alt"></i>{lan.travel12Content[2]}</span>
								<span>{lan.travel12Content[3]}</span>
							</li>
							<li>
								<span><i className="icon-comments-alt"></i>{lan.travel12Content[4]}</span>
							</li>
						</ul>
					</div>
				</div>
				
				<div className="travelModule">
					<h3>
						<i className="icon-stethoscope"> </i>{lan.restAndComm} 
						<span className="icon-time">10:30 - 11:00 AM</span>
					</h3>
					<p className="address"> <span className="icon-map-marker"></span>{lan.Conference35}</p>
				</div>

				<div className="travelModule">
					<h3>
						<i className="icon-stethoscope"> </i>{lan.lunchMeeting} 
						<span className="icon-time">11:00 AM -12:00 PM</span>
					</h3>
					<p className="address"> <span className="icon-map-marker"></span>{lan.Conference2}</p>
				</div>

				<div className="travelModule">
					<h3>
						<i className="icon-stethoscope"> </i>{lan.restAndComm} 
						<span className="icon-time">12:00 - 12:30 PM</span>
					</h3>
					<p className="address"> <span className="icon-map-marker"></span>{lan.Conference35}</p>
				</div>

				<div className="travelModule">
					<h3>
						<i className="icon-stethoscope"> </i>{lan.medicalAndExp}
						<span className="icon-time">12:30 - 1:30 PM</span>
					</h3>
					<p className="address"><span className="icon-map-marker"></span>{lan.Conference23}</p>
					<div className="detail">
						<ul className="list">
							<li>
								<span><i className="icon-comments-alt"></i>{lan.travel12Content[5]}</span>
								<span>Organizer TBD</span>
								<span>{lan.Conference2A250}</span>
							</li>
							<li>
								<span><i className="icon-comments-alt"></i>{lan.travel12Content[6]}</span>
								<span>Derek Mathers, Worrell</span>
								<span>{lan.Conference2B250}</span>
							</li>
							<li>
								<span><i className="icon-comments-alt"></i>{lan.travel12Content[7]}</span>
								<span>Gwen Fischer, Children's Hospitals</span>
								<span>{lan.Conference2C250}</span>
							</li>
							<li>
								<span><i className="icon-comments-alt"></i>{lan.travel12Content[8]}</span>
								<span>Mayo (I), Sandford, Cleveland, Harvard</span>
								<span>{lan.Conference3500}</span>
							</li>
						</ul>
					</div>
				</div>

				<div className="travelModule">
					<h3>
						<i className="icon-stethoscope"> </i>{lan.restAndComm}
						<span className="icon-time">1:30 - 2:00 PM</span>
					</h3>
					<p className="address"> <span className="icon-map-marker"></span>{lan.Conference35}</p>
				</div>

				<div className="travelModule">
					<h3>
						<i className="icon-stethoscope"> </i>{lan.medicalExp} 
						<span className="icon-time">2:00 - 3:00 PM</span>
					</h3>
					<p className="address"><span className="icon-map-marker"></span>{lan.Conference23}</p>
					<div className="detail">
						<ul className="list">
							<li>
								<span><i className="icon-comments-alt"></i>{lan.travel12Content[9]}</span>
								<span>David & Joe, Neos</span>
								<span>{lan.Conference2A250}</span>
							</li>
							<li>
								<span><i className="icon-comments-alt"></i>{lan.travel12Content[10]}</span>
								<span>Patterson Law</span>
								<span>{lan.Conference2B250}</span>
							</li>
							<li>
								<span><i className="icon-comments-alt"></i>{lan.travel12Content[11]}</span>
								<span>David Melander, Neos</span>
								<span>{lan.Conference2C250}</span>
							</li>
							<li>
								<span><i className="icon-comments-alt"></i>{lan.travel12Content[12]}</span>
								<span>Mayo (I), Sandford, Cleveland, Harvard</span>
								<span>{lan.Conference3500}</span>
							</li>
						</ul>
					</div>
				</div>

				<div className="travelModule">
					<h3>
						<i className="icon-stethoscope"> </i>{lan.restAndComm}
						<span className="icon-time">3:00 - 3:30 PM </span>
					</h3>
					<p className="address"> <span className="icon-map-marker"></span>{lan.Conference35}</p>
				</div>

				<div className="travelModule">
					<h3>
						<i className="icon-stethoscope"> </i>{lan.medicalAndExp} 
						<span className="icon-time">3:30 - 4:30 PM</span>
					</h3>
					<p className="address"><span className="icon-map-marker"></span>{lan.Conference23}</p>
					<div className="detail">
						<ul className="list">
							<li>
								<span><i className="icon-comments-alt"></i>{lan.travel12Content[13]}</span>
								<span>Bevan Yueh, UMN</span>
								<span>{lan.Conference2A250}</span>
							</li>
							<li>
								<span><i className="icon-comments-alt"></i>{lan.travel12Content[14]}</span>
								<span>Clark Chen, UMN</span>
								<span>{lan.Conference2B250}</span>
							</li>
							<li>
								<span><i className="icon-comments-alt"></i>{lan.travel12Content[15]}</span>
								<span>David Melander, Neos</span>
								<span>{lan.Conference2C250}</span>
							</li>
							<li>
								<span><i className="icon-comments-alt"></i>{lan.travel12Content[16]}</span>
								<span>Mayo (I), Sandford, Cleveland, Harvard</span>
								<span>{lan.Conference3500}</span>
							</li>
						</ul>
					</div>
				</div>

				<div className="travelModule">
					<h3>
						<i className="icon-stethoscope"> </i>{lan.restAndComm} 
						<span className="icon-time">4:30 - 5:00 PM </span>
					</h3>
					<p className="address"> <span className="icon-map-marker"></span>{lan.Conference35}</p>
				</div>

				<div className="travelModule">
					<h3>
						<i className="icon-stethoscope"> </i>{lan.colseTopic} 
						<span className="icon-time">5:00 - 6:00 PM </span>
					</h3>
					<p className="address"> <span className="icon-map-marker"></span>{lan.Conference2}</p>
					<div className="detail">
						 {lan.travel12Content[17]}
					</div>
				</div>
			</div>
		)
	}
}
const Travel12Connect=connect(Travel12);

export default connect(Travel);