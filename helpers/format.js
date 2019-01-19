const util = require('util')
const utils = require('./utils')

function pagerList (posts) {
    let listItems = []
    // for (let post of posts) {
    for (let i=0; i<posts.length; i++) {
      console.log(posts[i])
      console.log('postDetails-posts[i] ', util.inspect(JSON.stringify(posts[i]), {showHidden: false, depth: null}))
      let outputType
      let image = ''
      let text = ''
      let video = ''
      if (posts[i].preview) {
        console.log('posts[i].preview', posts[i].preview)
        if (posts[i].preview.reddit_video_preview) {
          console.log('posts[i].preview.reddit_video_preview', posts[i].preview.reddit_video_preview)
          if (posts[i].preview.reddit_video_preview.is_gif) {
            console.log('posts[i].preview.reddit_video_preview.is_gif', posts[i].preview.reddit_video_preview.is_gif)
            video = posts[i].preview.reddit_video_preview.hls_url
            console.log('video', video)
          }
        }
      }

      if (posts[i].is_video) {
        console.log('posts[i].is_video', posts[i].is_video)
        if (posts[i].secure_media) {
          console.log('posts[i].secure_media', posts[i].secure_media)
          video = posts[i].secure_media.reddit_video.hls_url
          console.log('video', video)
        }
      }

      if (posts[i].title && posts[i].preview && video == '') {
        console.log('posts[i].title', posts[i].title)
        console.log('posts[i].preview', posts[i].preview)
        if (posts[i].preview.images[0].variants.gif) {
          console.log('posts[i].preview.images[0].variants.gif', posts[i].preview.images[0].variants.gif)
          image = posts[i].preview.images[0].variants.gif.source.url
          console.log('image', image)
        } else {
          image = posts[i].preview.images[0].source.url
          console.log('image', image)
        }
      }
      
      if (image != '' || video != '') {
        outputType = "TitleImage"
      } else if (posts[i].selftext != '') {
        outputType = "TitleBody"
        text = posts[i].selftext
      } else if (posts[i].title != '' && posts[i].selftext == '') {
        outputType = "TitleOnly"
      } else {
        outputType = "TitleImage"
      }

      console.log('FINAL image', image)
      console.log('FINAL text', text)
      console.log('FINAL video', video)

      // Tweak output type based on available data
      listItems.push({
          "original": `https://www.reddit.com${posts[i].permalink}`,
          "outputType": outputType,
          "strings": {
              "bookedmarked": posts[i].saved,
              "upvoted": posts[i].likes,
              "score": posts[i].score.toString(),
              "title": posts[i].title.replace(/[!@#$^&%*()+=\'\"[\]/{}|:<>?,.\\-]/g, ''),
              "postid": posts[i].id, 
              "subreddit": posts[i].subreddit_name_prefixed,
              "subreddit_logo": '',
              "image": image,
              "text": text,
              "video": video
          }
      })
    }
    return listItems
  }

module.exports = {
  pagerList
}
