import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="from-group">
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        {field.meta.touched ? field.meta.error : ""}
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    // handleSubmit is a property being passed to the component on behalf redux-form
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title For Post"
          name="title"
          component={this.renderField}
        />
        <Field label="Tags" name="tags" component={this.renderField} />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary m-t-1">
          Submit
        </button>
      </form>
    );
  }
}
// Runs automatically by redux forms
function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "Enter a title";
  }

  if (!values.tags) {
    errors.tags = "Enter some categories";
  }

  if (!values.content) {
    errors.content = "Enter some content please";
  }
  return errors;
}

export default reduxForm({
  validate,
  form: "PostsNewForm"
})(PostsNew);
