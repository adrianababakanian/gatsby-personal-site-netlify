module.exports = {
  siteMetadata: {
    title: 'Adriana Babakanian',
    author: 'Adriana Babakanian',
    description: 'Developer, designer, & matcha enthusiast with a passion for visually informed technical logic. Feel free to browse my portfolio to get to know more about me and my work!',
    siteUrl: 'https://adrianababakanian.github.io/',
  },
  pathPrefix: '/adrianababakanian',
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
            
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        //postCssPlugins: [somePostCssPlugin()],
        precision: 5,
      },
    },
  ],
}
