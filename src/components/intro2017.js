import connect from '../context.js';

import "../css/meet.css"
import t1 from '../images/intro/t1.png'
import t2 from '../images/intro/t2.png'
import t3 from '../images/intro/t3.png'
import t4 from '../images/intro/t4.png'

import img1 from '../images/intro/1.png'
import img2 from '../images/intro/2.png'
import img3 from '../images/intro/3.png'
import img4 from '../images/intro/4.png'
import img5 from '../images/intro/5.png'
import img6 from '../images/intro/6.png'
import img7 from '../images/intro/7.png'
import img8 from '../images/intro/8.png'
import img9 from '../images/intro/9.png'
import img10 from '../images/intro/10.png'
import img11 from '../images/intro/11.png'
import img12 from '../images/intro/12.png'
import img13 from '../images/intro/13.png'
import img14 from '../images/intro/14.png'
import img15 from '../images/intro/15.png'
import img16 from '../images/intro/16.png'
import img17 from '../images/intro/17.png'
import img18 from '../images/intro/18.png'
import img19 from '../images/intro/19.png'
import img20 from '../images/intro/20.png'
import img21 from '../images/intro/21.png'
import img22 from '../images/intro/22.png'
import img23 from '../images/intro/23.png'
import img24 from '../images/intro/24.png'
import img25 from '../images/intro/25.png'
import img26 from '../images/intro/26.png'
import img27 from '../images/intro/27.png'
import img28 from '../images/intro/28.png'
import img29 from '../images/intro/29.png'
import img30 from '../images/intro/30.png'
import img31 from '../images/intro/31.png'
import img32 from '../images/intro/32.png'
import img33 from '../images/intro/33.png'
import img34 from '../images/intro/34.png'
import img35 from '../images/intro/35.png'
import img36 from '../images/intro/36.png'
import img37 from '../images/intro/37.png'
import img38 from '../images/intro/38.png'
import img39 from '../images/intro/39.png'






