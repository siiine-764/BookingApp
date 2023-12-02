import React, { useState } from 'react';
import './Register.css';

const Register = () => {
const [marginLeft, setMarginLeft] = useState('0');

const handleRightToLeftClick = () => {
    setMarginLeft('0');
};

const handleLeftToRightClick = () => {
    setMarginLeft('50%');
};

  return (
    <div>
    <div id="background">
        <div className="background-Right"></div>
        <div className="background-Left"></div>
    </div>

    <div id="slide" style={{ marginLeft }}>
        <div className="top" style={{ marginLeft: marginLeft === '0' ? '100%' : '0' }}>
            <div className="left">
                <div className="content">
                    <h2>Sign Up</h2>
                    <form method="post" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <input type="text" placeholder="email" />
                            <br />
                            <input type="password" placeholder="password" />
                        </div>
                    </form>
                    <button id="LeftToRight" className="on-off btn" onClick={handleLeftToRightClick}>Login</button>
                    <button onClick={handleRightToLeftClick} className='btn'>Register</button>
                </div>
            </div>

            <div className="right">
                <div className="content">
                    <h2>Login</h2>
                    <form method="post" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <input type="text" placeholder="email" />
                            <br />
                            <input type="password" placeholder="password" />
                        </div>
                        <button id="RightToLeft" className="on-off btn" onClick={handleRightToLeftClick}>Register</button>
                        <button className='btn'>Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default Register;
