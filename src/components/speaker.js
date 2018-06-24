import connect from '../context.js';

import ArtErdman from '../images/speakers/example1.png'
import BevanYueh from '../images/speakers/example2.png'
import derekMathers from '../images/speakers/derekMathers.png'
import gwenfischer from '../images/speakers/gwenfischer.png'
import miu from '../images/speakers/miu.png'

const listCn=[
	{
		pic:ArtErdman,
		name:'Art Erdman',
		intr:[
			'厄尔巴肯医疗器械中心主任',
			'医疗器械设计大会创始人兼主席',
			'Arthur G. Erdman博士是明尼苏达大学机械工程学教授，专攻机械设计、生物工程和产品设计。2007年7月，Erdman担任明尼苏达大学医疗器械中心主任。罗格斯大学理学士，伦斯勒理工学院硕士、博士。Erdman博士已经发表超过325篇技术论文，出版3本书刊，并拥有30多项专利。在国际大会上他与之前的学生们共同获得9项最佳论文奖。',
			'目前Erdman博士拥有大量的在研项目。这些项目中有很多是关于生物医学工程与医疗器械设计的。他亲自带头研发一款名为LINCAGES的机制软件设计包，现在这款软件包已经在全世界应用了。Erdman还和眼科学、神经科学、流行病学、骨科、外科、牙科、耳鼻喉科以及运动生物力学的教员合作开展研究。他在50多家企业担任机械与产品设计顾问，包括施乐、3M、 安德森门窗、宝洁、惠普、罗勒布雷德、 萨若医学和雅马哈。Erdman博士赢得了很多奖项，包括美国机械工程师协会机设计大奖和美国机械工程师协会优秀设计教育家奖。他是美国机械工程师协会的成员，是美国医学与生物工程院的创始成员，也是第十五届医疗器械设计大会主席。'
		]
	},
	{
		pic:BevanYueh,
		name:'Bevan Yueh',
		intr:['美国','明尼苏达大学，耳鼻喉科、头颈外科科长兼教授','Bevan Yueh博士是耳鼻喉科的教授，明尼苏达州人，2007年回到明尼苏达州。Yueh是头颈外科医生，主要方向是消除H&N肿瘤。作为罗伯特伍德约翰逊前临床学者，他在临床流行病学及健康服务研究方面有丰富的专业知识，特别重视在治疗头颈部癌症后提高患者听力健康及生活质量。',' Yueh博士是明尼苏达大学外科医生协会主席、全球耳鼻喉学术会主席、美国头颈协会财务主管兼《美国医学会杂志 耳鼻喉学/头颈外科》高级编委会成员。']
	},
	{
		pic:derekMathers,
		name:'Derek Mathers',
		intr:['美国','Worrell公司高级应用开发部总监','Derek Mathers在Worrell担任高级应用开发部总监。Worrell是一家策划与战略咨询公司，与健康医疗创新者一起研发新技术，改善人类的健康状况。Derek Mathers钻研3D打印技术的应用，推动一流医疗生物科技公司的产品开发。Derek在多个著名商业展会和刊物上介绍分享3D打印技术的趋势及案例，包括Interface Health、Inside3D、MEDevice、Design News、增材制造用户组织大会、医疗器材设计与制造博览会、青年总裁组织、Medical Alley、《今日塑料业》、Qmed和MDDI等等。','Derek是明尼苏达大学副教授，负责3D打印与添加制造专业课。']
	},{
		pic:gwenfischer,
		name:'Gwen Fischer',
		intr:['美国','儿科 助理教授','洛约拉大学斯特里奇医学院 医学博士','洛约拉大学斯特里奇医学院 医学博士','明尼苏达大学 研究员','明尼苏达大学共济会儿童医院重症监护医生','Gwenyth Fischer是明尼苏达大学共济会儿童医院儿科与心血管科重症监护室小儿重症监护医生，同时她还是明尼苏达大学医疗器械创新研究项目的研究员。Fischer博士创立了儿科医疗器械创新联盟，目前担任领导职位，一直致力于推动儿科技术走向市场。她还参与发明了几项成人与儿童医疗器械，目前担任医疗器械中心的临床顾问。']
	},{
		pic:miu,
		name:'廖康雄',
		intr:['美国','明尼苏达大学外科学系副教授','医学博士：中国湖北医科大学','任职经验：中国北京大学第三医院，（普通外科）；纽约布鲁克戴尔大学医院医疗中心（普通外科）；明尼苏达大学（心血管、胸外科）','研究员职位：爱因斯坦医学院药物研究实验室','外科博士（博士学位）：中国北京，北京大学医学院','研究员（Robert Frater博士）：纽约布朗克斯爱因斯坦医学院（心血管研究实验室）','实习经验：纽约布朗克斯，爱因斯坦医学院，蒙特菲奥雷医学中心。（普通外科）','擅长领域：微创二尖瓣修复，机器人微创心脏手术，主动脉瘤修复，复杂二尖瓣手术，修复性和复杂的心脏手术，心室辅助装置（VAD）置入术，心脏移植手术，经导管主动脉瓣置换术（TAVR）。']
	}
]

