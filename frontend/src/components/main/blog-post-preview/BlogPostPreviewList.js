import React from "react";
import BlogPostPreview from "./BlogPostPreview";

function BlogPostPreviewList({ posts }) {
  return (
    <React.Fragment>
      {posts.map((post) => {
        const { id, title, date, time, text, tags } = post;
        return (
          <BlogPostPreview
            key={id}
            title={title}
            date={date}
            time={time}
            text={text}
            tags={tags}
          />
        );
      })}
    </React.Fragment>
  );
}

export default BlogPostPreviewList;
