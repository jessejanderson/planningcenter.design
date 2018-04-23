import React from "react";
import { css } from "glamor";
import { ArticleNav } from "../components/article_nav";
import Helmet from "react-helmet";
import "../styles/page_main.css";

const IndexPage = ({ data }) => (
  <main className="page-main">
    <Helmet title="Interfaces &amp; Interactions &ndash; Planning Center Design" />
    <ArticleNav data={data} title="Interfaces & Interactions" />
    <article className="article">
      <h1>Interfaces & Interactions</h1>
    </article>
  </main>
);

export default IndexPage;

export const query = graphql`
  query InterfacesQuery {
    allMarkdownRemark(
      filter: {
        frontmatter: { path: { regex: "/interfaces-and-interactions/" } }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;