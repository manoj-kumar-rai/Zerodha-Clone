import React from 'react'

function Universe({productName, productDescription, learnMore, imageURL}) {
  return (
        <div className="container mt-5">
      <div className="row text-center">
<h1>The Zerodha Universe</h1>
        <p className='mt-5 mb-5'>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className='row'>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" alt=''/>
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5" >
          <img src="media/images/streakLogo.png" alt='' style={{width:"40%"}}/>
          <p className="text-small text-muted">Algo & stratergy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg" alt='' style={{width:"50%"}}/>
          <p className="text-small text-muted">Options Trading platform</p>
        </div>
        </div>
        <div className='row'>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/zerodhaFundhouse.png" alt=''style={{width:"40%"}}/>
          <p className="text-small text-muted">Asset Management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/tijori.svg" alt=''style={{width:"40%"}}/>
          <p className="text-small text-muted">Fundamental research platform</p>
        </div>
          <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" alt='' style={{width:"40%"}}/>
          <p className="text-small text-muted">Insurance</p>
        </div>
        </div>
        <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin:"0 auto"}}>Sign up now</button>
      </div>
    </div>
  )
}

export default Universe