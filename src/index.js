import React from "react"
import  ReactDOM from "react-dom"

const App = () => {
    return (
        <div>
            Meu primeiro componente React.
        </div>
    )
        
}

ReactDOM.render(
    <App/>,
    //document.getElementById("root")
    document.querySelector("#root")
)














{/* <html>
    <head>

    </head>
    <body>
        <div id="root"></div>
    </body>
</html>

function app(params) {
    return <div>01</div>    
}

document.getElementById("ROOT") */}