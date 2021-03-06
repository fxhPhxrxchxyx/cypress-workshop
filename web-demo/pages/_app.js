import { ApolloProvider } from '@apollo/react-hooks'
import { useApollo } from '../apollo/client'

import '../styles/antd.less'

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
