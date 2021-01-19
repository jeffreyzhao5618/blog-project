import React from "react";
import BlogPostPreview from "./BlogPostPreview";

function BlogPostPreviewList({ posts }) {
  return (
    <React.Fragment>
      {posts.map((post) => {
        const { _id, title, date, time, content, tags } = post;
        return (
          <BlogPostPreview
            key={_id}
            _id={_id}
            title={title}
            date={date}
            time={time}
            content={content}
            tags={tags}
          />
        );
      })}
    </React.Fragment>
  );
}

export default BlogPostPreviewList;
