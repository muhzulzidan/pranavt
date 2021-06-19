import React from 'react'
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
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
      return(
        <>
          <div>
            <code>{JSON.stringify(node, null, 2)}</code>
          </div>
        </>
      )
    },
  },
}
const GetTokens = ({data}) => {
    return (
        <Layout>
            <main className="get-token">
                <div>{data.contentfulPost.content && renderRichText(data.contentfulPost.content, options)}</div>
            </main>
        </Layout>
    )
}

export default GetTokens
export const GetTokensQuery = graphql`
    query GetTokensQuery {
        contentfulPost(name: {eq: "GET RAJINI (RJN) TOKENS"}) {
            id
            content {
                raw
            }
        }
    }
`