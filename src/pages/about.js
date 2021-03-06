import React from 'react';
import Layout from '../components/Layout';
import aboutStyle from './About.module.scss';
import Img from 'gatsby-image';
import { graphql } from 'gatsby'

export const query = graphql`
query {
    file(relativePath: { eq: "images/myPhoto.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const About = (props) => {
	console.log(query)
	return (
		<Layout>
			<h1 className="opener">Profile</h1>

			<div className={aboutStyle.main}>
				<div className={aboutStyle.firstProf}>
					<div className={aboutStyle.imagen}>
						<Img className={aboutStyle.img} alt="profilePhoto" fluid={props.data.file.childImageSharp.fluid} />
					</div>

					<div className={aboutStyle.textBox}>
						<div className={aboutStyle.icon}>
							<div className="iconLabel">■ Osaka, Japan</div>
						</div>
						<div className={aboutStyle.icon}>
							<div className="iconLabel">■ Tokyo University Of Agriculture</div>
						</div>
					</div>

					<div className={aboutStyle.blankSpace} />

				</div>
				<div className={aboutStyle.article}>
					<p>
						◆ 津江 明秀 | プログラマー<br />
						◆ 29歳 | 大阪市在住 | 東京出身<br />
						◆ 得意な分野：SPAのフロントエンド開発<br />
					</p>

					<div className={aboutStyle.blankSpace} />

					<p>
						<b>実業務で使用したスキル</b><br />
						◆ フロントエンド: React | flux | Material-UI | Sass<br />
						◆ サーバーサイド: Python(Django Rest Framework)<br />
						◆ AWS：VPC | S3 | Cloud Front | Route53 | IAM | Cloud Watch | Code Pipeline | Code Build<br />
						◆ その他：GitHub | Git Bucket | Webpack | npm | MySQL<br />
					</p>

					<div className={aboutStyle.blankSpace} />

					<p>
						<b>上記以外に、学習で使用したスキル</b><br />
						◆ フロントエンド: TypeScript | redux | Gatsby | Next.js | Nuxt.js<br />
						◆ サーバーサイド: Ruby on Rails | Laravel | Node.js<br />
						◆ インフラ： FireBase | Heroku | Docker | Nginx<br />
						◆ その他:	yarn | PostgreSQL<br />
					</p>

					<div className={aboutStyle.blankSpace} />

					<p>
						<b>主な業務経歴</b><br />
						◆ (改修案件) 小学校向け電子教科書webアプリケーション<br />
						◆ (新規開発) BtoB企業向けの社内業務システムSPA<br />
						⚪︎担当業務：フロント実装 | バックエンドAPI実装 | インフラ構築(AWSで自動デプロイ設定まで) | テスト設計<br />
					</p>

					<div className={aboutStyle.blankSpace} />

					<p>
						<b>職務経歴</b><br />
						◆ (キャリアチェンジ) 2020年2月~<br />
						⚪︎本町のweb系受託企業でプログラマーをしています。<br />
						社内のエンジニアは20名程度で、設計~実装~テスト~運用保守を一貫して行なっています。<br />
						◆ (新卒) 2015年4月~<br />
						⚪︎食品貿易商社(ハウス食品グループ)にて4年半勤務。<br />
						食品原料(穀物、冷凍惣菜等)の国内&海外営業を担当しました。<br />
						英会話はビジネス商談が可能なレベルです。<br />
						◆ (インターン)2013年2~3月<br />
						⚪︎ United Television Broadcasting Systems, Inc.(ロサンゼルスのテレビ局)にて制作アシスタントとして従事。<br />
					</p>

					<div className={aboutStyle.blankSpace} />

					<p>
						<b>趣味</b><br />
						インドアゴルフ(目標110切) | FX(テクニカル分析、主にZAR/JPY) | 料理(主に鍋) | Netflix(海外ドラマ) | 駅前留学(TOEIC:860)<br />
					</p>

				</div>
			</div>
		</Layout >
	)
}

export default About