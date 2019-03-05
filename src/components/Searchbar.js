import React from 'react'



class Searchbar extends React.Component{

    state = { term:'' }

    InputChange = (e) =>{
        this.setState({term:e.target.value})
    }

    InputSubmit = (event) =>{

        event.preventDefault();

        

        this.props.onFromSubmit(this.state.term)

    }   



    render(){

        return(
            <div className="search-bar ui segment">
                <form  onSubmit={this.InputSubmit} className="ui form">      
                <div  className="field">
                    <label>Video Search</label>
                    <input
                        type="text"
                        value={this.state.term}    
                        onChange={this.InputChange}


                    />
                </div>
                </form> 

           </div>  
        )
    }
}


export default Searchbar

