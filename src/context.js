
const {Provider, Consumer}=React.createContext('language');

const connect=(SubComponent)=>{
	return (props)=>(
		<Consumer>
			{
				context=>{
					let ctx={
						selected:context.selected,
						lan:context[context.selected],
						toggleLanguage:context.toggleLanguage
					}
					return <SubComponent ctx={ctx} {...props}/>
				}
			}
		</Consumer>
	)
};

export {Provider, Consumer}
export default connect;

// import connect from '../context.js';
//let lan=this.props.ctx.lan;