const listEn=[
	{
		pic:ArtErdman,
		name:'Art Erdman',
		intr:[
			'Dr. Art Erdman, Director, Medical Devices Center, University of Minnesota',
			'Founder and Chair, Design of Medical Devices Conference, University of Minnesota',
			'Arthur G. Erdman, PhD, is the Richard C. Jordan Professor and a Morse Alumni Distinguished Teaching Professor of Mechanical Engineering at the University of Minnesota, specializing in mechanical design, bioengineering and product design. In July 2007 he was selected as the Director of the Medical Devices Center at the U of M. He received his BS degree at Rutgers University, his MS and PhD at RPI. Dr. Erdman has published over 325 technical papers, 3 books, holds over 30 patents, and shares with his former students 9 Best Paper Awards at international conferences.',
			'Dr. Erdman currently has a number of ongoing projects of which many are related to biomedical engineering and medical device design. He led the effort to create LINCAGES, a mechanism software design package that has been use worldwide. Dr. Erdman has had research collaborations with faculty in Ophthalmology, Neuroscience, Epidemiology, Orthopedics, Surgery, Dentistry, Otolaryngology and Sport Biomechanics. He has consulted at over 50 companies in mechanical and product design, including Xerox, 3M, Andersen Windows, Proctor and Gamble, HP, Rollerblade, Sulzer Medica and Yamaha. He has received a number of awards including ASME Machine Design Award and the ASME Outstanding Design Educator Award. Erdman is a Fellow of ASME and a Founding Fellow of AIMBE. He has been the Chair of fifteen Design of Medical Devices Conferences which are held on the University of Minnesota campus each April.'
		]
	},
	{
		pic:BevanYueh,
		name:'Bevan Yueh',
		intr:['Department Head and Professor, Department of Otolaryngology, Head and Neck Surgery, University of Minnesota','Dr. Bevan Yueh is Professor and George L Adams Chair for Otolaryngology. He is a native of Minnesota, and was delighted to return to Minnesota in 2007. Dr. Yueh is a head & neck surgeon, and his practice is focused on the ablation of H&N tumors. As a former Robert Wood Johnson Clinical Scholar, he has expertise in clinical epidemiology and health services research, with special focus on improving hearing health, and improving function and quality of life of patients after treatment for head & neck cancer.Dr. Yueh is the Chair of the Board for the University of Minnesota Physicians. ','Nationally, he is President of the Association of Academic Departments of Otolaryngology, the Treasurer for the American Head & Neck Society, and a member of the executive editorial board of JAMA Otolaryngology/Head & Neck Surgery.']
	},
	{
		pic:derekMathers,
		name:'Derek Mathers',
		intr:['Derek Mathers, Director of Advanced Applications Development, Worrell','Derek Mathers is a Business Development Manager at Worrell. Worrell is a design and strategic consulting firm that works with healthcare innovators to create technologies for the improvement of the human condition. He specializes in the application of 3D printing to accelerate product development for leading medical and biotechnology companies. Derek has presented 3D printing trends and case studies to a host of leading trade shows and publications including Interface Health, Inside3D, MEDevice, Design News, AMUG, MD&M, Young President\'s Organization, Medical Alley, Plastics Today, Qmed, MDDI, and more.','Derek is also an Adjunct Professor at the University of Minnesota, teaching the Big 10\'s first dedicated course in 3D printing and additive manufacturing.']
	},
	{
		pic:gwenfischer,
		name:'Gwen Fischer',
		intr:['Gwen Fischer, Critical Care Physician, University of Minnesota Masonic Children\'s Hospital','Assistant Professor, Department of Pediatrics','Assistant Professor, Department of Pediatrics','Residency, Dartmouth Hitchcock Medical Center','Fellowship, University of Minnesota','Gwenyth Fischer is a pediatric Critical Care Physician at the University of Minnesota Masonic Children’s Hospital Pediatric Intensive Care Unit and Cardiovascular Intensive Care Unit. She is also an alumnus of the Medical Device Innovation Fellows Program at the University of Minnesota.','Dr. Fischer founded and currently directs the Pediatric Device Innovation Consortium (PDIC), and is always focused on getting pediatric technologies to market. She has been a co-inventor of several adult and pediatric medical devices and currently acts as the clinical advisor for the Medical Device Center fellows program.']
	},{
		pic:miu,
		name:'Kenneth Liao',
		intr:[' Associate Professor, Department of Surgery, University of Minnesota','Associate Professor with tenure, Department of Surgery','Surgical Director, Heart Transplantation Program','Head, Robotic & Minimally Invasive Cardiac Surgery Program, CMIS','Surgical Director, Transcatheter Valve Program','MD: Hubei Medical College, China','Residency: The 3 rd University Hospital of Beijing University, Beijing, China (General Surgery); Brookdale University Hospital Medical Center','Brooklyn, New York. (General Surgery) ; University of Minnesota (Cardiovascular and Thoracic Surgery)','Fellowship: Albert Einstein College of MedicineResearch Lab).','Doctoral Degree of Surgery (PhD Equivalent): Beijing University Medical School, Beijing, China.','Research Fellow (Dr. Robert Frater): Albert Einstein College of Medicine, Bronx, New York. (Cardiovascular Research Lab)','Intern: Albert Einstein College of Medicine, Montefiore Medical Center, Bronx, New York. (General Surgery)']
	}
]

