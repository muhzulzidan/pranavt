
import React, { useState } from "react" 
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"
import { useMediaQuery } from 'react-responsive'
import styled from "styled-components";
import Expand from "react-expand-animated";
// import ParticleField from 'react-particles-webgl';


import Slider from "react-slick";
import "slick-carousel/slick/slick.scss"
import "slick-carousel/slick/slick-theme.scss"

import Roadmap from "../images/roadmap.svg"
import RoadmapMobile from "../images/roadmapMbile.svg"
import GetStarted from "../images/button/GetStarted.svg"
import Arrow from "../images/arrow/arrow.svg"

import Layout from "../components/layout"
import Three from "../components/three"
import Coin from "../components/coin"

import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"


import {
  Header,
  Main,
  BoxToggle,
  BoxExpand,
  BoxExpand1,
  Button,
  ExpandBoxes 
} from "../styles/expand.style";

const Text = ({ children }) => <p className="p">{children}</p>
const HLink = ({ children }) => <a className="link">{children}</a>
const HEADING3 = ({ children }) => <h3 className="h3">{children}</h3>
const HEADING2 = ({ children }) => <h2 className="h2">{children}</h2>

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.HEADING_2]: (node, children) => <HEADING2>{children}</HEADING2>,
    [BLOCKS.HEADING_3]: (node, children) => <HEADING3>{children}</HEADING3>,
    [BLOCKS.HYPERLINK]: (node, children) => <HLink>{children}</HLink>,
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => { 
      return(
        <>
          <div>
            <img  src={node.data.target.file.url} alt="nft" className="img"/>
          </div>
        </>
      )
    },
  },
}

const Faq = ({children}) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(() => (!open));
  };

  const styles = {
    open: { background: "transparent" }
  };
  const transitions = ["height", "opacity", "background"];

  return (
    <div className="faq-container">
      <BoxToggle>
        <Button onClick={toggle}><div className="content">{children}</div> <Arrow className="arrow"/> </Button>
      </BoxToggle>
      <Expand
        open={open}
        // duration={1000}
        styles={styles}
        transitions={transitions}
      >
        <ExpandBoxes>
          <BoxExpand1>Hello</BoxExpand1>
        </ExpandBoxes>
      </Expand>

    </div>
  )
}

const faq = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Faq>{children}</Faq>,
    [BLOCKS.HYPERLINK]: (node, children) => <HLink>{children}</HLink>,
  },
}



const IndexPage = ({data}) => {

  const { p } = data.div1

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 647px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
console.log(data.div1)
 return (
    <Layout >
      <main className="index-page">
      <div className="div1" style={{
        position:"relative"
      }}>
      <Three />
          <Coin data={data.div1}/>
         <div className="content">
           <h2 dangerouslySetInnerHTML={{ __html: data.div1.h1 }} />
           <div>{p && renderRichText(p, options)}</div>
           <a href="/get-token">
              <GetStarted className="get-started"/>
           </a>
         </div>
      </div>
      <div className="div2">
         <div className="nft">
            <GatsbyImage image={getImage(data.div2.img)} alt="nft" className="img"/>
            <div className="content">
              <h2 dangerouslySetInnerHTML={{ __html: data.div2.h1 }} />
              <div>{data.div2.p && renderRichText(data.div2.p, options)}</div>
            </div>
         </div>

         <div className="meme">
            <GatsbyImage image={getImage(data.div3.img)} alt="meme" className="img"/>
            <div className="content">{data.div3.p && renderRichText(data.div3.p, options)}</div>
         </div>

         <div className="original">
            <h2 dangerouslySetInnerHTML={{ __html: data.div4.h1 }} />
           <div className="container">
             <div className="content">
               <img src={data.div4.manyImg[0].file.url} alt={data.div4.originalNft[0]} className="img" />
               <p>
                 {data.div4.originalNft[0]}
               </p>
             </div>
             <div className="content">
               <img src={data.div4.manyImg[1].file.url} className="img" />
               <p>
                 {data.div4.originalNft[1]}
               </p>
             </div>
             <div className="content">
               <img src={data.div4.manyImg[2].file.url} className="img" />
               <p>
                 {data.div4.originalNft[2]}
               </p>
             </div>
             <div className="content ar">
               <img src={data.div4.manyImg[3].file.url} className="img" />
               <p>
                 {data.div4.originalNft[3]}
               </p>
             </div>
             <div className="content">
               <img src={data.div4.manyImg[4].file.url} className="img" />
               <p>
                 {data.div4.originalNft[4]}
               </p>
             </div>
             <div className="content">
               <img src={data.div4.manyImg[5].file.url} className="img" />
               <p>
                 {data.div4.originalNft[5]}
               </p>
             </div>
             <div className="content">
               <img src={data.div4.manyImg[6].file.url} className="img" />
               <p>
                 {data.div4.originalNft[6]}
               </p>
             </div>
             <div className="content music">
               <img src={data.div4.manyImg[7].file.url} className="img" />
               <p>
                 {data.div4.originalNft[7]}
               </p>
             </div>
           </div>
         </div>
         <div className="rjn-tokens">
            <GatsbyImage image={getImage(data.div5.img)} alt="meme" className="img"/>
            <div className="content">
              <h2 dangerouslySetInnerHTML={{ __html: data.div5.h1 }} />
              <div>{data.div5.p && renderRichText(data.div5.p, options)}</div>
              <div className="buttons">{data.div5.p2 && renderRichText(data.div5.p2, options)}</div>
            </div>
         </div>
         <div className="built">
            <GatsbyImage image={getImage(data.div6.img)} alt="meme" className="img"/>
            <div className="content">
              <h2 dangerouslySetInnerHTML={{ __html: data.div6.h1 }} />
              <div>{data.div6.p && renderRichText(data.div6.p, options)}</div>
            </div>
         </div>
         <div className="roadmap">
            <h2 dangerouslySetInnerHTML={{ __html: data.div7.h1 }} />
            <Slider {...settings}>
              {/* {console.log(JSON.parse(data.div7.p.raw))} */}
              <div className="content">{ data.div7.p && renderRichText(data.div7.p, options)}</div>
              <div className="content" >{renderRichText(data.div7.p2, options)}</div>
              <div className="content" >{renderRichText(data.div7.p3, options)}</div>
            </Slider>
            {isTabletOrMobile ? <RoadmapMobile className="roadmap-mobile-svg" /> : <Roadmap className="roadmap-svg"/>}
            
         </div>
         <div className="faq">         
            <h2 dangerouslySetInnerHTML={{ __html: data.div8.h1 }} />
            <div>{data.div8.p && renderRichText(data.div8.p, faq)}</div>
            <div className="view-all">View All</div>
         </div>
         <div className="how">
            <GatsbyImage image={getImage(data.div9.img)} alt="meme" className="img"/>
            <div className="content">
              <h2 dangerouslySetInnerHTML={{ __html: data.div9.h1 }} />
              <div>{data.div9.p && renderRichText(data.div9.p, options)}</div>
            </div>
         </div>
         <div className="idk">
            <h2 dangerouslySetInnerHTML={{ __html: data.div10.h1 }} />
            <div>{data.div10.p && renderRichText(data.div10.p, options)}</div>
         </div>
         <div className="follow">
            {/* <div className="content">{data.div11.p && renderRichText(data.div11.p, options)}</div> */}
            <div className="content">
                <div className="twitter">
                  <img src={data.div11.manyImg[0].file.url} alt={data.div11.manyImg[0].name} />
                  <a href={data.div11.json.twitter.url}>{data.div11.json.twitter.sosmed}</a>
                </div>
                <div className="discord">
                  <img src={data.div11.manyImg[1].file.url} alt={data.div11.manyImg[2].name} />
                  <a href={data.div11.json.discord.url}>{data.div11.json.discord.sosmed}</a>
                </div>
                <div className="telegram">
                  <img src={data.div11.manyImg[2].file.url} alt={data.div11.manyImg[2].name} />
                  <a href={data.div11.json.telegram.url}>{data.div11.json.telegram.sosmed}</a>
                </div>
            </div>
            <div className="content-2">{data.div11.p2 && renderRichText(data.div11.p2, options)}</div>
         </div>
      </div>
      </main>
    </Layout>
  )
}

