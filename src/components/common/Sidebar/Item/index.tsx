import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import './Item.css';

interface IItem {
    isOpen: boolean;
    title: string;
    icon: IconProp;
    rota: string;
}

const Item = ({ isOpen, title, icon, rota }: IItem) => {
    return (
        <Link className='sidebar-item' to={rota}>
            <FontAwesomeIcon icon={icon} className='sidebar-item-icon' />
            <span className={isOpen ? 'item-open' : 'item-closed'}>{title}</span>
        </Link>
    );
};

export default Item;