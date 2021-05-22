import React, { useState } from 'react';

export default function Home() {
    const [url, setUrl] = useState('');
    const [id, setId] = useState('');


    const getHashId = () => {
        const srcToId = JSON.parse(localStorage.getItem('srcToId')) || {};
        const idToSrc = JSON.parse(localStorage.getItem('idToSrc')) || {};

        if (!srcToId[url]) {
            const count = String(Object.keys(srcToId).length + 1);
            srcToId[url] = count;
            idToSrc[count] = url;

            localStorage.setItem(('srcToId'), JSON.stringify(srcToId));
            localStorage.setItem(('idToSrc'), JSON.stringify(idToSrc));
        }
        return srcToId[url];
    }

    const submitForm = () => {
        const redirectId = getHashId();
        setUrl('')
        setId(redirectId);
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1>Please input the URL</h1>
            <div>
                <span>http(s)://</span>
                <input type="text"
                    placeholder="type url here"
                    value={url}
                    onChange={event => setUrl(event.target.value)}
                    style={{ height: 30, width: 500, paddingLeft: 12, marginLeft: 8 }}
                />
                <button onClick={submitForm} style={{ height: 30, marginLeft: 8 }}>
                    Submit
                </button>
            </div>
            {
                id ? <p>{`http://localhost:3000/redirect/${id}`}</p> : null
            }
        </div>
    )
}