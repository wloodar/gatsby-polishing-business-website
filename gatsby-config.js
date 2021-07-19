module.exports = {
  siteMetadata: {
    siteUrl: "https://polerowanieal.pl",
    author: '@wloodar',
    title: "Polerowanie Aluminium | Piaskowanie & Szkiełkowanie Warszawa",
    description: `Polerujemy wibracyjnie i roto-wibracyjnie części do motocykli zabytkowych jak i współczesnych, felgi aluminiowe do samochodów osobowych oraz ciężarowych do 24".`
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-plugin-netlify-cms",
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
        name: "galleryimages",
        path: "./static/img/",
      },
      __key: "galleryimages",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#DC7241`,
        showSpinner: false,
      },
    },
  ],
};
