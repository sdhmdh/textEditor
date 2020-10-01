import React, { Component } from "react";
import { render } from "react-dom";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "./App.css";

class EditorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  onEditorStateChange = (editorState) => {
    // console.log(editorState)
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <div className="my-little-app">
        <h1>Playing with Draft.js!</h1>
        <div className="draft-editor-wrapper">
          <Editor
            editorState={editorState}
            onEditorStateChange={this.onEditorStateChange}
            toolbar={{
              inline: { inDropdown: true },
              list: { inDropdown: true },
              textAlign: { inDropdown: true },
              link: { inDropdown: true },
              history: { inDropdown: true },
            }}
          />
        </div>
      </div>
    );
  }
}

const App = () => <EditorContainer />
 

render(<App />, document.getElementById("root"));
