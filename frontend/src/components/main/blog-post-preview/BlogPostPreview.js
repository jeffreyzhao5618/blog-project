import React from "react";
import TagList from "./TagList";

function BlogPostPreview(props) {
  const { _id, title, date, time, content, tags } = props;
  return (
    <div className="card preview-post mb-3">
      <div className="card-body">
        <a className="card-title primary" href={`/post/${_id}`}>
          {title}
        </a>
        <p className="card-subtitle text-muted">{`${date} ${time}`}</p>
        <div
          className="content mb-3"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <a className="card-link standard" href={`/post/${_id}`}>
          Read More
        </a>
        <TagList tags={tags} />
      </div>
    </div>
  );
}

export default BlogPostPreview;
