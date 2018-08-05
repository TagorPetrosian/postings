import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../actions/index";

class PostsShow extends Component {
  componentDidMount() {
    //params object provided by react router contains all the different params in the url for example path="posts/:id/:commentId" the params will be id and commentId
    this.props.match.params.id;
    this.props.fetchPost();
  }
  render() {
    //the post we want to show
    // posts[this.props.match.params.id];
    return <div>Posts Show!</div>;
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
