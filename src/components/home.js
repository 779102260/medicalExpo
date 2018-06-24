import cyclePic1 from '../images/cycle/cycle1.jpg'
import cyclePic2 from '../images/cycle/cycle2.jpg'
import cyclePic3 from '../images/cycle/cycle3.jpg'
import cyclePic4 from '../images/cycle/cycle4.jpg'
import cyclePic5 from '../images/cycle/cycle5.jpg'
import cyclePic6 from '../images/cycle/cycle6.jpg'
import cyclePic7 from '../images/cycle/cycle7.jpg'
import cyclePic8 from '../images/cycle/cycle8.jpg'

import cyclePic1EN from '../images/cycleEn/1 (1).jpg'
import cyclePic2EN from '../images/cycleEn/1 (2).jpg'
import cyclePic3EN from '../images/cycleEn/1 (3).jpg'
import cyclePic4EN from '../images/cycleEn/1 (4).jpg'
import cyclePic5EN from '../images/cycleEn/1 (5).jpg'
import cyclePic6EN from '../images/cycleEn/1 (6).jpg'
import cyclePic7EN from '../images/cycleEn/1 (7).jpg'
import cyclePic8EN from '../images/cycleEn/1 (8).jpg'
// import signUp from '../images/sign_up.jpg'

import Introduction from './introduction.js'

import {withRouter} from "react-router-dom";
import {BaiduMap} from './_common.js'
import Supportors from './supportors.js'

import connect from '../context.js';

class CyclePic extends PureComponent{
	constructor(props){
		super(props);

		this.toggleToPic=this.toggleToPic.bind(this);
		this.togglePic=this.togglePic.bind(this);
		this.stopToggle=this.stopToggle.bind(this);
		this.nextPic=this.nextPic.bind(this);
		this.prePic=this.prePic.bind(this);
		this.timer;
		this.state={
			index:0
		}
	}
	componentDidMount(){
		// onSwipeLeft={this.nextPic} onSwipeRight={this.prePic}
		// var hammer = new Hammer(this.wrap);
		$(this.wrap).swipeLeft(this.nextPic);
		$(this.wrap).swipeRight(this.prePic);
		this.togglePic();
	}
	componentWillUnMount(){
		this.stopToggle();
	}
	togglePic(){
		this.timer=setInterval(()=>{
			this.setState((preState,currentProps)=>{
				let nextIndex=preState.index+1;
				if(nextIndex>currentProps.pics.length-1){
					nextIndex=0;
				}
				return {index:nextIndex}
			});
		},2000);
	}
	stopToggle(){
		clearInterval(this.timer);
	}
	toggleToPic(e){
		let index=e.target.getAttribute('data-index');
		this.setState({index:Number(index)});
	}
	nextPic(e){
		this.stopToggle();

		let index=e.target.getAttribute('data-index');
		if(index==3){
			index=0;
		}else{
			index++;
		}
		this.setState({index:Number(index)});

		this.togglePic();
	}
	prePic(e){
		this.stopToggle();

		let index=e.target.getAttribute('data-index');
		if(index==0){
			index=3;
		}else{
			index--;
		}
		this.setState({index:Number(index)});

		this.togglePic();
	}
	render(){
		// let wrapClass={
		// 	width:this.props.width+'px',
		// 	height:this.props.height+'px',
		// 	overflow:'hidden',
		// 	position:'relative'
		// }
		// let imgClass={
		// 	width:this.props.width+'px',
		// 	height:this.props.height+'px',
		// 	overflow:'hidden'
		// }
		// let hide={
		// 	display:'none'
		// }
		// let show={
		// 	display:'block'
		// }
		let index=this.state.index;
		
		let picList=this.props.pics.map((v,i)=>{
			// let img=i===index?show:hide;
			return <img src={v} key={i} data-index={i} className={"imgClass "+(i===index?'show':'hide')}  />
		});
		
		// let ulClass={
		// 	position:'absolute',
		// 	bottom:'5px',
		// 	right:'5px'
		// }
		// let liClass={
		// 	listStyle:'none',
		// 	float:'left',
		// 	background:'#ccc',
		// 	opacity:'0.8',
		// 	width:'10px',
		// 	height:'10px',
		// 	borderRadius:'10px',
		// 	margin:'0 5px',
		// 	cursor:'pointer'
		// }
		// let liSelectedClass={
		// 	background:'#fff'
		// }
		let pointList=this.props.pics.map((v,i)=>{
			// let li=i===index?liSelectedClass:{};
			// let mergeClass=Object.assign({},liClass,li);
			return <li key={i} data-index={i} className={'liClass '+(i===index?'liSelectedClass':'')} onClick={this.toggleToPic}></li>
		});
		return(
			<div className="wrapClass" onMouseOver={this.stopToggle} onMouseOut={this.togglePic} ref={(dom)=>{this.wrap=dom}}>
				{picList}
				<ul className='ulClass clearfix'>
					{pointList}
				</ul>
			</div>
		)
	}
}

class RedirctToReg extends PureComponent{
	constructor(props){
		super(props);
		this.redirctToReg=this.redirctToReg.bind(this);
	}
	redirctToReg(){
		this.props.history.push('/register');
	}
	render(){
		return(
			<img src={signUp} className="home_reg" onClick={this.redirctToReg}/>
		)
	}
}
const Reg = withRouter(RedirctToReg);

