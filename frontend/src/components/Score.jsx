function Score() {

  const handleClick = () => {
    const dropdown = document.querySelector('.lang-picker-dropdown');
    const dropdownHead = document.querySelector('.dropdown-head');
    const element = <div className="lang-picker-overlay"></div>;
    document.body.appendChild(element)
    dropdown.classList.toggle('hidden')
    dropdownHead.classList.toggle('hidden')
  }

  const styleSVG = {
    height: '32.1951px',
    width: '40px'
  };

  return (
      <section className="score">
          <div className="lang-picker-container" onClick={handleClick}>
              <div className="selected-lang">
                  <svg viewBox="0 132 82 66" style={styleSVG}>
                      <image height="3168" width="82" href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image>
                  </svg>
              </div>
              <div className="dropdown-head hidden"></div>
              <div className="lang-picker-dropdown hidden">
                  <div data-index="0" className="lang-picker-dropdown-item">
                      <svg viewBox="0 66 82 66" style={styleSVG}>
                          <image height="3168" width="82" href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image>
                      </svg>
                  </div>
                  <div data-index="1" className="lang-picker-dropdown-item">
                      <svg viewBox="0 132 82 66" style={styleSVG}>
                          <image height="3168" width="82" href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image>
                      </svg>
                  </div>
                  <div data-index="2" className="lang-picker-dropdown-item">
                      <svg viewBox="0 2178 82 66" style={styleSVG}>
                          <image height="3168" width="82" href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image>
                      </svg>
                  </div>
                  <div data-index="3" className="lang-picker-dropdown-item">
                      <svg viewBox="0 198 82 66" style={styleSVG}>
                          <image height="3168" width="82" href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image>
                      </svg>
                  </div>
                  <div data-index="4" className="lang-picker-dropdown-item">
                      <svg viewBox="0 330 82 66" style={styleSVG}>
                          <image height="3168" width="82" href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image>
                      </svg>
                  </div>
                  <div data-index="5" className="lang-picker-dropdown-item">
                      <svg viewBox="0 462 82 66" style={styleSVG}>
                          <image height="3168" width="82" href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image>
                      </svg>
                  </div>
                  <div data-index="6" className="lang-picker-dropdown-item">
                      <svg viewBox="0 528 82 66" style={styleSVG}>
                          <image height="3168" width="82" href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image>
                      </svg>
                  </div>
              </div>
          </div>
          <div className="progress-bar"></div>
          <div className="hearts-left">
              <img src="data:image/svg+xml,%3csvg%20width='33'%20height='32'%20viewBox='0%200%2033%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3%2012.6798C3%2015.2727%204.31423%2017.5654%206.32688%2018.9559L14.9105%2026.445C15.9302%2027.3347%2017.4537%2027.3228%2018.4595%2026.4174L27.092%2018.6456C28.8662%2017.2376%2030.0001%2015.0882%2030.0001%2012.6798C30.0001%208.43862%2026.4839%205.00049%2022.1464%205.00049C19.93%205.00049%2017.928%205.89823%2016.5%207.34212C15.0721%205.89823%2013.0701%205.00049%2010.8537%205.00049C6.51622%205.00049%203%208.43862%203%2012.6798Z'%20fill='%23FF4B4B'/%3e%3cpath%20opacity='0.3'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M10.5348%2015.9898C12.2687%2015.9898%2013.6743%2014.5427%2013.6743%2012.7576C13.6743%2010.9725%2012.2687%209.52539%2010.5348%209.52539C8.80088%209.52539%207.39526%2010.9725%207.39526%2012.7576C7.39526%2014.5427%208.80088%2015.9898%2010.5348%2015.9898Z'%20fill='white'/%3e%3c/svg%3e" alt="heart" />
              <h1 className="hearts">5</h1>
          </div>
      </section>       
  );
}

export default Score;