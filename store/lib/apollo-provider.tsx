'use client'
import { ApolloClient, ApolloLink, ApolloProvider } from '@apollo/client'
import { InMemoryCache } from '@apollo/client/cache'
import { onError } from '@apollo/client/link/error'
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs'

const link = createUploadLink({
  uri: process.env.NEXT_PUBLIC_API_URL,
  fetchOptions: {
    credentials: 'include',
  },
})

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) => {
          const msg = `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          console.error('🚀 ~ graphQLErrors.map ~ msg:', msg)
        })
      if (networkError) console.error(`[Network error]: ${networkError}`)
    }),
    link,
  ]),
  cache: new InMemoryCache(),
})

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
