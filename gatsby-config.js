module.exports = {
  siteMetadata: {
    title: "Giulio Savoca",
    titleTemplate: "Giulio Savoca | %s",
    description:
      "Giulio Savoca Portfolio Web Sites, used as a showcase and as a blog",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/config`,
        name: `config`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/blog`,
        name: `blog`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/sections`,
        name: `sections`,
      }
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: `Montserrat`,
                variants: [`300`, `400`, `500`, '600', '700'],
              },
              {
                family: 'VT323',
                variants: [`300`, `400`, `500`, '600', '700'],
              },
              {
                family: 'Oswald',
                variants: [`300`, `400`, `500`, '600', '700'],
              }
            ],
          },
        },
      },
    },
  ],
}
