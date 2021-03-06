import OGameApp from './components/OGameApp';
import OGameAppRoute from './routes/OGameAppRoute';
import React from 'react-native';
import Relay, {
  DefaultNetworkLayer,
  RootContainer,
} from 'react-relay';

Relay.injectNetworkLayer(
  new DefaultNetworkLayer('http://192.168.1.128:3001/graphql')
);

export default () => (
  <RootContainer
    Component={OGameApp}
    route={new OGameAppRoute()}
  />
);
