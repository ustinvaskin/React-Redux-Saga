import React from "react";
import {connect} from 'react-redux'
import {createPost} from '../redux/actions'
 class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
  }

  // ON SUBMIY
  submitHandler = (event) => {
    event.preventDefault();
    const { title, body } = this.state;
// will not allow empty fields
    if (!title.trim() || !body.trim()){
        alert('Please fill in required fileds')
        return
    }
    // WE CREATE NEW POST
    const newPost = {
      title,
      body,
      id: Date.now().toString(),
    };
    console.log(newPost);
    // AND GIVE IT TO THE FUNCTION ACTION createPost
    // SO IT WILL ACCEPT NEW POST AS PAYLOAD
    this.props.createPost(newPost)
    this.setState({ title: "", body: "" });
  };

  changeInputHandler = (event) => {
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
          <label htmlFor="body">Content</label>
          <textarea
            type="text"
            name="body"
            id="body"
            className="form-control"
            value={this.state.body}
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

// This will tell what action we need to add to this components
const mapDispatchToProps = {
createPost
} 

export default connect(null, mapDispatchToProps)(PostForm)