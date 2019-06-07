import React, { Component } from 'react'

class Post extends Component {
  render() {
    let id=this.props.match.params.post_id
   let id1=parseInt(id)
    var { products}=this.props.data
    var length
    if(products){
      length=products.length
    }
    const post = length ? (
      products.map((post,index)=>{
        console.log(id,index)
        if(id1===index){
          console.log(post)
        return(
      <div className="post" key={post.productId}>
        <h4 className="center">{post.productName}</h4>
        <p className="Container" dangerouslySetInnerHTML={ {__html: post.longDescription}}></p>
      </div>
      )}
    return null
    })
    ) : (
      <div className="center">Loading post...</div>
    );
    return (
      <div className="container">
        {post}
      </div>
    )
  }
}

export default Post
