import React from 'react';
import './Article.less';


export default function Article() {
    return (
        <div>
            <h1>git修改提交的用户名和Email</h1>
            <p>Git全局配置和单个仓库的用户名邮箱配置</p>
            <p>$ git config --global user.name "github’s Name"</p>
            <p>$ git config --global user.email "github@xx.com"</p>
            <p>$ git config --list</p>
            <p>在项目根目录下进行单独配置用户名、邮箱</p>
            <p>$ git config user.name "gitlab’s Name"</p>
            <p>$ git config user.email "gitlab@xx.com"</p>
            <p>$ git config --list</p>
            <p>git config --list 查看当前配置</p>
            <p>在当前项目下面查看的配置是全局配置+当前项目的配置, 使用的时候会优先使用当前项目的配置</p>
        </div>
    );
}