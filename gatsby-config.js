
const dotenv = require(`dotenv`)

if (process.env.NODE_ENV !== `production`){
  dotenv.config()
}

module.exports = {
  siteMetadata: {
    title: "pranavt",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "yzdi2v6tltpw", 
        // accessToken: process.env.CONTENTFUL_ACCESS_TOKEN, 
        accessToken: "7OtD8IwSsQ5mvCryMTuyyvU2W5q4Hy0drW-H5px_fls", 
        environment:'master',
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/logo.svg",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/, 
        }
      }
    },
    
  ],
};
