
const snoowrap = require('snoowrap')
const utils = require('../helpers/utils')

// TODO - (post submission) tidy this file, not all outputs are needed any more and can be confusing

function getPostDetailsById (postId, handlerInput) {

  if (!utils.accountUnlinked(handlerInput)) {
    return handlerInput.responseBuilder
      .speak(requestAttributes.t('ACCOUNT_UNLINKED'))
      .withLinkAccountCard()
      .getResponse();
  }

  return (async function () {
    let r = new snoowrap({
        userAgent: 'Alexa for Reddit',
        accessToken: accessToken
    })
    let post = await r.getSubmission(postId)

    let output = {
      type: 'image',
      image: await post.thumbnail
    }

    if (await post.preview) {
      if (await post.preview.reddit_video_preview) {
        if (await post.preview.reddit_video_preview.is_gif) {
          output.type = 'video'
          let giflink = await post.url
          giflink = giflink.slice(0,-4) 
          output.image = giflink + 'mp4'
        }
      } else if (post.preview.images[0]) {
        output.type = 'image'
        output.image = await post.preview.images[0].source.url
      }
    }

    if (await post.url.slice(-3) == 'gif') {
      output.type = 'image'
      output.image = await post.url
    }

    if (await post.downs) {
      output.score = await post.ups - await post.downs
    } else {
      output.score = await post.ups
    }
    output.score = utils.kFormatter(output.score)


    if (await post.likes) {
      output.vote = 'up'
    } else {
      output.vote = 'none'
    }
    
    output.text = await post.selftext
    output.subreddit = await post.subreddit.display_name
    output.subredditPrefix = await post.subreddit_name_prefixed
    output.title = await post.title
    output.id = await post.id

    return output
  })()
}

function upVotePost (postId, handlerInput) {
  return (async function () {
    const accessToken = handlerInput.requestEnvelope.context.System.user.accessToken
    if (accessToken == undefined){
      const unlinked = require('./UnlinkedIntent').UnlinkedHandler
        return unlinked.handle(handlerInput)
    }
    let r = new snoowrap({
        userAgent: 'Alexa for Reddit',
        accessToken: accessToken
    })
    let post = await r.getSubmission(postId)
    let vote = await post.upvote()
    return vote
  })()
}

function downVotePost (postId, handlerInput) {
  return (async function () {
    const accessToken = handlerInput.requestEnvelope.context.System.user.accessToken
    if (accessToken == undefined){
      const unlinked = require('./UnlinkedIntent').UnlinkedHandler
        return unlinked.handle(handlerInput)
    }
    let r = new snoowrap({
        userAgent: 'Alexa for Reddit',
        accessToken: accessToken
    })
    let post = await r.getSubmission(postId)
    let vote = await post.unvote()
    return vote
  })()
}

function bookmarkPost (postId, handlerInput) {
  return (async function () {
    const accessToken = handlerInput.requestEnvelope.context.System.user.accessToken
    if (accessToken == undefined){
      const unlinked = require('./UnlinkedIntent').UnlinkedHandler
        return unlinked.handle(handlerInput)
    }
    let r = new snoowrap({
        userAgent: 'Alexa for Reddit',
        accessToken: accessToken
    })
    let post = await r.getSubmission(postId)
    let vote = await post.save()
    return vote
  })()
}

function unBookmarkPost (postId, handlerInput) {
  return (async function () {
    const accessToken = handlerInput.requestEnvelope.context.System.user.accessToken
    if (accessToken == undefined){
      const unlinked = require('./UnlinkedIntent').UnlinkedHandler
        return unlinked.handle(handlerInput)
    }
    let r = new snoowrap({
        userAgent: 'Alexa for Reddit',
        accessToken: accessToken
    })
    let post = await r.getSubmission(postId)
    let vote = await post.unsave()
    return vote
  })()
}


module.exports = {
    getPostDetailsById,
    upVotePost,
    downVotePost,
    bookmarkPost,
    unBookmarkPost
  }
  