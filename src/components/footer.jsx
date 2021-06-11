import React from 'react'
import { StaticQuery, graphql } from "gatsby"

import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

import { StaticImage } from "gatsby-plugin-image"


import Twitter from "../images/sosmed/twitter.svg"
import Discord from "../images/sosmed/discord.svg"
import Telegram from "../images/sosmed/telegram.svg"
import Logo from "../images/icon.svg"

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
            return (
                <>
                    <div>
                        {/* <code>{JSON.stringify(node, null, 2)}</code> */}
                    </div>
                </>
            )
        },
    },
}

const Footer = () => {
    return (
        <StaticQuery
            query={graphql`
                query FooterQuery {
                    contentfulFooter {
                        content {
                            raw
                        }
                    }
                }
      `}
            render={data => (
                <footer className="footer">
                    <Logo className="logo"/>
                    <div className="content">{data.contentfulFooter.content && renderRichText(data.contentfulFooter.content, options)}</div>
                    <div className="sosmed">
                        <Twitter  />
                        <Telegram  />
                        <Discord  />
                    </div>
                </footer>
            )}
        />
    )
}

export default Footer
