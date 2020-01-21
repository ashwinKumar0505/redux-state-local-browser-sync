import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewBook, changePosts } from "./store/actions/actionCreators";
class App extends Component {
  state = {
    bookName: ""
  };
  render() {
    return (
      <div>
        <div>
          <h3>Your Books</h3>
          {this.props.books.map((book, index) => {
            return <p key={index}>{book}</p>;
          })}
        </div>
        <input
          type="text"
          placeholder="enter new book name"
          onChange={event => {
            this.setState({ bookName: event.target.value });
          }}
          value={this.state.bookName}
        />
        <button
          onClick={() => {
            this.props.addTheNewBook(this.state.bookName);
            this.setState({ bookName: "" });
          }}
        >
          Click to add book
        </button>
        <br></br>
        <br></br>
        <br></br>
        <h3>{this.props.posts}</h3>
        <input
          type="text"
          onChange={event => {
            this.props.changeThePosts(event.target.value);
          }}
          placeholder="enter posts"
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.BookReducer.books,
    posts: state.PostReducer.posts
  };
};
const mapDipatchToProps = dispatch => {
  return {
    addTheNewBook: book => dispatch(addNewBook(book)),
    changeThePosts: post => dispatch(changePosts(post))
  };
};

export default connect(mapStateToProps, mapDipatchToProps)(App);
