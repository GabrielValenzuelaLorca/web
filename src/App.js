import './App.sass';
import barra from './barra.png'
import user from './user.png'
import error from './error.png'
import { useRef, useState } from 'react';

function App() {
  const [count, setCount] = useState(10)
  const ref1 = useRef();
  const ref2 = useRef();
  const inputRef = useRef();

  const onKeyDown = () => {
    inputRef.current.value = '';
    if (count === 10) {
      console.log(ref1.current, 'a')
      ref1.current.removeAttribute('hidden');
      ref2.current.removeAttribute('hidden');
    }
    if (count > 1) {
      setCount(count => count - 1)
    }
  }

  return (
    <div className='hero is-fullheight'>
      <header className='head'>
        <img src={barra}/>
      </header>
      <section className='hero-body'>
        <div className="container has-text-centered">
          <img src={user} className={'user'}/>
          <div className="field text">
            <div className="control">
              <input ref={inputRef} className="input is-small" type="text" 
                onKeyDown={e => {e.key === 'Enter' && onKeyDown()}}
              />
            </div>
          </div>
          <div ref={ref1} className='warning' hidden>
            <img src={error}/>
          </div>
          <p ref={ref2} className='count' hidden>{count}</p>
        </div>
      </section>
    </div>
  );
}

export default App;
