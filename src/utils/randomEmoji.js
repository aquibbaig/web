export const blogPostRandom = (inputStr) => {
  if (inputStr.includes('journal')) {
    return "📝";
  }
  return blogPostEmojis[inputStr.length%7]
}

const blogPostEmojis = {
  0: "📚",
  1: "📔",
  2: "📘",
  3: "📒",
  4: "🎒",
  5: "📗",
  6: "📙",
}
