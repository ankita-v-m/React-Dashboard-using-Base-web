// Importing Styletron which is the styling engine for Base Web.
// Importing BaseProvider, which will save the style state and LightTheme.

import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';

import Dashboard from './components/dashboard';

const engine = new Styletron();

function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Dashboard />
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
