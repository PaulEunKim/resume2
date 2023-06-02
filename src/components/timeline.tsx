// import * as React from 'react';
// import { Component } from 'react';
// import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';
// import { deepOrange, deepPurple } from '@mui/material/colors';

// // export default function LetterAvatars() extends React.Component{
// //   return (
// // <>
// // <p>testing</p>
// // </>
// //     // <Stack direction="row" spacing={2}>
// //     //   <Avatar>H</Avatar>
// //     //   <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
// //     //   <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
// //     // </Stack>
// //   );
// // }


// class Button extends Component {
//     render() {
//       // ...
//     }
//   }
  

import React from 'react';

// Functional component
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Class component
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  render() {
    return (
      <div>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={() => this.incrementCount()}>Increment</button>
      </div>
    );
  }
}

// Parent component
function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <Counter />
    </div>
  );
}

export default App;