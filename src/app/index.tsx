import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './index.css';
import PostsList from "../pages/posts-list";
import PostFullInfo from '../pages/post-full-info';
import Navbar from '../features-widgets/navbar';

function App() {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<PostsList/>}/>
                <Route path="/post-info" element={<PostFullInfo/>}/>
            </Routes>
        </>
    );
}

export default App;
