import "./PoemCard.css"
import React, { useRef, useState, useEffect, useContext } from 'react';
import { RenderDelta } from 'quill-delta-to-react';

export default function PoemCard({ workDate, workId, workBody }) {
    const parsed = workBody && workBody.trim() ? JSON.parse(workBody).ops : null;
    const body = parsed?.length ? parsed : null;
    return (
        <div className="poem-card-container">
            {body && <RenderDelta ops={body} />}
            <p className="poem-date">{workDate}</p>
        </div>
    );
}