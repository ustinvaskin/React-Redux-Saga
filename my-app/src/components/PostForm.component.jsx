import React from "react";

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // arrow function so no binding
  submitHandler = (event) => {
    // no reloading
    event.preventDefault();
    console.log("kdmndfk");
  };
  render() {
    return (
        <form onSubmit={this.submitHandler}>
          <div className="form-group pb-2">
            <label htmlFor="title">Post titile</label>
            <input type="text" name="title" id="title" className="form-control"/>
          </div>
          {/* type submit so it will fire an event  */}
          <button className="btn btn-success" type="submit">Create</button>
        </form>
    );
  }
}
