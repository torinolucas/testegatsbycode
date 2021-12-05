module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "torinoGatsby",
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

  ],
};
