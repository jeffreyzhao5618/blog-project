import React, { Component } from "react";
import BlogPostPreviewList from "./blog-post-preview/BlogPostPreviewList";
import "./main.css";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      previewPosts: [
        {
          id: "123",
          title: "Test Post One",
          date: "01/09/2021",
          time: "5:52 PM",
          text:
            "blah blah blah blah this is a lot of text but i dont really know what to talk about I guess it doesn't really matter to anyone except myself who is currently typing out this long string of text hopefully it is long enough and doesn't contain too many spelling mistakes.blah blah blah blah this is a lot of text but i dont really know what to talk about I guess it doesn't really matter to anyone except myself who is currently typing out this long string of text hopefully it is long enough and doesn't contain too many spelling mistakes.blah blah blah blah this is a lot of text but i dont really know what to talk about I guess it doesn't really matter to anyone except myself who is currently typing out this long string of text hopefully it is long enough and doesn't contain too many spelling mistakes.blah blah blah blah this is a lot of text but i dont really know what to talk about I guess it doesn't really matter to anyone except myself who is currently typing out this long string of text hopefully it is long enough and doesn't contain too many spelling mistakes.blah blah blah blah this is a lot of text but i dont really know what to talk about I guess it doesn't really matter to anyone except myself who is currently typing out this long string of text hopefully it is long enough and doesn't contain too many spelling mistakes.blah blah blah blah this is a lot of text but i dont really know what to talk about I guess it doesn't really matter to anyone except myself who is currently typing out this long string of text hopefully it is long enough and doesn't contain too many spelling mistakes.blah blah blah blah this is a lot of text but i dont really know what to talk about I guess it doesn't really matter to anyone except myself who is currently typing out this long string of text hopefully it is long enough and doesn't contain too many spelling mistakes.blah blah blah blah this is a lot of text but i dont really know what to talk about I guess it doesn't really matter to anyone except myself who is currently typing out this long string of text hopefully it is long enough and doesn't contain too many spelling mistakes.",
          tags: ["one", "red", "blue"],
        },
        {
          id: "345",
          title: "Test Post Two",
          date: "01/09/2021",
          time: "5:52 PM",
          text:
            "Lorem ipsum bipsumblah blah blah blah this is a lot of text but i dont really know what to talk about I guess it doesn't really matter to anyone except myself who is currently typing out this long string of text hopefully it is long enough and doesn't contain too many spelling mistakes.blah blah blah blah this is a lot of text but i dont really know what to talk about I guess it doesn't really matter to anyone except myself who is currently typing out this long string of text hopefully it is long enough and doesn't contain too many spelling mistakes.blah blah blah blah this is a lot of text but i dont really know what to talk about I guess it doesn't really matter to anyone except myself who is currently typing out this long string of text hopefully it is long enough and doesn't contain too many spelling mistakes.blah blah blah blah this is a lot of text but i dont really know what to talk about I guess it doesn't really matter to anyone except myself who is currently typing out this long string of text hopefully it is long enough and doesn't contain too many spelling mistakes.blah blah blah blah this is a lot of text but i dont really know what to talk about I guess it doesn't really matter to anyone except myself who is currently typing out this long string of text hopefully it is long enough and doesn't contain too many spelling mistakes.blah blah blah blah this is a lot of text but i dont really know what to talk about I guess it doesn't really matter to anyone except myself who is currently typing out this long string of text hopefully it is long enough and doesn't contain too many spelling mistakes.blah blah blah blah this is a lot of text but i dont really know what to talk about I guess it doesn't really matter to anyone except myself who is currently typing out this long string of text hopefully it is long enough and doesn't contain too many spelling mistakes.blah blah blah blah this is a lot of text but i dont really know what to talk about I guess it doesn't really matter to anyone except myself who is currently typing out this long string of text hopefully it is long enough and doesn't contain too many spelling mistakes. mipsum quipsum greetsum meepe meepu beebebe bebebeb ooka agaug the quick fox jumped over the lazy brown dog",
          tags: ["hello", "yellow"],
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <BlogPostPreviewList posts={this.state.previewPosts} />
      </React.Fragment>
    );
  }
}

export default Home;
