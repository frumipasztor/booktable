import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
//import * as IoIcons from 'react-icons/io';

export const SideBarData = [
    {
        title: 'Kezdőlap',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        className: 'nav-text',
    },
    {
        title: 'Foglalás',
        path: '/reservation',
        icon: <FaIcons.FaPizzaSlice/>,
        className: 'nav-text',
    },{
        title: 'Menü',
        path: '/menu',
        icon: <FaIcons.FaPizzaSlice/>,
        className: 'nav-text',
    },
]