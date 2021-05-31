import React from "react"


export default class Info extends React.Component{
    render(){
        const title = "This is my Title"
        return(
            <div>
                <h1>{title}</h1>
            </div>
        )
    }
}