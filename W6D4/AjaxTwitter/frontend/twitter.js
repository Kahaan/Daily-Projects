const FollowToggle = ('./follow_toggle.js')

$(function(){
  $('button.follow-toggle').each((i,btn) => new FollowToggle(btn,{}))
})
