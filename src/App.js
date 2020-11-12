import { HelmetProvider } from 'react-helmet-async';
import BlankLayout from './Layouts/BlankLayout';

function App() {
  const helmetContext = {};
  
  return (
    <HelmetProvider context={helmetContext}>
      <div>
        <BlankLayout />
      </div>
    </HelmetProvider>
  );
}

export default App;
