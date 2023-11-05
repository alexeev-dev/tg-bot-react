import React from 'react'
import './Header.css'
import { useTelegram } from '../hooks/useTelegram'

const Header = (props) => {
    const {user, onClose} = useTelegram();

    return (
        <div className={'header'}>
            <span>Exchange bot. MVP v.0.2</span>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>    
    )
}

export default Header