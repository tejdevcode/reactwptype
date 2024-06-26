import React from 'react'
import { type RenderToPipeableStreamOptions, renderToPipeableStream } from 'react-dom/server'
import { StaticRouter } from "react-router-dom/server";
/* import { ApolloProvider } from '@apollo/client';
import { createApolloClient } from './lib/apollo'; */

import App from './App'

/* const apolloClient = createApolloClient(); */

export function render(_url: string, _ssrManifest?: string, options?: RenderToPipeableStreamOptions) {
  return renderToPipeableStream(
    <>
      {/* <ApolloProvider client={apolloClient}></ApolloProvider> */}
      <StaticRouter location={_url}>
        <App />
      </StaticRouter>
    </>,
    options
  )
}
