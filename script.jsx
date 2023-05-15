let cnumber = "---- ---- ---- ----";
let cholder = "YOUR NAME";
let cmonth = "MM";
let cyear = "YY";
let cvvs ="CVV";

const handleNumber = (e) => {
  const inputValue = e.target.value;
  // Set the card number to the first 16 characters of the input value
  cnumber = inputValue.slice(0, 16);
  creactElement.render(<App />);
};
const handleName = (e) => {
  const inputValue = e.target.value;
  const alphabeticValue = inputValue.replace(/[^A-Za-z ]/g, "");
  cholder = alphabeticValue.slice(0, 20).toUpperCase();
  creactElement.render(<App />);
};
const handleMonth = (e) => {
  const InputValue = e.target.value;
  cmonth = InputValue.slice(0, 2);
  creactElement.render(<App />);
};
const handleYear = (e) => {
  const ValueInput = e.target.value;
  cyear = ValueInput.slice(0, 2);
  creactElement.render(<App />);
};
const handleCvv = (e) => {
  const InputValue = e.target.value;
  cvvs = InputValue.slice(0, 3);
  creactElement.render(<App />);
};

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
              <span className="name">{cholder}</span>
              <p className="card-number-text">{cnumber}</p>
              <div className="keyDetails">
                <p className="valid">
                  VALID <br />
                  THRU
                </p>
                <p className="valid-year">
                  {cmonth}/{cyear}
                </p>
                <p className="visa">VISA</p>
              </div>
            </div>
            <div className="card2">
              <div className="strip"></div>
              <div className="cvv-strip">
                <hr></hr>
                <hr></hr>
                <hr></hr>
                <p>{cvvs}</p>
              </div>
              <img src="secure.svg" />
            </div>
          </div>

          <form>
            <input
              id="card-number"
              onInput={handleNumber}
              type="number"
              maxLength="16"
              placeholder="CARD NUMBER"
              value={cnumber}
            />
            <input
              id="card-name"
              onInput={handleName}
              type="text"
              maxLength="20"
              placeholder="CARD HOLDER"
              value={cholder}
            />
            <div className="column-three">
              <input
                type="number"
                onInput={handleMonth}
                placeholder="EXPIRE MONTH"
                value={cmonth}
              />
              <input
                type="number"
                onInput={handleYear}
                placeholder="EXPIRE YEAR"
                value={cyear}
              />
              <input
                type="number"
                onInput={handleCvv}
                onChange={handleCvv}
                value={cvvs}
                placeholder="CVV"
              />
            </div>
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </>
  );
};

const creactElement = ReactDOM.createRoot(document.getElementById("root"));
creactElement.render(<App />);
