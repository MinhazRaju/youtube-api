import React from 'react'
import Searchbar from './Searchbar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

class App extends React.Component{

     state = {videos: [] ,  selectedVideo:null}

    componentDidMount(){
        this.InputStirng('Tom and jerry')
    }
   
    InputStirng = async  (term) =>{       

       const response  = await youtube.get('/search' ,{

            params:{
                q:term
            }
        })

        console.log(this.state)
         
      this.setState({
          videos: response.data.items,
          selectedVideo: response.data.items[0]
        
        })
      
      console.log(this.state)
    }



    onSelectVideo  =  (video) =>{
        this.setState({selectedVideo:video})
    }







    render(){

        return (
            <div className="ui container">
                  <Searchbar onFromSubmit={this.InputStirng}/>
                  <div className='ui grid'>  
                    <div className='ui row'>
                      <div className='eleven wide column'>  
                    <VideoDetail video={this.state.selectedVideo} />
                       </div> 
                       <div className='five wide column'> 
                    <VideoList  onSelectVideo= {this.onSelectVideo} videos={this.state.videos} />  
                        </div>
                    </div>
                 </div>
            </div>    

        )

    }


}


export default App

