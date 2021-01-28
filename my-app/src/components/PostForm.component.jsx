import React from "react";

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  // arrow function so no binding
  submitHandler = (event) => {
    // no reloading
    event.preventDefault();
    console.log(this.state);
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
        </div>
        {/* type submit so it will fire an event  */}
        <button className="btn btn-success" type="submit">
          Create
        </button>
      </form>
    );
  }
}
