import './App.css'
import MoviePicture from './movie-night.svg'

function App() {
  return (
    <div className="App">
      <div className="contentDiv">
        <img
          className="movieNightPic"
          src={MoviePicture}
          alt="popcorn and an events list"
        />
        <div className="rightSide">
          <div className="homepageText">
            <h1 className="appTitle">
              Imagine if <br />
              <span className="highlight">Snapchat</span>
              <br /> had events.
            </h1>
            <p>
              Easily host and share events with your friends across any social
              media.
            </p>
          </div>
          <button>🎉 Create my event</button>
        </div>
      </div>
    </div>
  )
}

export default App
