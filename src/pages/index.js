import React from "react";
import Layout from '../components/Layout';
import './index.styles.scss';
import portfolioItems from '../components/portfolio-items';

function renderFolio() {

  return portfolioItems.map(({ title, idx, desc, repo, live, img }) => {
    return (<div key={'div' + idx} className={"l-wrapper"}>
      <article className={"card"}>
        <div className={"card_header"}>
          <div className={"card_title"} >{title} </div>
          <figure className={"card_thumbnail"}>
            <img src={img} alt="thumbnail" className={"card_image"} />
          </figure>
        </div>
        <div className={"card_body"}>
          <p className={"card_text"} style={{ whiteSpace: "pre-line" }}>{desc}</p> {/* 改行 */}
        </div>
        <div className={"card_footer"}>
          <p className={"card_gitBtn"}><a href={repo} className={"button-compact"} target="_blank" rel="noopener noreferrer">Github Repo</a></p>
          {live ? <p className={"card_liveBtn"}><a href={live} className={"button-compact"} target="_blank" rel="noopener noreferrer">Check it Live</a></p> : null}
        </div>
      </article>
    </div>
    )
  })
}

const Index = () => {
  return (
    <Layout>
      <h1 className="opener">Portfolio</h1>
      <div className="cssGrid">{renderFolio()}</div>
    </Layout>
  )
}

export default Index