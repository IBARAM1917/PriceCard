import React from "react";

const Card = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{data.title}
            </h5>
            <h6 className="card-price text-center">
              ${data.price}/month
            </h6>
            <hr />
            <ul className="fa-ul">
              <li className={data.isUser ? "" : "text-muted"}>
                <span className="fa-li">
                  <i
                    className={data.isUser ? "fas fa-check" : "fas fa-times"}
                  ></i>
                </span>
                {data.title == "FREE" ? (
                  <>{data.user}</>
                ) : (
                  <strong>{data.user}</strong>
                )}
              </li>
              <li className={data.isStorage ? "" : "text-muted"}>
                <span className="fa-li">
                  <i
                    className={data.isStorage ? "fas fa-check" : "fas fa-times"}
                  ></i>
                </span>
                {data.storage}
              </li>
              <li className={data.isPublic ? "" : "text-muted"}>
                <span className="fa-li">
                  <i
                    className={data.isPublic ? "fas fa-check" : "fas fa-times"}
                  ></i>
                </span>
                {data.public}
              </li>
              <li className={data.isCommunity ? "" : "text-muted"}>
                <span className="fa-li">
                  <i
                    className={
                      data.isCommunity ? "fas fa-check" : "fas fa-times"
                    }
                  ></i>
                </span>
                {data.community}
              </li>
              <li className={data.isPrivate ? "" : "text-muted"}>
                <span className="fa-li">
                  <i
                    className={data.isPrivate ? "fas fa-check" : "fas fa-times"}
                  ></i>
                </span>
                {data.private}
              </li>
              <li className={data.isSupportive ? "" : "text-muted"}>
                <span className="fa-li">
                  <i
                    className={
                      data.isSupportive ? "fas fa-check" : "fas fa-times"
                    }
                  ></i>
                </span>
                {data.supportive}
              </li>
              <li className={data.isFree ? "" : "text-muted"}>
                <span className="fa-li">
                  <i
                    className={data.isFree ? "fas fa-check" : "fas fa-times"}
                  ></i>
                </span>
                {data.free}
              </li>
              <li className={data.isStatus ? "" : "text-muted"}>
                <span className="fa-li">
                  <i
                    className={data.isStatus ? "fas fa-check" : "fas fa-times"}
                  ></i>
                </span>
                {data.status}
              </li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">
                Button
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
