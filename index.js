const button = document.querySelector(".tweet")
button.addEventListener("click", () => {
  var time = new Date()
  console.log()
  const content = {
    text:
      "アカピーが" +
      time.getHours() +
      "時" +
      time.getMinutes() +
      "分をお知らせします。",
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
