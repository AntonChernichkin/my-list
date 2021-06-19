import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import TextComponent from '../text-component';

import './app.css';

const App = () => {

    const data = [
        {label: 'Going to learn React', id: 'a'},
        {label: 'That is good', important: false, id: 'b'},
        {label: 'I need a break...', important: true, id: 'c'},
    ]

    return (
        <div className = "app">
            <AppHeader />
            <div className = "search-panel d-flex">
                <SearchPanel />
                <PostStatusFilter />
            </div>
            <PostList posts = {data} />
            <PostAddForm />
            <TextComponent name = "Anton" surname = "Chernichkin" />
            <TextComponent name = "Varya" surname = "Chernichkina" />
        </div>
    )
}

export default App;