import React from 'react';
import './index.css';
import PostsListPage from "../pages/posts-list";
import PostFullInfoPage from '../pages/post-full-info';
import Navbar from '../features-widgets/navbar';
import {useFetchPostsDataQuery} from '../shared/api';
import {Routes, Route} from 'react-router-dom';

function App() {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<PostsListPage/>}/>
                <Route path="/post-info" element={<PostFullInfoPage/>}/>
            </Routes>
        </>
    );
}

export default App;
