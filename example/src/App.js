import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addNewNote,
  changePosts,
  removeNote
} from "./store/actions/actionCreators";
import bin from "./bin.png";
class App extends Component {
  state = {
    noteName: ""
  };
  render() {
    return (
      <div className="notesContainer">
        <h1>NOTES APP</h1>
        <div className="notesAdderContainer">
          <input
            type="text"
            placeholder="Enter new notes"
            onChange={event => {
              this.setState({ noteName: event.target.value });
            }}
            value={this.state.noteName}
            className="notesInput"
          />
          <button
            onClick={() => {
              if (this.state.noteName.length > 0) {
                this.props.addTheNewNote(this.state.noteName);
                this.setState({ noteName: "" });
              }
            }}
            className="notesAddButton"
          >
            Add Note
          </button>
        </div>
        <div>
          {this.props.notes &&
            this.props.notes.map((note, index) => {
              return (
                <div key={index} className="notesContent">
                  <p>{note}</p>
                  <img
                    src={bin}
                    alt="delete"
                    className="deleteImage"
                    onClick={() => this.props.removeTheNote(index)}
                  />
                </div>
              );
            })}
        </div>

        {/* <br></br>
        <br></br>
        <br></br>
        <h3>{this.props.posts}</h3>
        <input
          type="text"
          onChange={event => {
            this.props.changeThePosts(event.target.value);
          }}
          placeholder="enter posts"
        /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.NoteReducer.notes,
    posts: state.PostReducer.posts
  };
};
const mapDipatchToProps = dispatch => {
  return {
    addTheNewNote: note => dispatch(addNewNote(note)),
    changeThePosts: post => dispatch(changePosts(post)),
    removeTheNote: index => dispatch(removeNote(index))
  };
};

export default connect(mapStateToProps, mapDipatchToProps)(App);
