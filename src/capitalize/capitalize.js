function capitalize(string) {
  const sentences = string.split(".");

  for (let i = 0; i < sentences.length; i++) {
    if (!sentences[i]) continue;
    sentences[i] = sentences[i].trim();
    sentences[i] = sentences[i][0].toUpperCase() + sentences[i].slice(1);
  }

  return sentences.join(". ").trim();
}

module.exports = capitalize;
