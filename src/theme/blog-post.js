const blogPostCSS = (mode, props) => ({
  ".post-body > h1, .post-body > h2": {
    margin: '1.5rem 0 0 0'
  },
  ".post-body > ul, .post-body > ol": {
    paddingLeft: "30px",
    margin: "0 0 1rem 0"
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
  },
  "iframe": {
    margin: "1rem 0 1rem 0"
  },
})

export default blogPostCSS
