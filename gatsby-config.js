module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-prefetch-google-fonts",
      options: {
        fonts: [
          {
            family: "Montserrat",
            variants: ["200", "300", "400", "500", "700", "900"]
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Plastfritt Hav`,
        short_name: `Plastfritt Hav`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#62B92C`,
        display: `standalone`,
        icon: `src/images/favicon/favicon.png`
      },
    },
    "gatsby-plugin-netlify-cache"
  ]
}
