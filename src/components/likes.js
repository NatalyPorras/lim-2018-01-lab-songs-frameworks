import React, { Component } from 'react';

class Likes extends Component {
    constructor(props){
        super(props)
        this.state={
            likes: ''
        }
    }
    componentDidMount() {
        const { countLikes } = this.props;
        this.setState({ likes: countLikes })
      }
    
      countLikesButton(e){
        this.setState({ likes: this.state.likes + 1 })
      }
    
      countDislikes(e){

        if (this.state.likes >= 0) {
          this.setState({ likes: this.state.likes - 1 });
        }else{
          this.setState({ likes: 0 });
        }
      }
    render(){
        const {name} = this.props
        return (
            <div>
                <div ><h5>{name}</h5></div>
                <div ><i class="far fa-thumbs-up" onClick={this.countLikesButton.bind(this)}></i></div>
                <div ><i class="far fa-thumbs-down" onClick={this.countDislikes.bind(this)}></i></div>
                <div ><h5>{this.state.likes}</h5></div>
            </div>
        )
    }
}
export default Likes;