class Guide_ extends PureComponent{
	constructor(props){
		super(props);
		this.redirctToIntro=this.redirctToIntro.bind(this);
		this.redirctToRegistration=this.redirctToRegistration.bind(this);
		this.redirctToPatronageSystem=this.redirctToPatronageSystem.bind(this);
		this.redirctToExhibitor=this.redirctToExhibitor.bind(this);
		this.redirctToIntro2017=this.redirctToIntro2017.bind(this);
		this.redirctToIntro2018=this.redirctToIntro2018.bind(this);
		// this.redirctToGuide=this.redirctToGuide.bind(this);
		// this.redirctToTrvale=this.redirctToTrvale.bind(this);
		// this.redirctToSpeakers=this.redirctToSpeakers.bind(this);
	}
	redirctToIntro(){
		this.props.history.push('/organIntroduction');
	}
	redirctToRegistration(){
		this.props.history.push('/register');
	}
	redirctToPatronageSystem(){
		this.props.history.push('/patronageSystem');
	}
	redirctToExhibitor(){
		this.props.history.push('/business');
	}
	redirctToIntro2017(){
		this.props.history.push('/intro2017');
	}
	redirctToIntro2018(){
		this.props.history.push('/intro2018');
	}
	// redirctToGuide(){
	// 	this.props.history.push('/guide');
	// }
	// redirctToTrvale(){
	// 	this.props.history.push('/travel');
	// }
	// redirctToSpeakers(){
	// 	this.props.history.push('/speaker');
	// }
	render(){
		let lan=this.props.ctx.lan;
		return(
			<React.Fragment>
				<div className="home_gride" onClick={this.redirctToIntro2018} >DMD 2018 (US)</div>
				<div className="home_gride" onClick={this.redirctToIntro2017} >DMD China 2017</div>
				<div className="home_gride" onClick={this.redirctToIntro} >{lan.patientORG}</div>
				<div className="home_gride" onClick={this.redirctToRegistration} >{lan.registration}</div>
				<div className="home_gride" onClick={this.redirctToPatronageSystem} >{lan.patronageSystem}</div>
				<div className="home_gride" onClick={this.redirctToExhibitor} >{lan.exhibitor}</div>
				{/*<div className="home_gride" onClick={this.redirctToGuide} >{lan.guidePlan}</div>
				<div className="home_trval" onClick={this.redirctToTrvale} >{lan.travelPlan}</div>
				<div className="home_speakers" onClick={this.redirctToSpeakers} >{lan.speakersPlan}</div>*/}
			</React.Fragment>
		)
	}
}
const Guide = withRouter(connect(Guide_));


class PartMenu_ extends PureComponent{
	constructor(props){
		super(props);
		this.redirctToPatronageSystem=this.redirctToPatronageSystem.bind(this);
		this.redirctToBooth=this.redirctToBooth.bind(this);
		this.redirctToBusiness=this.redirctToBusiness.bind(this);
	}
	redirctToPatronageSystem(){
		this.props.history.push('/patronageSystem');
	}
	redirctToBooth(){
		this.props.history.push('/booth');
	}
	redirctToBusiness(){
		this.props.history.push('/business');
	}
	render(){
		let lan=this.props.ctx.lan;
		return(
			<React.Fragment>
				<div className="partMenu" onClick={this.redirctToPatronageSystem} >
					<div className="cover"></div>
					<p><i className="icon-suitcase"></i> <br />{lan.supportCase}</p>
				</div>
				<div className="partMenu" onClick={this.redirctToBusiness} >
					<div className="cover"></div>
					<p><i className="icon-th-large"></i> <br />{lan.showPalcePlan}</p>
				</div>
				<div className="partMenu" onClick={this.redirctToBusiness} >
				<div className="cover"></div>
					<p><i className="icon-money"></i> <br />{lan.boothInv}</p>	
				</div>
			</React.Fragment>
		)
	}
}
const PartMenu = withRouter(connect(PartMenu_));

class Home extends React.PureComponent{
	constructor(props){
		super(props);

	}
	
	
	render(){
		let cyclePicOption={
			pics:[cyclePic1,cyclePic2,cyclePic3,cyclePic4,cyclePic5,cyclePic6,cyclePic7,cyclePic8],
		}

		let cyclePicOptionEn={
			pics:[cyclePic1EN,cyclePic2EN,cyclePic3EN,cyclePic4EN,cyclePic5EN,cyclePic6EN,cyclePic7EN,cyclePic8EN]
		}
		let pic=this.props.ctx.selected==='zh'?cyclePicOption:cyclePicOptionEn;

		let lan=this.props.ctx.lan;
		return(
			<div id="home">
				<div>
					<div id="context_left">
						<div className="cycle"> 
							<CyclePic {...pic}/>
						</div>
						<div className="home_inter">
							<div className="title">{lan.intrTitle}</div>
							<Introduction />
						</div>
					</div>
					<div id="context_right">
						{/*<Reg />
						<BaiduMap />*/}
						<Guide />
					</div>
				</div>
				{/*<div className="partMenus">
					<PartMenu />
				</div>*/}
				<div>
					<Supportors />
				</div>
			</div>
		)
	}
}


export default connect(Home)
