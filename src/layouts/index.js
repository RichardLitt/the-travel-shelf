import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import "font-awesome/css/font-awesome.css";

const DefaultLayout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: "description",
          content: data.site.siteMetadata.description
        },
        {
          name: "author",
          content: data.site.siteMetadata.author.name
        },
        {
          name: "copyright",
          content: `&copy; ${data.site.siteMetadata.author.name} 2018`
        },
        {
          property: "og:url",
          content: data.site.siteMetadata.url
        },
        {
          property: "og:type",
          content: "website"
        },
        {
          property: "og:title",
          content: data.site.siteMetadata.title
        },
        {
          property: "og:description",
          content: data.site.siteMetadata.description
        },
        {
          property: "og:site_name",
          content: "thetravelshelf.com"
        },
        {
          name: "twitter:card",
          content: "summary"
        },
        {
          name: "twitter:site",
          content: data.site.siteMetadata.twitter
        },
        {
          name: "twitter:title",
          content: data.site.siteMetadata.title
        }
      ]}
    />
    <NavBar />
    {children()}
    <Footer />
  </div>
);

export default DefaultLayout;

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        url
        twitter
        description
        author {
          name
        }
      }
    }
  }
`;
