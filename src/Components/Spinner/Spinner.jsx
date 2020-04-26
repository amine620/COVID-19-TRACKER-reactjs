import React from 'react';
import spr from '../../img/spinner.gif'
import spr2 from '../../img/spinner2.gif'
import style from './Spinner.module.css'
export const Spinner = () => {
    return (
        <div>
           <img className={style.Spinner} src={spr} alt=""/>
        </div>
    );
}

export const Spinner2 = () => {
    return (
        <div>
           <img  src={spr2} alt=""/>
        </div>
    );
}