module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "TorinoGatsby",
  },
  plugins: [
    
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-214284187-1",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
        options: {
        name: "blog",
        path: `${__dirname}/blog`,
      },
    },
  ],
};
