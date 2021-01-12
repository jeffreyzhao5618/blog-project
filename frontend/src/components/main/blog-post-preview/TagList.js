import React from "react";
import { Link } from "react-router-dom";

function TagList({ tags }) {
  console.log(tags);
  return (
    <div className="tag-list mt-4">
      <span class="text-muted">Tags: </span>
      {tags.map((tag) => {
        return (
          <Link className="secondary primary-bg badge" key={tag}>
            {tag}
          </Link>
        );
      })}
    </div>
  );
}

export default TagList;
