import React from 'react'
import css from './Progress.module.scss'
const Progress = ({done,skill,back}) => {
	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`,
            background:back
            
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (<div style={{display:"flex",flexDirection: "column"}}>
        <h4>{skill}</h4>
		<div className={css.progress}>
            
			<div className={css.progressdone} style={style}  >
				{done}%
			</div>
		</div></div>
	)
}



export default Progress