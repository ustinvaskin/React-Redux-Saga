import React from "react";

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
    };
  }

  // arrow function so no binding
  submitHandler = (event) => {
    // no reloading
    event.preventDefault();
    const { title, content } = this.state;
    // creating new post with data from input
    const newPost = {
      title,
      content,
      id: Date.now().toString(),
    };
    console.log(newPost);
    // clearing the input 
    this.setState({ title: "", content: "" });
  };

  changeInputHandler = (event) => {
    // dinamicly changing keys and values universal for inputs
    this.setState((prev) => ({
      ...prev,
      ...{ [event.target.name]: event.target.value },
    }));
  };
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="form-group pb-2">
          <label htmlFor="title">Post titile</label>
          <input
            type="text"
            name="title"
            id="title"
            className="form-control"
            value={this.state.title}
            onChange={this.changeInputHandler}
          />
          <label htmlFor="content">Content</label>
          <textarea
            type="text"
            name="content"
            id="content"
            className="form-control"
            value={this.state.content}
            onChange={this.changeInputHandler}
          />
        </div>
        {/* type submit so it will fire an event  */}
        <button className="btn btn-success" type="submit">
          Create
        </button>
      </form>
    );
  }
}
