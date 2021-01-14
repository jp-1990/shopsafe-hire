module.exports = {
  siteMetadata: {
    title: `ShopSafe`,
    description: `Coding challenge set by ShopSafe Radio`,
    author: `J.Plummer`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
  ],
}
