import React from 'react';
import axios from 'axios';

const App = () => {

    const handleClick = () => {

        axios.get('http://localhost:5000/posts')
        .then(res => {
            console.log(res.data);
        })
        .catch(err => console.log(err.message));

    }

    const handleClickPost = () => {

        const body = {
            title: 'titolo',
            message: 'messaggio',
            creator: 'aml5cer',
            tag: ['1','2'],
            selectedFile: '',
            likeCount: 1,
            createdAt: new Date()
        }

        axios.post('http://localhost:5000/posts', body)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => console.log(err.message));

    }

    return (
        <div>
            <h1>App</h1>
            <button onClick={handleClick}>click me - get</button>
            <br />
            <button onClick={handleClickPost}>click me - post</button>
        </div>
    )

}

export default App;