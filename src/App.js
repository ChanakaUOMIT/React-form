import React from 'react';

function App() {
  return (
    <div className="App">
      <form action="">
      <div className="form-group">
        <input type="email" placeholder="*Email" />
        <p className="input-error">This field is required and cannot be empty</p>
      </div>

      <div className="form-group">
          <input type="password" placeholder="*password" />
          <p className="input-error">This field is required and cannot be empty</p>
        </div>

        <div className="form-group">
            <input type="password" placeholder="*password confirmation" />
            <p className="input-error">This field is required and cannot be empty</p>
          </div>

          <button className="btn" type="submit">Sign Up</button>

    </form>
    </div>
  );
}

export default App;
