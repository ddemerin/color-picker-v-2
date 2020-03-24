import React, { useState, useEffect } from 'react'

import background from './images/checkered.png'

const App = () => {
  const [hue, setHue] = useState(Math.floor(Math.random() * 360))
  const [sat, setSat] = useState(Math.floor(Math.random() * 100))
  const [light, setLight] = useState(Math.floor(Math.random() * 100))
  const [alpha, setAlpha] = useState(100)
  const [bgcolor, setBgcolor] = useState(0)
  const [hsla, setHsla] = useState(0)

  const updateHue = (e) => {
    const h = e.target.value
    setHue(h)
  }

  const updateSat = (e) => {
    const s = e.target.value
    setSat(s)
  }

  const updateLight = (e) => {
    const l = e.target.value
    setLight(l)
  }
  const updateAlpha = (e) => {
    const a = e.target.value
    setAlpha(a)
  }
  const updateAll = (e) => {
    const h = e.target.value
    const s = e.target.value
    const l = e.target.value
    setHue(h)
    setSat(s)
    setLight(l)
  }

  const randomAll = (e) => {
    setHue(Math.floor(Math.random() * 360))
    setSat(Math.floor(Math.random() * 100))
    setLight(Math.floor(Math.random() * 100))
  }

  useEffect(() => {
    const newHsla = `hsla(${hue},
      ${sat}%,
      ${light}%)`
    setHsla(newHsla)
  }, [hue, sat, light])

  useEffect(() => {
    const newBG = `${hue},
      ${sat}%,
      ${light}%, ${alpha}%`
    setBgcolor(newBG)
  }, [hue, sat, light, alpha])

  return (
    <body>
      <main>
        <section className="color-display-container">
          <aside className="color-display">
            <h1>Color</h1>
            <div
              className="color-box-container"
              style={{ backgroundImage: `url(${background})` }}
            >
              <div
                className="color-box"
                style={{
                  backgroundColor: `hsla(${bgcolor})`,
                }}
              ></div>
            </div>
            <button
              onClick={randomAll}
              className="random-button"
              name="random-button"
              value={updateAll}
            >
              Randomize!
            </button>
          </aside>
          <div className="hsla-code-container">
            <p className="hsla-code">{hsla}</p>
          </div>
        </section>
        <section className="hsla-container">
          <div className="h-container">
            <label htmlFor="h-slider">H</label>
            <input
              onChange={updateHue}
              type="range"
              className="h-slider"
              name="h-slider"
              min="0"
              max="360"
              value={hue}
            ></input>
            <p className="percent">{hue}</p>
          </div>
          <div className="s-container">
            <label htmlFor="s-slider">S</label>
            <input
              onChange={updateSat}
              type="range"
              className="s-slider"
              name="s-slider"
              min="0"
              max="100"
              value={sat}
            ></input>
            <p className="percent">{sat}%</p>
          </div>
          <div className="l-container">
            <label htmlFor="l-slider">L</label>
            <input
              onChange={updateLight}
              type="range"
              className="l-slider"
              name="l-slider"
              min="0"
              max="100"
              value={light}
            ></input>
            <p className="percent">{light}%</p>
          </div>
          <div className="a-container">
            <label htmlFor="a-slider">A</label>
            <input
              onChange={updateAlpha}
              type="range"
              className="a-slider"
              name="a-slider"
              min="0"
              max="100"
              value={alpha}
            ></input>
            <p className="percent">{alpha}%</p>
          </div>
        </section>
      </main>
    </body>
  )
}

export default App
