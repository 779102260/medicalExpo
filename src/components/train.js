import connect from '../context.js';

import train1 from '../images/train1.jpg'
import train2 from '../images/train2.jpg'
import train3 from '../images/train3.jpg'
import t1 from '../images/intro/t1.png'
import t2 from '../images/intro/t2.png'
import t3 from '../images/intro/t3.png'
import t4 from '../images/intro/t4.png'
class Train extends PureComponent{
	constructor(props){
		super(props)
	}
	componentWillReceiveProps(nextProps){
        window.scrollTo(0,0)
    }
	render(){
		let lan=this.props.ctx.lan;
		let trainContent=lan.trainContent;
		let plan=trainContent.plan;

		let examples=[{
			pic:train1,
			zh:'Joe Hale 向大家介绍了明尼苏达大学的医学背景、学院优势以及医疗器械中心的创办历程等等。他表示美国明尼苏达大学是十大专注研究性大学之一，也希望能够看到“开胸手术”项目的启动人，让人类通过技术研究实现梦想。Joe Hale 在“需求研究”主题报告中主要提出了“需求”的重要性。他说：“我们必须要有一种循序渐进的方式去引导我们进行创新。然而需求是帮助我们找到正确的解决方案，也是确保我们不会迷失方向的保障。”他表示，我们必须要从需求开始，而不是技术开始。其次，Joe Hale 也通过他在临床方面多年的经验，对“我们应该如何制定需求”以及在需求识别方面的临床问题做了详细的阐述，并表示希望我们可以不断地去优化需求，对需求进行过滤。',
			en:'Joe Hale introduced the medical background of the university of Minnesota, the strengths of the college and the founding history of the medical device center. He said the university of Minnesota is one of the top 10 research universities in the United States, also wanted to see the person who initiated the "open-heart surgery" program, and let humans realize their dreams through technology research. Joe Hale mainly mentioned the importance of "needs" in the theme report of "needs research". He said: "we must have a step-by-step approach to guide us to innovate. Yet needs are the assurance that helps us to find the right solution and ensure us will not get lost." He said: "we have to start with needs, not technology. " Secondly, Joe Hale also elaborated on "how we should formulate needs" and clinical issues in needs recognition through his years of clinical experience, and hoped we could continuously optimize and filter the needs.'
		},{
			pic:train2,
			zh:'Gwen Fischer 在临床需求研究报告中对如何在医院的背景环境下发现我们的需求”做出了详细的阐述，重点介绍了医院当中的临床需求以及发现需求验证和围绕需求的研究。Gwen Fischer 表示，当我们思考如何在医院寻找医学需求的时候，我们必须先衡量医学需求的标准以及需求最终的目标。',
			en:'Gwen Fischer described in detail on how we find our needs in a hospital setting in a clinical needs study, and she mainly introduced the clinical needs in the hospital, discovering needs validation and research on needs. Gwen Fischer said that when we think about how to find medical needs in hospitals, we must first measure the standards of medical needs and the ultimate goals of the needs.'
		},{
			pic:train3,
			zh:'Mike Finch 提出让在场的学员以小组讨论的形式分享他们对牙刷需求的声明。学员们也都积极参与，现场互动强烈，学员们都发挥各自的“头脑风暴”模式和理念去整合出一系列的需求评估与解决方案。Mike Finch 表示，希望能通过小组练习的方式，让大家更好地应用到创新与需求的理念，从而不断地在摸索中收获更多！',
			en:'Mike Finch offered to let the participants share their statements about their toothbrush needs in a group discussion. The students were also actively involved and had strong interaction with each other on the spot. The students used their "brainstorming" mode and idea to integrate a series of needs assessment and solutions. Mike Finch said that he hoped to make people better apply the ideas of innovation and needs concept through group practice, so as to gain more in the exploration.'
		},];
		let pics=[{
			pic:t1,
			zh:"原型设计",
			en:'Prototype Activities'
		},{
			pic:t2,
			zh:"小组合影",
			en:'Group Photos'
		},{
			pic:t3,
			zh:"会议交流",
			en:'Conference Communication'
		},{
			pic:t4,
			zh:"手术直播",
			en:'Live Surgery'
		}];
		return(
			<div id="train">
				<p className="timeAddress">{trainContent.time + ' · '+trainContent.address}</p>
				<p>{trainContent.intr}</p>
				<p>{trainContent.learn}</p>
				<ul>
				{
					trainContent.learnList.map((item,i)=>{
						return <li key={i}>{item}</li>
					})
				}
				</ul> 
				<p>{trainContent.intr2}</p>

				<table>
					<tbody>
						<tr>
							<td>9:00-10:00</td>
							<td>{plan[0]}</td>
						</tr>
						<tr>
							<td>10:00-10:15</td>
							<td>{plan[1]}</td>
						</tr>
						<tr>
							<td rowSpan="2">10:15-11:00 AM</td>
							<td>{plan[2]}</td>
						</tr>
						<tr>
							<td>{plan[3]}</td>
						</tr>
						<tr>
							<td rowSpan="2">11:00 -11:30 AM</td>
							<td>{plan[4]}</td>
						</tr>
						<tr>
							<td>{plan[5]}</td>
						</tr>	
						<tr>
							<td>11:30 -12:15</td>
							<td>{plan[6]}</td>
						</tr>	
						<tr>
							<td>12:15-13:00</td>
							<td>{plan[7]}</td>
						</tr>
						<tr>
							<td rowSpan="2">13:00-13:45</td>
							<td>{plan[8]}</td>
						</tr>
						<tr>
							<td>{plan[9]}</td>
						</tr>
						<tr>
							<td>13:45-15:15 </td>
							<td>{plan[10]}</td>
						</tr>
						<tr>
							<td>15:15-15:30 </td>
							<td>{plan[11]}</td>
						</tr>
						<tr>
							<td rowSpan="2">15:30-16:15 </td>
							<td>{plan[12]}</td>
						</tr>
						<tr>
							<td>{plan[13]}</td>
						</tr>
						<tr>
							<td>16:15-16:45</td>
							<td>{plan[14]}</td>
						</tr>	
						<tr>
							<td>16:45-17:30</td>
							<td>{plan[15]}</td>
						</tr>
						<tr>
							<td>17:30 </td>
							<td>{plan[16]}</td>
						</tr>	
					</tbody>
				</table>
				

				<div className="sec clearfix" >
					{
						examples.map((item,i)=>{
							return (
								<div key={i} className="wrap1">
									<img src={item.pic} alt="" /> 
									<p>{this.props.ctx.selected==='zh'?item.zh:item.en}</p>
								</div>
							)
						})
					}
					
				</div>
				<div className="sec clearfix" >
					{
						pics.map((item,i)=>{
							return (
								<div key={i} className="wrap2">
									<img src={item.pic} alt="" /> 
									<p>{this.props.ctx.selected==='zh'?item.zh:item.en}</p>
								</div>
							)
						})
					}
				</div>
			</div>
		)
	}
}
export default connect(Train)