export default IndexPage

export const IndexPageQuery = graphql`
  query IndexPageQuery {
    div1 : contentfulRepeater(name: {eq: "HeroBar"}) {
      h1
      p {
        raw        
      }
      img {
        gatsbyImageData(layout: FIXED)
      }
      manyImg{
        gatsbyImageData(layout: FIXED)
        file {
          url
        }
      }
    }
    div2 : contentfulRepeater(name: {eq: "what-is-rjn"}) {
      h1
      p {
        raw        
      }
      img {
        gatsbyImageData(layout: FIXED)
      }
    }
    div3 : contentfulRepeater(name: {eq: "MEME"}) {
      h1
      p {
        raw        
      }
      img {
        gatsbyImageData(layout: FIXED)
      }
    }
    div4 : contentfulRepeater(name: {eq: "UNIQUE_NFTs"}) {
      h1
      originalNft
        manyImg {
          file {
            url
            fileName
          }
        }
      img {
        gatsbyImageData(layout: FIXED)
      }
    }
    div5 : contentfulRepeater(name: {eq: "GET_RAJINI"}) {
      h1
      p {
        raw
      }
      p2{
        raw
      }
      img {
        gatsbyImageData(layout: FIXED)
      }
    }
    div6 : contentfulRepeater(name: {eq: "BUILT_ON_ALGORAND"}) {
      h1
      p {
        raw
      }
      img {
        gatsbyImageData(layout: FIXED)
      }
    }
    div7 : contentfulRepeater(name: {eq: "ROADMAP"}) {
      h1
      p {
        raw
      }
      p2{
        raw
      }
      p3{
        raw
      }
      img {
        gatsbyImageData(layout: FIXED)
      }
    }
    div8 : contentfulRepeater(name: {eq: "faq"}) {
      h1
      p {
        raw
      }
      img {
        gatsbyImageData(layout: FIXED)
      }
    }
    div9 : contentfulRepeater(name: {eq: "HOW_IT_WORKS"}) {
      h1
      p {
        raw
      }
      img {
        gatsbyImageData(layout: FIXED)
      }
    }
    div10 : contentfulRepeater(name: {eq: "open _source"}) {
      h1
      p {
        raw
      }
      img {
        gatsbyImageData(layout: FIXED)
      }
    }
    div11 :   contentfulRepeater(name: {eq: "follow_us"}) {
        manyImg {
          title
          file {
            url
          }
        }
        json {
          discord {
            url
            sosmed
          }
          telegram {
            url
            sosmed
          }
          twitter {
            sosmed
            url
          }
        }
        p2 {
          raw
        }
      }
  }
`