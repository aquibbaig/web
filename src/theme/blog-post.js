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
  "code": {
    bg: mode('#e7e9eb', "#252525")(props),
    color: mode('rgb(97, 97, 97)', "#d8d8d8")(props),
    padding: '3px',
    borderRadius: '2px'
  },
  "blockquote": {
    borderLeft: "5px solid #dddfe2",
    padding: "20px 45px 20px 26px",
    marginTop: '2vh',
    marginBottom: '2vh'
  }
})

export default blogPostCSS
