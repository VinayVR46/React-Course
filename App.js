const root = ReactDOM.createRoot(document.getElementById("root"))
const heading = React.createElement("h1", {id:"heading"},"I will be a UI Engineer")
root.render(heading)
console.log(heading)
const parent = React.createElement("div", {id:"parent"}, React.createElement("div", {id:"child"}, 
React.createElement("div", {}, [
    React.createElement("h1",{id:"heading-h1"},"I want be a UI engineer"),
React.createElement("h2",{id:"heading-h2"},"I will achieve my goals")])))
root.render( parent)
console.log(parent)