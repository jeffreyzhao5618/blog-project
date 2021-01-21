import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import TagList from "../main/blog-post-preview/TagList";
import axios from "axios";
import { SERVER_URL } from "../../config";

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
      loggedin: false,
      preview: false,
      title: "",
      content: "",
      tagsCSV: "",
      previewTitle: "",
      previewContent: "",
      previewTagsCSV: "",
    };

    // this.changeTitleHandler = this.changeTitleHandler.bind();
    // this.changeTagsHandler = this.changeTagsHandler.bind();
    // this.changeContentHandler = this.changeContentHandler.bind();
  }

  changeTitleHandler = (event) => {
    this.setState({ title: event.target.value });
  };

  changeTagsHandler = (event) => {
    this.setState({ tagsCSV: event.target.value });
  };

  changeContentHandler = (event) => {
    this.setState({ content: event.target.value });
  };

  saveAdminPost = () => {
    axios
      .post(
        `${SERVER_URL}/admin/post`,
        {
          title: this.state.title,
          content: this.state.content,
          tags: this.state.tagsCSV.split(","),
        },
        { withCredentials: true }
      )
      .then((post) => {
        if (!post.data || post.data.error) {
          alert("Error saving admin post");
        } else {
          alert("Admin post saved!");
        }
      });
  };

  createBlogPost = () => {
    axios
      .post(
        `${SERVER_URL}/posts/`,
        {
          title: this.state.title,
          content: this.state.content,
          tags: this.state.tagsCSV.split(","),
        },
        { withCredentials: true }
      )
      .then((post) => {
        if (!post.data || post.data.error) alert("Error creating blog post.");
        else alert("Blog post created!");
      });
  };

  previewAdminPost = () => {
    this.setState({
      preview: true,
      previewTitle: this.state.title,
      previewContent: this.state.content,
      previewTagsCSV: this.state.tagsCSV,
    });
  };

  clearAdminPost = () => {
    this.setState({
      title: "",
      content: "",
      tagsCSV: "",
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/admin/login" />;
    } else if (this.state.loggedin) {
      return (
        <div className="container mt-5">
          <h1 className="primary">Admin</h1>
          <form className="mt-5">
            <div className="form-group row">
              <label htmlFor="inputTitle" className="col-sm-2 col-form-label">
                Title
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="inputTitle"
                  placeholder="Title"
                  autoComplete="off"
                  value={this.state.title}
                  onChange={this.changeTitleHandler}
                />
              </div>
            </div>
            <div className="form-group row mt-3">
              <label htmlFor="inputTags" className="col-sm-2 col-form-label">
                Tags (CSV)
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="inputTitle"
                  placeholder="Tags (CSV)"
                  autoComplete="off"
                  value={this.state.tagsCSV}
                  onChange={this.changeTagsHandler}
                />
              </div>
            </div>
            <div className="form-group mt-3">
              <label htmlFor="inputContent">Content</label>
              <textarea
                className="form-control"
                id="inputContent"
                rows="10"
                value={this.state.content}
                onChange={this.changeContentHandler}
              ></textarea>
            </div>

            <div className="mt-3">
              <button
                type="button"
                className="btn btn-primary me-3"
                onClick={this.previewAdminPost}
              >
                Preview
              </button>
              <button
                type="button"
                className="btn btn-primary me-3"
                onClick={this.saveAdminPost}
              >
                Save
              </button>
              <button
                type="button"
                className="btn btn-primary me-3"
                onClick={this.createBlogPost}
              >
                Post
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.clearAdminPost}
              >
                Clear
              </button>
            </div>
          </form>
          <Preview
            preview={this.state.preview}
            title={this.state.previewTitle}
            content={this.state.previewContent}
            tags={this.state.previewTagsCSV.split(",")}
          />
        </div>
      );
    } else return null;
  }

  componentDidMount() {
    axios
      .get(`${SERVER_URL}/admin/login`, { withCredentials: true })
      .then((res) => {
        if (res.data.loggedin) {
          axios.get(`${SERVER_URL}/admin/post`).then((post) => {
            if (post.data) {
              this.setState({
                title: post.data.title,
                content: post.data.content,
                tagsCSV: post.data.tags.join(","),
              });
            }
          });
          this.setState({ loggedin: true });
        } else {
          this.setState({ redirect: true });
        }
      });
  }
}

function Preview({ preview, title, content, tags }) {
  if (preview) {
    return (
      <div className="my-5 col-lg-9">
        <div className="card preview-post mb-3">
          <div className="card-body">
            <p className="card-title primary">{title}</p>
            <p className="card-subtitle text-muted">01/20/2021 7:21 PM</p>

            <div
              className="mb-4"
              dangerouslySetInnerHTML={{ __html: content }}
            />
            <TagList tags={tags} />
          </div>
        </div>
      </div>
    );
  } else return null;
}

export default Admin;
