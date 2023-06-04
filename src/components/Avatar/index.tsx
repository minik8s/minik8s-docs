import React from 'react';
import mystyle from './style.module.css';
import clsx from 'clsx';

export default function MainAvatar(props) {
    if (props.src) {
        return (
            <div>
                <img className={mystyle.MainAvatar} src={props.src} alt="avatar" />
            </div>
        );
    }

    return (
        <div>
            <img className={mystyle.MainAvatar} src="/img/logo-avatar.png" alt="ayaka" />
        </div>
    );
}
