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
      <div className="cssGrid">

        <div key={'main'} className={"l-wrapper"}>
          <article className={"card"}>
            <div className={"card_header"}>
              <div className={"card_title"} >FX取引分析アプリ</div>
              <figure className={"card_thumbnail"}>
                {/* TODO:img */}
                <img src="https://i.gyazo.com/d0af5359755d861bfba2b6735a2e541a.png" alt="thumbnail" className={"card_image"} />
              </figure>
            </div>
            <div className={"card_body"}>
              <p style={{ whiteSpace: "pre-line" }}>
                FX収支データを管理し、取引分析を行うアプリ
              </p>
              <div style={{ whiteSpace: "pre-line" }}>
                フロント：React(Next.js)
              </div>
              <div style={{ whiteSpace: "pre-line" }}>
                バックエンド：GAS
              </div>
              <div style={{ whiteSpace: "pre-line" }}>
                DB：スプレッドシート
              </div>
              <div style={{ whiteSpace: "pre-line" }} className={"card_text"}>
                サーバー：Firebase
              </div>
            </div>
            <div className={"card_footer"}>
              <p className={"card_gitBtn"}><a href="https://github.com/Akihide-Tsue/Next-FXchart" className={"button-compact"} target="_blank" rel="noopener noreferrer">Github Repo</a></p>
              <p className={"card_liveBtn"}><a href="https://fx-chart-next.web.app" className={"button-compact"} target="_blank" rel="noopener noreferrer">Check it Live</a></p>
            </div>
          </article>
        </div>

      </div>
      <h1 className="opener">Others</h1>
      <div className="cssGrid">{renderFolio()}</div>
    </Layout>
  )
}

export default Index