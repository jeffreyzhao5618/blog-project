import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const range = 1;

function HomeNav({ posts_per_page, count }) {
  const params = useParams();
  if (!count || !posts_per_page) {
    return null;
  } else {
    const page = params.page ? Number(params.page) : 1;
    let numPages = Math.ceil(count / posts_per_page);
    console.log(page);
    let renderArr = [];
    if (page !== 1) renderArr.push("la");
    renderArr.push(1);
    if (page > 1 + range + 1) renderArr.push("dots");
    for (let i = range; i >= 0; i--) {
      if (page - i > 1 && page - i !== numPages) renderArr.push(page - i);
    }
    for (let i = 1; i <= range; i++) {
      if (page + i < numPages) renderArr.push(page + i);
    }
    if (page + range < numPages - 1) renderArr.push("dots");
    if (numPages !== 1) renderArr.push(numPages);
    if (page !== numPages) renderArr.push("ra");
    console.log(renderArr);
    return renderArr.map((symbol, index) => {
      return (
        <div className="mb-3">
          <HomeNavItem key={index} symbol={symbol} currPage={page} />
        </div>
      );
    });
  }
}

function HomeNavItem({ symbol, currPage }) {
  if (symbol === "la")
    return (
      <Link to={currPage === 2 ? "/" : `/page/${currPage - 1}`}>
        <div className="home-nav-item me-1">
          <i className="fas fa-arrow-left"></i>
        </div>
      </Link>
    );
  else if (symbol === "ra")
    return (
      <Link to={`/page/${currPage + 1}`}>
        <div className="home-nav-item me-1">
          <i className="fas fa-arrow-right"></i>
        </div>
      </Link>
    );
  else if (symbol === "dots") return <span className="me-1">. . .</span>;
  else {
    if (symbol === currPage)
      return <div className="home-nav-item active me-1">{symbol}</div>;
    else {
      return (
        <Link to={symbol === 1 ? "/" : `/page/${symbol}`}>
          <div className="home-nav-item me-1">{symbol}</div>
        </Link>
      );
    }
  }
}

export default HomeNav;
