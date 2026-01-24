import React from 'react';

export default function AIChat() {
  return (
    <iframe
        className='popup-ai'
        src="https://israelgpt.net/chat"
        width="425"
        height="325"
        position="absolute"
        
        style={{ border: "none" }}
        title="IsraelGPT"
    />
  )
}
