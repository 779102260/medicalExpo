import connect from '../context.js';

import hz1 from '../images/coop/1.jpg'
import hz2 from '../images/coop/2.jpg'
import hz3 from '../images/coop/3.jpg'
import hz4 from '../images/coop/4.jpg'
import hz5 from '../images/coop/5.jpg'
import hz6 from '../images/coop/6.jpg'
import hz7 from '../images/coop/7.jpg'
import hz8 from '../images/coop/8.jpg'
import hz9 from '../images/coop/9.jpg'
import hz10 from '../images/coop/10.jpg'
import hz11 from '../images/coop/11.jpg'
import hz12 from '../images/coop/12.jpg'
import hz13 from '../images/coop/13.jpg'

class OrganIntroduction extends PureComponent{
	constructor(props){
		super(props);
	}

	render(){
		let lan=this.props.ctx.lan; 
		let coops=lan.coops;
		let coopsContent=lan.coopsContent;
		const organs=[
			{
				pic:hz1,
				name:coops.hz1,
				content:coopsContent.hz1
			},
			{
				pic:hz2,
				name:coops.hz2,
				content:coopsContent.hz2
			},
			{
				pic:hz3,
				name:coops.hz3,
				content:coopsContent.hz3
			},
			{
				pic:hz4,
				name:coops.hz4,
				content:coopsContent.hz4
			},
			{
				pic:hz5,
				name:coops.hz5,
				content:coopsContent.hz5
			},
			{
				pic:hz6,
				name:coops.hz6,
				content:coopsContent.hz6
			},
			{
				pic:hz7,
				name:coops.hz7,
				content:coopsContent.hz7
			},
			{
				pic:hz8,
				name:coops.hz8,
				content:coopsContent.hz8
			},
			{
				pic:hz9,
				name:coops.hz9,
				content:coopsContent.hz9
			},
			{
				pic:hz10,
				name:coops.hz10,
				content:coopsContent.hz10
			},
			{
				pic:hz11,
				name:coops.hz11,
				content:coopsContent.hz11
			},
			{
				pic:hz12,
				name:coops.hz12,
				content:coopsContent.hz12
			},
			{
				pic:hz13,
				name:coops.hz13,
				content:coopsContent.hz13
			},
			
		]
		return(
			<div id="organs">
				{
					organs.map((item,i)=>{
						return(
							<div className="organ" key={i}>
								<div className="name"><span>{item.name}</span></div>
								<div className="logo"><img src={item.pic} /></div>
								<div className="intr">{item.content}</div>
							</div>
						)
					})
				}
			</div>
		)
	}
}

export default connect(OrganIntroduction)