import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <header>
                <span>T.の 创作乐园</span>
            </header>
            <div>
                <div className="articleList">
                    <h1>最新发布</h1>
                    <ul>
                        <li><Link to='/Article'>git修改提交的用户名和Email</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}