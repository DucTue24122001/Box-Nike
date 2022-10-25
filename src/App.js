import Nike from "../src/image/nike.png";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <>
      <div className="card">
        {/* <div className="card__">
        <span className="like"></span>
        <span className="cart"></span>
      </div> */}

        <div className="card__img d-flex">
          <img src={Nike} alt="loading..." />
        </div>
        <h2 className="card__title">Nike Zoom KD 12</h2>
        <p className="card__price">$99</p>

        <div className="card__size">
          <h3>Size:</h3>
          <span>6</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
        </div>

        <div className="card__color">
          <h3>Color:</h3>
          <span className="green"></span>
          <span className="red"></span>
          <span className="black"></span>
        </div>

        <div className="card__action">
          <button>Buy Now</button>
          <button>Add Card</button>
        </div>
      </div>
    </>
  );
}

export default App;
