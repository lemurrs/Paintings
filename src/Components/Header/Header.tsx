import React from 'react'
import logo from '../../Assets/svg/Logo.svg'
import ChangeLight from '../../Assets/svg/ChangeLight.svg'
import c from './Header.module.scss'
import { ChangeTheme } from '../../store/Reducers/HomePageReducer'
import { useDispatch, useSelector } from 'react-redux'
import { appStateType } from '../../store/store'

const Header = () => {
	const dispatch = useDispatch()
	const isDarkTheme = useSelector(
		(state: appStateType) => state.HomePage.isDarkTheme
	)
	return (
		<div className={c.Header}>
			<a href={'/'}>
				<img src={logo} alt='logo' />
			</a>
			<img
				src={ChangeLight}
				alt='ChangeLight'
				onClick={() => {
					dispatch(ChangeTheme(!isDarkTheme))
				}}
				style={{ filter: isDarkTheme ? 'brightness(1)' : 'brightness(0)' }}
			/>
		</div>
	)
}
export default React.memo(Header)
