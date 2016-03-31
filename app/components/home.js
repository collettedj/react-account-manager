import React from 'react';
import {Link} from 'react-router';
import NavLink from './nav-link';

const Home = (props) => (
    <div>
        <ul role="nav">
            <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
            <li><NavLink to="/about" >About</NavLink></li>
            <li><NavLink to="/todo" >Todo</NavLink></li>
            <li><NavLink to="/subreddit" >Subreddit</NavLink></li>
        </ul>
        {props.children}
    </div>
);             

export default Home;
