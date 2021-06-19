import React from 'react'

import Logo from "../images/logo.svg"

import { StaticQuery, graphql, Link } from "gatsby"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="p">{children}</p>
const Heading = ({ children }) => <h2 className="h2">{children}</h2>
const HLink = ({ children }) => <a className="link">{children}</a>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.HEADING_2]: (node, children) => <Heading>{children}</Heading>,
    [BLOCKS.HYPERLINK]: (node, children) => <HLink>{children}</HLink>,
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      return (
        <>
          <div>
            <code>{JSON.stringify(node, null, 2)}</code>
          </div>
        </>
      )
    },
  },
}
const Header = () => {
  return (
    <StaticQuery
      query={graphql`
                  query HeaderQuery {
                      contentfulHeader {
                          content {
                              raw
                          }
                      }
                  }
              `}
      render={data => (
        <header className="header">
          <Link to="/" className="logo">
            <Logo />
          </Link>
          <div className="content">{data.contentfulHeader.content && renderRichText(data.contentfulHeader.content, options)}</div>
        </header>
      )}
    />
  )
}

export default Header
