const App = () => {
  return (
    <>
      <div className="main-wrapper">
        <h1>Dynamic Card Using React</h1>
        <div className="form-wrapper">
          <div className="card-wrapper">
            <div className="card1">
              <p className="platinum">Platinum</p>
              <img id="chip-card" src="chip-card.svg" />
              <img id="wireless" src="wireless.svg" />
              <span className="name">YOUR NAME</span>
              <p className="card-number-text">--- ---- ---- ----</p>
              <div>
                <p className="valid">
                  VALID <br />
                  THRU
                </p>
                <p className="valid-year">12/25</p>
                <p className="visa">VISA</p>
              </div>
            </div>
            <div className="card2">
              <div className="strip"></div>
              <div className="cvv-strip">
                <hr></hr>
                <hr></hr>
                <hr></hr>
                <p>123</p>
              </div>
              <img src="secure.svg" />
            </div>
          </div>
        </div>
      </div>
      <form>
        <input id="card-number" type="number" placeholder="CARD NUMBER" />
        <input
          id="card-name"
          type="text"
          maxlength="26"
          placeholder="CARD HOLDER"
        />
        <div className="column-three">
          <input type="number" placeholder="EXPIRE MONTH" />
          <input type="number" maxlength="4" placeholder="EXPIRE YEAR" />
          <input type="number" maxlength="3" placeholder="CVV" />
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </>
  );
};

const creactElement = ReactDOM.createRoot(document.getElementById("root"));
creactElement.render(<App />);
