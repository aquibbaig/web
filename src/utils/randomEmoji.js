export const blogPostRandom = (inputStr) => {
  return blogPostEmojis[inputStr.length%8]
}

const blogPostEmojis = {
  0: "📚",
  1: "📔",
  2: "📘",
  3: "📒",
  4: "🎒",
  5: "📗",
  6: "📙",
  7: "📝",
}
