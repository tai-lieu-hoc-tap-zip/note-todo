import React from 'react';
import PropTypes from 'prop-types';

IconNavigation.propTypes = {  
    title  : PropTypes.string,
    handleIcon: PropTypes.object,
    handleActive: PropTypes.func,  
    active: PropTypes.bool.isRequired,
    url: PropTypes.string,
};
 
IconNavigation.defaultProps = {
    active: false,
    handleIcon: null,
    handleActive: null,   
} 

function IconNavigation(props:any) {
 
    const { active, title, handleIcon, handleActive, url } = props;       

    return (    
        <div>
            {!active ?
                <a onClick={handleActive} href={url} className='flex-navigation__item'> 
                    {handleIcon}  
                    {title}
                </a> 
                :   
                <a onClick={handleActive} href={url} className='flex-navigation__item-active'> 
                    {handleIcon}  
                    {title}
                </a> 
            }
        </div>
       
    );
}

export default IconNavigation;