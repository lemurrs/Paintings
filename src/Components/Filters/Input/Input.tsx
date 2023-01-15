import React from 'react'
import c from './Input.module.scss'
type Props = {
	isDarkTheme: boolean
	onChange: (e: string) => void
}
const Input: React.FC<Props> = ({ isDarkTheme, onChange }) => {
	return (
		<input
			onChange={e => onChange(e.target.value)}
			className={isDarkTheme ? c.inputDark : c.inputLight}
			placeholder={'Name'}
			style={{ minHeight: '4.2rem' }}
		></input>
	)
}
export default React.memo(Input)
