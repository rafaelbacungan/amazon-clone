import React from 'react'
import './css/Header.css'
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className='header'>
            <img 
            src='https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white.png' 
            className='header__logo' 
            />
            <div
            className='header__search'
            >
                <input 
                    className='header__searchInput'
                    type='text'
                />
                {/** logo */}
                <SearchIcon className='header__searchIcon' />
            </div>

            <div className='header__nav'>
                <div className='header__option'>
                    <span className='header__optionLineOne'>
                        Hello Guest
                    </span>
                    <span className='header__optionLineTwo'>
                        Sign In
                    </span>
                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>
                        Returns
                    </span>
                    <span className='header__optionLineTwo'>
                        & Orders
                    </span>
                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>
                        Your
                    </span>
                    <span className='header__optionLineTwo'>
                        Prime
                    </span>
                </div>
                <div className='header__option'>

                </div>
            </div>
        </div>
    )

}

export default Header 
