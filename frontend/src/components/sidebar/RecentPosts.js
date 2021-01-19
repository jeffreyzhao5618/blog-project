import React, { Component } from "react";
import axios from "axios";
import { SERVER_URL } from "../../config";
import { Link } from "react-router-dom";

class RecentPosts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recent_posts: [],
    };
  }

  render() {
    return (
      <div className="top-margin">
        {this.state.recent_posts.map((post) => {
          return (
            <Link
              to={`/post/${post._id}`}
              className="d-block gray standard"
              key={post._id}
            >
              {post.title}
            </Link>
          );
        })}
      </div>
    );
  }

  componentDidMount() {
    axios.get(`${SERVER_URL}/posts/titles/recent/5`).then((titles) => {
      this.setState({ recent_posts: titles.data });
    });
  }
}

export default RecentPosts;
