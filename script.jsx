

let cnumber = "---- ---- ---- ----";
let cholder = "YOUR NAME";
let cmonth = "MM";
let cyear = "YY";
let cvvs = "CVV";

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
              <svg width="95" height="103" viewBox="0 0 95 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_1_108)">
                  <g filter="url(#filter1_d_1_108)">
                    <path d="M60.5 27L44 34.3333V45.3333C44 55.5083 51.04 65.0233 60.5 67.3333C69.96 65.0233 77 55.5083 77 45.3333V34.3333L60.5 27Z" fill="url(#paint0_radial_1_108)" shape-rendering="crispEdges" />
                  </g>
                </g>
                <defs>
                  <filter id="filter0_d_1_108" x="0" y="0" width="95" height="102.333" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-13" dy="4" />
                    <feGaussianBlur stdDeviation="15.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.11 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_108" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_108" result="shape" />
                  </filter>
                  <filter id="filter1_d_1_108" x="40" y="27" width="41" height="48.3333" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_108" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_108" result="shape" />
                  </filter>
                  <radialGradient id="paint0_radial_1_108" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(61 35) rotate(-25.5297) scale(37.1248 30.3748)">
                    <stop stop-color="#D9D9D9" />
                    <stop offset="0.9999" stop-color="#D9D9D9" stop-opacity="0" />
                    <stop offset="1" stop-color="#D9D9D9" stop-opacity="0" />
                  </radialGradient>
                </defs>
              </svg>




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
