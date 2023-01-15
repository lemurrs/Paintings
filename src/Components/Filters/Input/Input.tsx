import React from 'react'
import c from './Input.module.scss'
type Props = {
	isDarkTheme: boolean
	onChange: (e: string) => void
	setCurrentPage: (a: number) => void
}
const Input: React.FC<Props> = ({ isDarkTheme, onChange, setCurrentPage }) => {
	return (
		<input
			onChange={e => {
				onChange(e.target.value)
				setCurrentPage(1)
			}}
			className={isDarkTheme ? c.inputDark : c.inputLight}
			placeholder={'Name'}
			style={{ minHeight: '4.2rem' }}
		></input>
	)
}
export default React.memo(Input)
