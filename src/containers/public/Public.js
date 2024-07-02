import React from 'react';
import { Outlet } from 'react-router-dom';

const Public = () => {
    return (
        <div>
            <div>
                Public
                <Outlet />
            </div>
        </div>
    );
};

export default Public;
