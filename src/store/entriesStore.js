import React, { useRef, useState, useEffect } from 'react';

function createEntry({ body, date }) {
  return {
    id: Date.now(),
    body,
    date,
  };
}
export default createEntry;