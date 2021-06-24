import React,{useState} from 'react';

const Post = (props) => {
    let [favorites, setfavorites] = useState(0);

    const favoriteIncreaser = () => {
        setfavorites(favorites + 1);
        console.log(favorites)
        console.log(useState)
      } 

    let [retweets, setretweets] = useState(0);

    const retweetIncreaser = () => {
        setretweets(retweets + 1);
        console.log(retweets)
        console.log(useState)
      } 

    return (
        <div>
            <h1>{props.name}</h1>
            <h3>{props.tweet}</h3>
            <button onClick={favoriteIncreaser}>Favorites: {favorites}</button>
            <button onClick={retweetIncreaser}>Retweets: {retweets}</button>
            <br/><br/>
        </div>
    )
}

export default Post;
