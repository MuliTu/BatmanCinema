import React from 'react';
import DeleteMovie from '../DeleteMovie';
import EditMovie from '../EditPage/EditPage';

const mainStyle = {
    modal: {
        margin: 'auto',
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        border: 'solid thin white',
        borderRadius: '10px',
        textAlign: 'center',
        color: 'white',
    }
};
export const popUpCases = (type) => {
    switch (type) {
        case 'delete':
            const deleteStyle = {modal: {
                    ...mainStyle.modal,
                    background: 'rgba(255,0,0, 0.7)',
                    height: '100px',
                }};
            return {
                style: deleteStyle,
                component: <DeleteMovie/>
            };
        case 'add':
        case 'edit':
            const editStyle = {modal: {...mainStyle.modal, background: 'rgba(46, 49, 49, 0.5)', height: 'auto',}
            };
            return {
                style: editStyle,
                component: <EditMovie/>
            };

        default:
            return 'null'
    }
};