import React from "react";
import Layout from '../components/Layout';
import './index.styles.scss';
import portfolioItems from '../components/portfolio-items';

function renderFolio() {

  return portfolioItems.map(({ title, idx, desc, repo, sinopsis, live, img }) => {
    return (<div key={'div' + idx} className={"l-wrapper"}>
      <article className={"card"}>
        <div className={"card_header"}>
          <p className={"card_title"} >{title} </p>
          <figure className={"card_thumbnail"}>
            <img src={img} alt="thumbnail" className={"card_image"} />
          </figure>
        </div>
        <div className={"card_body"}>
          <p className={"card_text2"}>{desc}</p>
        </div>
        <div className={"card_footer"}>
          <p className={"card_text"}><a href={repo} className={"button-compact"} target="_blank" rel="noopener noreferrer">Github Repo</a></p>
          {live ? <p className={"card_live"}><a href={live} className={"button-compact"} target="_blank" rel="noopener noreferrer">check it live</a></p> : null}
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
      <p className="subtitle">These are a few of my projects. Open up for repo and live version!</p>
      <div class="cssGrid">{renderFolio()}</div>
    </Layout>
  )
}

export default Index