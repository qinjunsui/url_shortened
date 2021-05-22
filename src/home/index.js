import React, { useState } from 'react';

export default function Home() {
    const [url, setUrl] = useState('');
    const [id, setId] = useState('');


    const getHashId = () => {
        const srcToId = JSON.parse(localStorage.getItem('srcToId')) || {};

        if (!srcToId[url]) {
            const count = String(Object.keys(srcToId).length + 1);
            srcToId[url] = count;

            localStorage.setItem(('srcToId'), JSON.stringify(srcToId));
        }
        return srcToId[url];
    }

    const submitForm = () => {
        const redirectId = getHashId();
        setUrl('')
        setId(redirectId);
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", alignContent: "center" }}>
            <h1>Please input the URL</h1>
            <div>
                <span>http(s)://</span>
                <input type="text"
                    placeholder="type url here"
                    value={url}
                    onChange={event => setUrl(event.target.value)}
                    style={{ height: 30, width: 500, paddingLeft: 12, marginLeft: 8, marginRight: 8 }}
                />
                <button onClick={submitForm}>
                    Submit
                </button>
            </div>
            {
                id ? <p>{`http://localhost:3000/redirect/${id}`}</p> : null
            }
        </div>
    )
}