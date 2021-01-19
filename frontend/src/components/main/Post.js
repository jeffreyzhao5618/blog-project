import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import TagList from "./blog-post-preview/TagList";
import axios from "axios";
import { getDate, getTime } from "../../assets/utils";
import { SERVER_URL } from "../../config";

const DoRedirect = (props) => {
  if (!props.redirect) {
    return null;
  } else {
    return <Redirect to="/invalid" />;
  }
};

const DoRender = ({ post }) => {
  if (!post || post.error) {
    return null;
  } else {
    return (
      <div className="card preview-post mb-3">
        <div className="card-body">
          <p className="card-title primary">{post.title}</p>
          <p className="card-subtitle text-muted">{`${post.date} ${post.time}`}</p>

          <div
            className="mb-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <TagList tags={post.tags} />
        </div>
      </div>
    );
  }
};

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: undefined,
      redirect: false,
    };
  }

  render() {
    return (
      <React.Fragment>
        <DoRedirect redirect={this.state.redirect} />
        <DoRender post={this.state.post} />
      </React.Fragment>
    );
  }

  componentDidMount() {
    axios
      .get(`${SERVER_URL}/posts/id/${this.props.match.params.id}`)
      .then((post) => {
        if (post.data.error) this.setState({ redirect: true });
        else {
          this.setState({
            post: {
              title: post.data.title,
              date: getDate(post.data.posted_on),
              time: getTime(post.data.posted_on),
              content: post.data.content,
              tags: post.data.tags,
            },
          });
        }
      });
  }
}

export default Post;
