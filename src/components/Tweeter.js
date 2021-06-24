import React from 'react';
import Post from './Post'

const Tweeter = (props) => {
    const tweets = [{name: 'Eric', tweet: 'This is a tweet to embarrass my wife'}, 
    {name: 'John', tweet: 'Some random thoughts I am spewing'},
    {name: 'Matt', tweet: 'I love coding'},
    {name: 'Hacker', tweet: 'I love ruining things for you all'}]
    return(
        <div>
            <h2>You have {props.counter} items you favorited!</h2> <br/>
            {tweets.map(someonesName => (
                <Post name={someonesName.name} tweet={someonesName.tweet}/>
            ))}
            <button onClick={props.setToggle}>Toggle</button>
            <button onClick={props.number}>Update counter</button>
        </div>
    )
}

export default Tweeter;