class Speaker extends PureComponent{
	constructor(props){
		super(props);
		this.showDetail=this.showDetail.bind(this);
		this.hideDetail=this.hideDetail.bind(this);
	}
	componentWillReceiveProps(nextProps){
        window.scrollTo(0,0)
    }
	showDetail(e){
		let ele=e.currentTarget.querySelector('.detail');
		ele.className='detail showIntr';
	}
	hideDetail(e){
		let ele=e.currentTarget.querySelector('.detail');
		ele.className='detail';
	}
	render(){
		let pic=this.props.pic;
		let name=this.props.name;
		let intr=this.props.intr;
		return(
			<div className="speaker" onMouseOver={this.showDetail} onMouseOut={this.hideDetail}>
				<div className="image">
					<img src={pic} title={intr}/>
					<p>{name}</p>
				</div>
				<div className="detail">
					<p className="name">{name}</p>
					<div className="intr">
						{
							intr.map((item,i)=>{
								return <p className="intr" key={i}>{item}</p>
							})
						}
					</div>
				</div>			
			</div>
		)
	}
}

class Speakers extends PureComponent{
	constructor(props){
		super(props)
	}

	render(){
		let list=this.props.ctx.selected==='en'?listEn:listCn;
		let speakers=list.map((o,i)=>{
			return <Speaker {...o} key={i}/>
		});
		return(
			<div id="speakers">
				{speakers}
			</div>
		)
	}
}
export default connect(Speakers);

