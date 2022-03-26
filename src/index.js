import React from "react"
import  ReactDOM from "react-dom"

const App = () => {
    return (
        <div style={{margin: 'auto', width: 768, backgroundColor: '#EEE',
            padding: 12, borderRadius: 8}}>
                <label htmlfor="nome" style={{display: 'block', marginBottom: 4}}>
                    Nome:
                </label>
                    <input id="nome" type="text" style={{
                        paddingTop: 8, paddingBottom: 8,
                        borderStyle: 'hidden', outline: 'nome',
                        width: '100%'
                    }}>/
                        <button style={{marginTop: 12, paddingTop: 8,
                            paddingBottom: 8, backgroundColor: 'blueviolet', color:
                            'white', border: 'nome',borderRadius: 8, width: '100%'}}
                        >Enviar</button>
                    </input>
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