import React, { Component } from "react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
class TextEditor extends Component {
  render() {
    const modules = {
      toolbar: [
        [{ header: [1, 2, 3, 4, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" }
        ],
        [{ color: [] }, { background: [] }],
        ["link"],
        ["clean"]
      ]
    };

    const formats = [
      "header",
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      "list",
      "bullet",
      "indent",
      "link",
      "color"
    ];
    return (
      <ReactQuill
        {...this.props}
        theme="snow"
        modules={modules}
        formats={formats}
      />
    );
  }
}

export default TextEditor;
