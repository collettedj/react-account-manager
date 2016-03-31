import React from 'react';

const SubredditButtons = ({
    items,
    clickFetch,
    clickInvalidate
}) => (
    <div>
        <h1>This is a test</h1>
        <button type="button" className="btn btn-default" onClick={clickFetch}>Fetch</button>
        <button type="button" className="btn btn-default" onClick={clickInvalidate}>Invalidate</button>
        <div>
            {items.map(i => {
            return <pre key={i.id}>
                <code>{i.selftext}</code>
            </pre>
            })}
        </div>
    </div>
);

export default SubredditButtons;
