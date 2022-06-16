import './App.sass';
import barra from './barra.png'
import user from './user.png'
import error from './error.png'
import { Fragment, useRef, useState } from 'react';

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
    setCount(count => count - 1)
  }

  return (
    <Fragment>
      {
        count === 0 ?
          <iframe width="420" height="315"
            frameBorder="0"
            allowFullScreen="allowFullScreen"
            src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1&disablekb=1&modestbranding=1&autohide=1&showinfo=0&controls=0&playsinline=1">
          </iframe> 
        :
        <div className='hero is-fullheight'>
          <header className='head'>
            <img src={barra}/>
          </header>
          <section className='hero-body'>
            <div className="container has-text-centered">
              <img src={user} className={'user'}/>
              <div className="field text">
                <div className="control">
                  <input ref={inputRef} className="input is-small" type="password" 
                    onKeyDown={e => {e.key === 'Enter' && onKeyDown()}}
                  />
                </div>
              </div>
              <div ref={ref1} className='warning' hidden>
                <img src={error}/>
              </div>
              <p ref={ref2} className='count' hidden>{count}</p>
              <p className='name'>GABRIEL DINSEN</p>
            </div>
          </section>
        </div>
      }
    </Fragment>
  );
}

export default App;
