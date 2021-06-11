import * as React from "react"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="p">{children}</p>
const HLink = ({ children }) => <a className="link">{children}</a>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
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

const IndexPage = ({data}) => {
  const { p } = data.div1

 return (
    <Layout >
      <main className="index-page">
      <div className="div1">
          <GatsbyImage image={getImage(data.div1.img)} alt="token" className="img"/>
          <h2 dangerouslySetInnerHTML={{ __html: data.div1.h1 }} />
          <div>{p && renderRichText(p, options)}</div>
          {/* <StaticImage src="../images/Ellipse.png" alt="Ellipse" /> */}
      </div>
      <div className="div2">
         <div className="nft">
            <GatsbyImage image={getImage(data.div2.img)} alt="nft" className="img"/>
            <h2 dangerouslySetInnerHTML={{ __html: data.div2.h1 }} />
            <div>{data.div2.p && renderRichText(data.div2.p, options)}</div>
         </div>

         <div className="meme">
            <GatsbyImage image={getImage(data.div3.img)} alt="meme" className="img"/>
            <div>{data.div3.p && renderRichText(data.div3.p, options)}</div>
         </div>

         <div className="">
            <h2 dangerouslySetInnerHTML={{ __html: data.div4.h1 }} />
            <div>{data.div4.p && renderRichText(data.div4.p, options)}</div>
            {/* <pre>
              <code>{JSON.stringify(data.div4.p.raw, null, 2)}</code>
            </pre> */}
         </div>
         <div className="">
            <h2 dangerouslySetInnerHTML={{ __html: data.div5.h1 }} />
            <div>{data.div4.p && renderRichText(data.div5.p, options)}</div>
         </div>
         <div className="built">
            <h2 dangerouslySetInnerHTML={{ __html: data.div6.h1 }} />
            <div>{data.div4.p && renderRichText(data.div6.p, options)}</div>
         </div>
         <div className="">
            <h2 dangerouslySetInnerHTML={{ __html: data.div7.h1 }} />
            <div>{data.div4.p && renderRichText(data.div7.p, options)}</div>
         </div>
         <div className="">
            <h2 dangerouslySetInnerHTML={{ __html: data.div8.h1 }} />
            <div>{data.div4.p && renderRichText(data.div8.p, options)}</div>
         </div>
         <div className="">
            <h2 dangerouslySetInnerHTML={{ __html: data.div9.h1 }} />
            <div>{data.div4.p && renderRichText(data.div9.p, options)}</div>
         </div>
         <div className="">
            <h2 dangerouslySetInnerHTML={{ __html: data.div10.h1 }} />
            <div>{data.div4.p && renderRichText(data.div10.p, options)}</div>
         </div>
         <div className="">
            <h2 dangerouslySetInnerHTML={{ __html: data.div11.h1 }} />
            <div>{data.div4.p && renderRichText(data.div11.p, options)}</div>
         </div>
      </div>
      </main>
    </Layout>
  )
}

export default IndexPage

export const IndexPageQuery = graphql`
  query IndexPageQuery {
    div1 : contentfulRepeater(name: {eq: "div1"}) {
      h1
      p {
        raw        
      }
      img {
        gatsbyImageData(layout: FIXED)
      }
    }
    div2 : contentfulRepeater(name: {eq: "div2"}) {
      h1
      p {
        raw        
      }
      img {
        gatsbyImageData(layout: FIXED)
      }
    }
    div3 : contentfulRepeater(name: {eq: "div3"}) {
      h1
      p {
        raw        
      }
      img {
        gatsbyImageData(layout: FIXED)
      }
    }
    div4 : contentfulRepeater(name: {eq: "div4"}) {
      h1
      p {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            fixed(width: 1600) {
              width
              height
              src
              srcSet
            }
          }
        }        
      }
      img {
        gatsbyImageData(layout: FIXED)
      }
    }
    div5 : contentfulRepeater(name: {eq: "div5"}) {
      h1
      p {
        raw
      }
      img {
        gatsbyImageData(layout: FIXED)
      }
    }
    div6 : contentfulRepeater(name: {eq: "div6"}) {
      h1
      p {
        raw
      }
      img {
        gatsbyImageData(layout: FIXED)
      }
    }
    div7 : contentfulRepeater(name: {eq: "div7"}) {
      h1
      p {
        raw
      }
      img {
        gatsbyImageData(layout: FIXED)
      }
    }
    div8 : contentfulRepeater(name: {eq: "div8"}) {
      h1
      p {
        raw
      }
      img {
        gatsbyImageData(layout: FIXED)
      }
    }
    div9 : contentfulRepeater(name: {eq: "div9"}) {
      h1
      p {
        raw
      }
      img {
        gatsbyImageData(layout: FIXED)
      }
    }
    div10 : contentfulRepeater(name: {eq: "div10"}) {
      h1
      p {
        raw
      }
      img {
        gatsbyImageData(layout: FIXED)
      }
    }
    div11 : contentfulRepeater(name: {eq: "div11"}) {
      h1
      p {
        raw
      }
      img {
        gatsbyImageData(layout: FIXED)
      }
    }
  }
`