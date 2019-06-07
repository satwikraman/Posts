import React, { Component } from 'react'
// import axios from 'axios'
import { Link } from 'react-router-dom'

class Home extends Component {
  state = {
    
  }
  render(){
     var { products}=this.props.data
    
    var length
    if(products){
      length=products.length
    }
     const postList = length ? (
      products.map((post,id) => {
        return (
          <div className="post card" key={post.productId}>
            <div className="card-content">
              <Link to={'/' +id}>
                <span className="card-title red-text">{post.productName}</span>
              </Link>
              <p className="Container" dangerouslySetInnerHTML={ {__html: post.shortDescription}}></p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts to show</div>
    );
    return (
      <div>
        <div className="container">
          <h4 className="center">Home</h4>
          {postList}
        </div>
      </div>
    )
  
  }
}

export default Home