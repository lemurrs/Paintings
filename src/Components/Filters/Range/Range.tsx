import React, { useState } from 'react'
import c from './Range.module.scss'
import ArrowDown from '../../../Assets/svg/ArrowDown.svg'
type Props = {
	isDarkTheme: boolean
	setCreatedFrom: (a: string) => void
	setCreatedTo: (a: string) => void
	setCurrentPage: (a: number) => void
}
const Range: React.FC<Props> = ({
	isDarkTheme,
	setCreatedFrom,
	setCreatedTo,
	setCurrentPage
}) => {
	const [active, setActive] = useState(false)

	return (
		<div
			className={`${c.Range} ${isDarkTheme ? c.RangeDark : c.RangeLight}`}
			onClick={() => {
				setActive(!active)
			}}
		>
			<img
				src={ArrowDown}
				alt='ArrowDown'
				className={`${c.Range__arrowDown} ${active ? c.rotate : ''} ${
					!isDarkTheme ? c.svgLight : ''
				}`}
			/>

			<p style={{ borderRadius: active ? '0.8rem 0.8rem 0 0 ' : '0.8rem' }}>
				Created
			</p>
			<div
				onClick={e => {
					e.stopPropagation()
				}}
				className={`${c.Range__inputs} ${active ? '' : c.Hidden}`}
			>
				<input
					placeholder={'from'}
					onChange={e => {
						setCreatedFrom(e.target.value)
						setCurrentPage(1)
					}}
				/>
				<input
					placeholder={'before'}
					onChange={e => {
						setCreatedTo(e.target.value)
						setCurrentPage(1)
					}}
				/>
			</div>
		</div>
	)
}
export default React.memo(Range)
