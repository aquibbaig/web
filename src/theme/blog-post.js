const blogPostCSS = (mode, props) => ({
  ".post-body": {
    color: mode('light.secondaryTextColor', 'dark.secondaryTextColor')(props),
    textAlign: 'justify'
  },
  ".post-body > h1, .post-body > h2": {
    margin: '1.5rem 0 0 0'
  },
  ".post-body > ul, .post-body > ol": {
    paddingLeft: "30px"
  },
  ".post-body > p > a, .post-body > ol >  li > p > a, .post-body > ul >  li > p > a": {
    textDecoration: 'underline',
    textDecorationColor: mode("#cecece", "#cecece")(props)
  },
  ".post-body > p": {
    margin: "0 0 1rem 0"
  },
  ".post-body > p > img, .post-body > ol > li > p > img": {
    margin: "1rem 0 1rem 0"
  },
  ".post-body > h1": {
    fontSize: "1.4rem",
    color: mode('#000', '#fff')(props),
  },
  ".post-body > h2": {
    fontSize: "1.2rem",
    color: mode('#000', '#fff')(props),
  },
  ".post-body > h3": {
    fontSize: "1.2rem",
    color: mode('#000', '#fff')(props),
  }
})

export default blogPostCSS
