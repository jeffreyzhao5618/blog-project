import React from "react";
import TagList from "./TagList";

function BlogPostPreview(props) {
  const { title, date, time, text, tags } = props;
  return (
    <div className="card preview-post mb-3">
      <div className="card-body">
        <a className="card-title primary" href="#">
          {title}
        </a>
        <p className="card-subtitle text-muted">{`${date} ${time}`}</p>
        <div className="content mb-3">
          <p className="card-text">{text}</p>
        </div>
        <a className="card-link">Read More</a>
        <TagList tags={tags} />
      </div>
    </div>
  );
}

export default BlogPostPreview;
