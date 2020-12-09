import { HelmetProvider } from 'react-helmet-async';
import BlankLayout from './Layouts/BlankLayout';

function App() {
  const helmetContext = {};
  
  return (
    <HelmetProvider context={helmetContext}>
      <BlankLayout />
    </HelmetProvider>
  );
}

export default App;
