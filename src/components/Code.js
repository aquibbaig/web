import React, { useEffect } from 'react'
import Prism from 'prismjs'

export default function Code({ content = '', language = 'javascript' }) {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  return (
    <div className="codeblock">
      <pre style={{ maxWidth: '100%', overflow: 'scroll' }}>
        <code style={{ maxWidth: '100%', overflow: 'scroll' }}>
          {content}
        </code>
      </pre>
      <style jsx>{`
        div {
          background-color: #111;
          border-radius: 0.2em;
          color: #fff;
          margin: 1em 0 1.5em 0;
          padding: 0.5em 0.75em;
        }
        code {
          max-width: 100%;
          overflow: 'scroll';
        }
      `}</style>
    </div>
  )
}
