import React from 'react';
import PostsListPage from "../pages/posts-list";
import PostFullInfoPage from '../pages/post-full-info';
import {Routes, Route} from 'react-router-dom';
import s from './styles.module.css';

function App() {
    return (
        <div className={s.container}>
            <Routes>
                <Route path="/" element={<PostsListPage/>}/>
                <Route path="/post-info" element={<PostFullInfoPage/>}>
                    <Route path=":id" element={<PostFullInfoPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
