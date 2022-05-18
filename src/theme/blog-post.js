const blogPostCSS = (mode, props) => ({
  "*": {
    lineHeight: '2'
  },
  ".post-body > h1, .post-body > h2": {
    margin: '1.5rem 0 0 0',
    lineHeight: '1.6'
  },
  ".post-body > ul, .post-body > ol": {
    paddingLeft: "30px",
    margin: "0 0 1rem 0"
  },
  ".post-body > p": {
    margin: "0 0 1rem 0",
  },
  ".post-body > p > img, .post-body > ol > li > p > img": {
    margin: "1rem 0 1rem 0"
  },
  ".post-body > h1": {
    fontSize: "1.8rem",
    margin: "1rem 0 1rem 0",
    color: mode('#000', '#fff')(props),
    lineHeight: '1.6'
  },
  ".post-body > h2": {
    fontSize: "1.6rem",
    margin: "1rem 0 1rem 0",
    color: mode('#000', '#fff')(props),
    lineHeight: '1.6'
  },
  ".post-body > h3": {
    fontSize: "1.4rem",
    margin: "1rem 0 1rem 0",
    color: mode('#000', '#fff')(props),
    lineHeight: '1.6'
  },
  "iframe": {
    margin: "1rem 0 1rem 0"
  },
  "code": {
    bg: mode('#EDF1FA', "#222730")(props),
    color: mode('#0E52F1', "#6E97F7")(props),
    padding: '4px',
    borderRadius: '5px',
    fontFamily: 'Courier New',
    fontWeight: 'semibold',
  },
  "blockquote": {
    borderLeft: "5px solid #dddfe2",
    padding: "20px 45px 20px 26px",
    marginTop: '2vh',
    marginBottom: '2vh'
  },
  ".post-body": {
    "pre": {
      margin: "1rem 0 1rem 0",
    }
  }
})

export default blogPostCSS
