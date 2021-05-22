import React, { useState, useEffect } from 'react';

export default function Shortened(props) {
    const [error, setError] = useState(false);

    const idCheck = () => {
        const redirectId = props.match.params.id;

        if (redirectId) {
            const src = getRedirectSource(redirectId);

            if (src) {
                window.location.replace(`//${src}`);
                return;
            }
        }
        setError(true);
    }
    useEffect(() => {
        idCheck()
        // eslint-disable-next-line
    }, [props.match.params.id]);

    const getRedirectSource = (id) => {
        const idToSrc = JSON.parse(localStorage.getItem('idToSrc')) || {};
        if (id in idToSrc) {
            return idToSrc[id];
        }
        return null;
    }

    return (
        <div>
            {error ?
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '20pt' }}>
                    Error: No matching url found
                </div>
                :
                <div></div>
            }
        </div>
    )
}