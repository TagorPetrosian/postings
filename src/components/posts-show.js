import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPost } from "../actions/index";

class PostsShow extends Component {
  componentDidMount() {
    //params object provided by react router contains all the different params in the url for example path="posts/:id/:commentId" the params will be id and commentId
    // this.props.match.params.id;
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }
  render() {
    const { post } = this.props;
    //the post we want to show
    // posts[this.props.match.params.id];

    if (!post) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Link to="/">Back To Index</Link>
        <h3>{post.title}</h3>
        <h6>Categories: {post.tags}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}
// ownPros is the props object that is headed to this component this.props === ownProps
function mapStateToProps({ posts }, ownProps) {
  // return { posts };
  return { post: posts[ownProps.match.params.id] };
}

export default connect(
  mapStateToProps,
  { fetchPost }
)(PostsShow);
