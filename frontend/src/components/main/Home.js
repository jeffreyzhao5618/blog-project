import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import BlogPostPreviewList from "./blog-post-preview/BlogPostPreviewList";
import HomeNav from "./blog-post-preview/HomeNav";
import axios from "axios";
import { getDate, getTime } from "../../assets/utils";
import { SERVER_URL } from "../../config";
import "./main.css";

const POSTS_PER_PAGE = 2;

const DoRedirect = (props) => {
  if (!props.redirect) {
    return null;
  } else {
    return <Redirect to="/invalid" />;
  }
};

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      previewPosts: [
        // {
        //   id: "123",
        //   title: "Test Post One",
        //   date: "01/09/2021",
        //   time: "5:52 PM",
        //   content:
        //     "blah blah blah blah this is a lot of text but i dont really know what to talk about I guess it doesn't really matter to anyone except myself who is currently typing out this long string of text hopefully it is long enough and doesn't contain too many spelling mistakes.blah blah blah blah this is a lot of text but i dont really know what to talk about I guess it doesn't really matter to anyone except myself who is currently typing out this long string of text hopefully it is long enough and doesn't contain too many spelling mistakes.blah blah blah blah this is a lot of text but i dont really know what to talk about I guess it doesn't really matter to anyone except myself who is currently typing out this long string of text hopefully it is long enough and doesn't contain too many spelling mistakes.blah blah blah blah this is a lot of text but i dont really know what to talk about I guess it doesn't really matter to anyone except myself who is currently typing out this long string of text hopefully it is long enough and doesn't contain too many spelling mistakes.blah blah blah blah this is a lot of text but i dont really know what to talk about I guess it doesn't really matter to anyone except myself who is currently typing out this long string of text hopefully it is long enough and doesn't contain too many spelling mistakes.blah blah blah blah this is a lot of text but i dont really know what to talk about I guess it doesn't really matter to anyone except myself who is currently typing out this long string of text hopefully it is long enough and doesn't contain too many spelling mistakes.blah blah blah blah this is a lot of text but i dont really know what to talk about I guess it doesn't really matter to anyone except myself who is currently typing out this long string of text hopefully it is long enough and doesn't contain too many spelling mistakes.blah blah blah blah this is a lot of text but i dont really know what to talk about I guess it doesn't really matter to anyone except myself who is currently typing out this long string of text hopefully it is long enough and doesn't contain too many spelling mistakes.",
        //   tags: ["one", "red", "blue"],
        // },
        // {
        //   id: "345",
        //   title: "Test Post Two",
        //   date: "01/09/2021",
        //   time: "5:52 PM",
        //   content:
        //     "Lorem ipsum bipsumblah blah blah blah this is a lot of text but i dont really know what to talk about I guess it doesn't really matter to anyone except myself who is currently typing out this long string of text hopefully it is long enough and doesn't contain too many spelling mistakes.blah blah blah blah this is a lot of text but i dont really know what to talk about I guess it doesn't really matter to anyone except myself who is currently typing out this long string of text hopefully it is long enough and doesn't contain too many spelling mistakes.blah blah blah blah this is a lot of text but i dont really know what to talk about I guess it doesn't really matter to anyone except myself who is currently typing out this long string of text hopefully it is long enough and doesn't contain too many spelling mistakes.blah blah blah blah this is a lot of text but i dont really know what to talk about I guess it doesn't really matter to anyone except myself who is currently typing out this long string of text hopefully it is long enough and doesn't contain too many spelling mistakes.blah blah blah blah this is a lot of text but i dont really know what to talk about I guess it doesn't really matter to anyone except myself who is currently typing out this long string of text hopefully it is long enough and doesn't contain too many spelling mistakes.blah blah blah blah this is a lot of text but i dont really know what to talk about I guess it doesn't really matter to anyone except myself who is currently typing out this long string of text hopefully it is long enough and doesn't contain too many spelling mistakes.blah blah blah blah this is a lot of text but i dont really know what to talk about I guess it doesn't really matter to anyone except myself who is currently typing out this long string of text hopefully it is long enough and doesn't contain too many spelling mistakes.blah blah blah blah this is a lot of text but i dont really know what to talk about I guess it doesn't really matter to anyone except myself who is currently typing out this long string of text hopefully it is long enough and doesn't contain too many spelling mistakes. mipsum quipsum greetsum meepe meepu beebebe bebebeb ooka agaug the quick fox jumped over the lazy brown dog",
        //   tags: ["hello", "yellow"],
        // },
      ],
      count: undefined,
      redirect: false,
    };
  }

  render() {
    return (
      <React.Fragment>
        <DoRedirect redirect={this.state.redirect} />
        <BlogPostPreviewList posts={this.state.previewPosts} />
        <HomeNav posts_per_page={POSTS_PER_PAGE} count={this.state.count} />
      </React.Fragment>
    );
  }

  componentDidMount() {
    let page = this.props.match.params.page;

    let index;
    if (page) index = POSTS_PER_PAGE * (Number(page) - 1);
    else index = 0;

    axios.get(`${SERVER_URL}/posts/count`).then((res) => {
      axios
        .get(`${SERVER_URL}/posts/all/recent/${index}/${POSTS_PER_PAGE}`)
        .then((posts) => {
          if (posts.data.length === 0) {
            this.setState({ redirect: true });
          } else {
            let stateArr = [];
            posts.data.forEach((post) => {
              stateArr.push({
                _id: post._id,
                title: post.title,
                content: post.content,
                date: getDate(post.posted_on),
                time: getTime(post.posted_on),
                tags: post.tags,
              });
            });
            this.setState({ previewPosts: stateArr, count: res.data.count });
          }
        });
    });
  }
}

export default Home;
