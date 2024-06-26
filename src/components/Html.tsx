import React from 'react'

interface htmlprop {
   content?: any,
   state?: any
}

const Html: React.FC<htmlprop> = ({ content, state }) => {
   return (
      <html>
         <body>
            <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
            <script dangerouslySetInnerHTML={{
               __html: `window.__APOLLO_STATE__=${JSON.stringify(state).replace(/</g, '\\u003c')};`,
            }} />
         </body>
      </html>
   )
}

export default Html
