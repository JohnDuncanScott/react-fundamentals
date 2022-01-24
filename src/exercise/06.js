// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // const usernameRef = React.useRef(null);
  //const [errorMessage, setErrorMessage] = React.useState();
  const [username, setUsername] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    //const username = event.target.elements.username.value;
    //const username = usernameRef.current.value;
    onSubmitUsername(username);
  }

  // function handleOnChange(event) {
  //   const username = usernameRef.current.value;
  //   const isInputValid = username === username.toLowerCase();
  //   setErrorMessage(isInputValid ? null : "Username must be lower case");
  // }

  function handleOnChange(event) {
    setUsername(event.target.value.toLowerCase());
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        {/* <input type="text" name="username" ref={usernameRef} onChange={handleOnChange} /> */}
        <input type="text" name="username" value={username} onChange={handleOnChange} />
      </div>
      {/* <div role="alert" style={{color: 'red'}}>{errorMessage}</div> */}
      {/* <button disabled={Boolean(errorMessage)} type="submit">Submit</button> */}
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
