import React from 'react'

export default function Blockquote({ content = '' }) {
  return (
    <div>
      {content}
      <style jsx>{`
        div {
          max-width: 100%;
          border-left: 5px solid #616161;
          padding: 10px;
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  )
}