class Intro2017 extends Component{
	render(){
		let selected=this.props.ctx.selected;
		let list=[{
			pic:img1,
			name:"Art Erdman",
			position:"美国明尼苏达大学Earl E. Bakken ( 厄尔巴肯)医疗器械中心主任;医疗器械设计大会(Design of Medical Devices Conference) 创始人兼主席",
			positionEn:'Director of Earl E. Bakken Medical Devices Center, the University of Minnesota; Founder and Chair of Design of Medical Devices Conference.'
		},{
			pic:img2,
			name:"Joe Hale",
			position:"明尼苏达大学'Earl E. Bakken ( 厄尔巴肯) 医疗器械中心创新伙伴计划' 主任,爱荷华大学生物医学工程博士学位",
			positionEn:'Director of Earl E. Bakken Medical Devices Center Fellows Program, University of Minnesota; Ph.D. in Biomedical Engineering from the University of Iowa.'
		},{
			pic:img3,
			name:"Samuel B. Mukasa",
			position:"美国明尼苏达大学科学与工程学院院长&加州大学圣芭芭拉分校地球化学博士",
			positionEn:'Dean of the University of Minnesota College of Science and Engineering;  Ph.D. in geochemistry from the University of California, Santa Barbara.'
		},{
			pic:img4,
			name:"邓 刚",
			nameEn:'Gang Deng',
			position:"国家食品药品监督管理总局医疗器械技术审评中心副主任",
			positionEn:'Deputy director of Medical Devices Technology Review and Evaluation Center of China Food and Drug Administration.'
		},{
			pic:img5,
			name:"袁 鹏",
			nameEn:'Peng Yuan',
			position:"国家食品药品监督管理总局医疗器械注册管理司处长",
			positionEn:'Director of Medical Device Registration Management Division of China Food and Drug Administration.'
		},{
			pic:img6,
			name:"李志勇",
			nameEn:'Zhiyong Li',
			position:"中国医学装备协会秘书长",
			positionEn:'Secretary General of China Association of Medical Equipment. '
		},{
			pic:img7,
			name:"Tim Laske",
			position:"美敦力AF Solutions 公司研究与业务发展副总裁&明尼苏达大学生物医学工程学博士",
			positionEn:'Vice President of Business Development for the AF Solutions Business at Medtronic;  Ph.D. in Biomedical Engineering from University of Minnesota.'
		},{
			pic:img8,
			name:"华玉涛",
			nameEn:'Yutao Hua',
			position:"中国生物技术发展中心化学药与医疗器械处处长",
			positionEn:'Chief of Chemical Medicine and Medical Devices of China National Center for Biotechnology Development.'
		},{
			pic:img9,
			name:"董 越",
			nameEn:'Yue Dong',
			position:"梅奥医学院医学助理教授; 重症监护多领域流行病学和转化研究(METRIC) 小组患者安全、医疗服务供给研究员",
			positionEn:'Assistant Professor of medicine at Mayo clinic; a patient safety and health care delivery researcher in the Multidisciplinary Epidemiology and Translational Research in Intensive Care (METRIC) group.'
		},{
			pic:img10,
			name:"孙东辉",
			nameEn:'Donghui Sun',
			position:"深圳市鑫君特智能医疗器械有限公司总经理/ 创始人",
			positionEn:'General Manager/Founder of Shenzhen Xinjunte Intelligent Medical Equipment Co. LTD'
		},{
			pic:img11,
			name:"李 农",
			nameEn:'Nong Li',
			position:"北京恒福思特科技发展有限责任公司董事长&中国“外科先锋计划”创始人",
			positionEn:'Chairman of Beijing Heng Fu Si Te Technology Development Co.,Ltd; Founder of China “Surgical Pioneer Program”'
		},{
			pic:img12,
			name:"郭应强",
			nameEn:"Yingqiang Guo",
			position:"四川大学华西医院副教授; 中国医师协会心血管外科分会瓣膜学术委员会的副主任委员; 四川省胸心外科专委会青年委员会委员; 中国医师协会胸心外科分会会员; 中国生物医学工程学会会员。",
			positionEn:'Associate Professor of West China Hospital, Sichuan University; Vice Chairman of Valve Academic Committee of Cardiovascular Surgery Branch of Chinese Medical Doctor Association; Member of the Youth Committee of Sichuan Special Committee for Cardiothoracic Surgery; Member of Cardiothoracic Surgery Branch of Chinese Medical Doctor Association; Member of Chinese Society of Biomedical Engineering.'
		},{
			pic:img13,
			name:"廖康雄",
			nameEn:'Kenneth Liao',
			position:"明尼苏达大学外科学系副教授；心脏移植中心主任&微创心脏外科项目主任；北京医科大学医学博士",
			positionEn:"Associate Professor of Surgery Department of the University of Minnesota; Director of Heart Transplant Center; Director of the Minimally Invasive Heart Surgery Program; PH.D. in medicine from Peking University Health Science Center."
		},{
			pic:img14,
			name:"王春生",
			nameEn:'Chunsheng Wang',
			position:"复旦大学附属中山医院心外科主任; 上海市心脏瓣膜研究中心主任; 上海市复旦大学器官移植中心副主任; 中华医学会心胸外科学会副主任委员",
			positionEn:'Director of Cardiac Surgery of Zhongshan Hospital, affiliated to Fudan University; Director of Shanghai Heart Valve Research Center; Vice Director of Organ Transplant Center of Shanghai Fudan University; Vice Chairman of Society of Cardiothoracic Surgery of Chinese Medical Association.'
		},{
			pic:img15,
			name:"陶 凉",
			nameEn:'Liang Tao',
			position:"武汉亚洲心脏病医院心血管外科学系副院长, 主任医师，教授，心外科主任",
			positionEn:'Vice President of Department of Cardiovascular Surgery of Wuhan Asia Heart Hospital; Chief Physician; Professor; Director of Cardiac Surgery'
		},{
			pic:img16,
			name:"苗 齐",
			nameEn:'Qi Miao',
			position:"北京协和医院心脏外科主任",
			positionEn:'Director of Cardiac Surgery of Peking Union Medical College Hospital'
		},{
			pic:img17,
			name:"Leonardo Angelone",
			position:"美国食品药品监督管理局设备仪器与放射健康中心科学与工程实验办公室生物医学物理组代理副组长兼研究型生物医学工程师",
			positionEn:'Deputy Leader of Biomedical Physics Group and Research Biomedical Engineer at the Office of Science and Engineering Laboratories, Center of Devices and Radiological Health, U.S. FDA.'
		},{
			pic:img18,
			name:"宓现强",
			nameEn:'Xianqiang Mi',
			position:"中国科学院上海高等研究院健康科学与技术部研究员&国家食品药品监督管理局科技司食品药品安全监管科技创新咨询专家",
			positionEn:'Researcher of Division of Life S&T Research of Shanghai Advanced Research Institute, Chinese Academy of Sciences; Food and Drug Safety Supervision Technology Innovation Consulting Expert of State Food and Drug Administration Science and Technology Department. '
		},{
			pic:img19,
			name:"Mike Finch",
			position:"明尼苏达大学卫生服务研究和政策学院副教授; 联合健康集团研究计划主任; 明尼苏达大学社会学博士学位",
			positionEn:'Associate Professor of the Division of Health Services Research and Policy at the University of Minnesota;  Director of Research Programs at United Health Group;  Ph.D. in Sociology from the University of Minnesota.'
		},{
			pic:img20,
			name:"刘 健",
			nameEn:'Jian Liu',
			position:"简阳市人民医院心外科主任医师",
			positionEn:'Chief Physician of Cardiac Surgery, the People’s Hospital of Jianyang City.'
		},{
			pic:img21,
			name:"Ann Graves",
			position:"雅培国际监管事务副总裁; 爱荷华州立大学生物医药工程及材料科学工程学硕士",
			positionEn:'Vice President of Abbott International Regulatory Affairs; MS in Biomedical Engineering and Material Science Engineering from Iowa State University.'
		},{
			pic:img22,
			name:"金勤献",
			nameEn:'Qinxian Jin',
			position:"清华大学副秘书长、技术转移研究院院长",
			positionEn:'Deputy Secretary General of Tsinghua University; Dean of the Institute of Technology Transfer.'
		},{
			pic:img23,
			name:"李朝辉",
			nameEn:'Zhaohui Li',
			position:"NAMSA 中国市场销售总监(亚太区); 新加坡国立大学神经科学博士; 中国吉林大学生化制药学学士",
			positionEn:'NAMSA APAC Sales Director; Ph.D. in Neuroscience from National University of Singapore;  BS in Biochemical Pharmaceutics from Jilin University, China.'
		},{
			pic:img24,
			name:"Peter Madson",
			position:"Worrell 公司副总裁/ 管理合伙人",
			positionEn:'Vice President/Managing Partner of Worrell'
		},{
			pic:img25,
			name:"万 峰",
			nameEn:'nameEn',
			position:"法兰西医学科学院院士; 北京大学第三医院心脏外科主任医师、教授; 中国医师协会心血管外科主任委员",
			positionEn:'Member of the French Academy of Medical Sciences; Chief Physician and Professor of Cardiac Surgery in Peking University Third Hospital; Chairman of Cardiovascular Surgery of Chinese Medical Doctor Association.'
		},{
			pic:img26,
			name:"Sherry Jia",
			position:"Ul-CCIC 有限公司高级项目工程师兼主任审核员",
			positionEn:'Senior Project Engineer and Chief Auditor of UL-CCIC Company Limited'
		},{
			pic:img27,
			name:"Derek Mathers",
			position:"Worrell 公司高级应用开发部总监",
			positionEn:'Director of Senior Application Development of Worrell'
		},{
			pic:img28,
			name:"Gwen Fischer",
			position:"明尼苏达大学  共济会儿童医院重症监护医生&洛约拉大学  斯特里奇医学院医学博士&达特默思希契科克医疗中心  住院医生&明尼苏达大学  医疗器械创新研究员",
			positionEn:'Critical Care Physician at the University of Minnesota Masonic Children\'s Hospital; Ph.D. in Medicine from Stritch School of Medicine, Loyola University; Resident Physician of Dartmouth Hitchcock Medical Center; Medical Devices Innovation Researcher of the University of Minnesota.'
		},{
			pic:img29,
			name:"胡铁锋",
			nameEn:'Tiefeng Hu',
			position:"汇智赢华医疗科技研发（上海）有限公司董事长",
			positionEn:'President of Huizhi Yinghua Medical Technology Research and Development Co., LTD (Shanghai)'
		},{
			pic:img30,
			name:"Jayachandra Shastry",
			position:"安得拉邦医疗科技园区开发有限公司高级顾问",
			positionEn:'Senior Consultant of Andhra Pradesh Medical Technology Park Development Co. LTD'
		},{
			pic:img31,
			name:"Motamarri Venkata Amaresh Kumar",
			position:"Kalam 健康技术研究所高级技术主管",
			positionEn:'Senior Technical Director of Institute of Health Technology of Kalam'
		},{
			pic:img32,
			name:"Bevan Yueh",
			position:"明尼苏达大学耳鼻喉科教授; 明尼苏达大学外科医生协会主席; 全球耳鼻喉学术会主席",
			positionEn:'Professor of Otolaryngology at the University of Minnesota; President of the Association of Surgeons, the University of Minnesota; President of the Global Academy of Otolaryngology.'
		},{
			pic:img33,
			name:"Jizhen Lin",
			position:"明尼苏达大学耳鼻喉科副教授",
			positionEn:'Associate Professor of Otolaryngology of the University of Minnesota'
		},{
			pic:img34,
			name:"杨仕明",
			nameEn:"Shiming Yang",
			position:"解放军总医院耳鼻喉头颈外科主任",
			positionEn:'Head of Otolaryngology and Head & Neck Surgery of Chinese PLA General Hospital'
		},{
			pic:img35,
			name:"黄魏宁",
			nameEn:'Weining Huang',
			position:"北京医院耳鼻咽喉科主任",
			positionEn:'Director of Otolaryngology of Beijing Hospital'
		},{
			pic:img36,
			name:"Vincenzo Parenti-Castelli",
			position:"Vincenzo Parenti-Castelli",
			positionEn:"Founding Director of the Department of Robotics, Automation and Joint Biomechanics at the University of Bologna."
		},{
			pic:img37,
			name:"武海波",
			nameEn:'Haibo Wu',
			position:"北京精诚医药科技有限公司董事长",
			positionEn:'President of Beijing Jingcheng Pharmaceutical Technology Co. LTD'
		},{
			pic:img38,
			name:"Randy Schiestl",
			position:"波士顿科学公司全球技术副总裁; 明尼苏达大学工商管理学硕士兼行政工商管理硕士; 医疗设备创新联盟创始董事会成员",
			positionEn:'Vice President of Global Technology at Boston Scientific Corporation; MBA and Executive MBA of the University of Minnesota; Founding Board Member of the Medical Device Innovation Alliance.'
		},{
			pic:img39,
			name:"Dawn Bardot",
			position:"医疗设备创新协会(MDIC)技术创新副总裁",
			positionEn:'Vice President of Technology Innovation at Medical Device Innovation Consortium (MDIC)'
		},
		];
		// 会前培训
		let meetingList=[
			{
				title:"原型设计活动",
				titleEn:'Prototype Activities',
				content:"学员们分成小组的形式，通过与导师的交流学习、与学员的思想碰撞，最终完成了几个不同的创新原型设计成品。",
				contentEn:'Students were divided into groups, and finally completed several different innovative prototype design products through communication and learning with the tutor and ideological collision with the student',
				img:t1
			},{
				title:"小组合影",
				titleEn:"Group Photos",
				content:"",
				img:t2
			},{
				title:"会议交流",
				titleEn:"Conference Communication",
				content:"",
				img:t3
			},{
				title:"手术直播",
				titleEn:"Live Surgery",
				content:"",
				img:t4
			}
		]
		return (
			<div className="intro2017">
				<h3>{selected==='zh'?'会前培训':'Pre-conference Training'}</h3>
				{
					meetingList.map((info,i)=>{
						return (
							<div className="meet" key={i}>
								<p><img src={info.img} /></p>
								<p>{info.content}</p>
								<p>{selected==='zh'?info.title:info.titleEn}</p>
							</div>
						)
					})
				}
				<div className="clear"></div>
				<h3>{selected==='zh'?'2017 DMD China 回顾——重磅嘉宾':'2017 DMD China Review——VIP Speakers'}</h3>
				{
					list.map((item,i)=>{
						return (
							<div key={i} className="people">
								<p><img src={item.pic} /></p>
								<p>{selected==='zh'?item.name:(item.nameEn||item.name)}</p>
								<p>{selected==='zh'?item.position:(item.positionEn||item.position)}</p>
							</div>
						)
					})
				}
			</div>
		)
	}
}
export default connect(Intro2017)