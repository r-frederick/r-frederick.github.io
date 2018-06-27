module.exports = {
  siteMetadata: {
    title: 'ridge frederick',
  },
  plugins: [
    'gatsby-plugin-react-helmet', 
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/posts`,
        name: "markdown-pages"
      }
    },
    `gatsby-transformer-remark`
  ],
}
