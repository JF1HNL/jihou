const button = document.querySelector(".tweet")
button.addEventListener("click", () => {
  var time = new Date()
  const content = {
    text: "",
    tag: "アカピー時報"
  }
  for (let key in content) {
    content[key] = encodeURIComponent(content[key])
  }
  let tweeturl =
    "https://twitter.com/intent/tweet?text=" +
    content.text +
    "&hashtags=" +
    content.tag
  window.open(tweeturl)
})
