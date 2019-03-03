let Field = new Vue({
  el: "#field",
  computed: {
    tweet_text: function(){
      var time = new Date();
      return this.name + "が" + time.getHours() +
      "時" +
      time.getMinutes() +
      "分をお知らせします。"
    }
  },
  data: {
    name: "アカピー",
    rename: false
  },
  methods: {
    tweet: function(){
      const content = {
        url: window.location.href,
        text: this.tweet_text,
        tag: "アカピー時報,時報"
      }
      for (let key in content) {
        content[key] = encodeURIComponent(content[key])
      }
      const tweeturl = `https://twitter.com/intent/tweet?url=${content.url}&text=${
        content.text
      }&hashtags=${content.tag}`;
      window.open(tweeturl)
    }
  }
})
