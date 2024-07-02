import { useRef, useState } from 'react';

import { Route, Routes } from 'react-router-dom';
import { Home, Login, Public } from './containers/public';
import path from './ultis/path';

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path={path.PUBLIC} element={<Public />}>
                    <Route path={path.HOME} element={<Home />}></Route>
                    <Route path={path.LOGIN} element={<Login />}></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
