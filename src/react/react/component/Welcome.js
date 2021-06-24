// Function Component
// ok
function Welcome(props) {
  return <h1> Hello,{props.name}</h1>;
}

// fail
// function Welcome(params) {
//   return <h1> Hello,{params.name}</h1>;
// }
export default Welcome;