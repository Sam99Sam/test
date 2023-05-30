import './App.css';
import React from 'react';
import {Suspense} from 'react';

const Header = React.lazy(() => import('./Components/Header/Header'))


function App() {

  return (
    <div className="app">
      <Suspense fallback={<div className='load'>Loading...</div>}>
        <section>
          <Header/>
        </section>
      </Suspense>
    </div>
  );
}

export default App;
