class FollowToggle{

  constructor(el, options) {
    this.$el = $(el),
    this.userId = this.$el.data('user-id') || options.userId,
    this.followState = this.$el.data('initial-follow-state') || options.followState,
    this.render(),
    this.$el.on('click',this.handleClick.bind(this))
  }

  handleClick(event) {
    
  }

  render() {
      // switch (this.followState) {
      //   case 'followed':
      //     this.$el.prop('disabled', false);
      //     this.$el.html('Unfollow!');
      //     break;
      //   case 'unfollowed':
      //     this.$el.prop('disabled', false);
      //     this.$el.html('Follow!');
      //     break;
      //   case 'following':
      //     this.$el.prop('disabled', true);
      //     this.$el.html('Following...');
      //     break;
      //   case 'unfollowing':
      //     this.$el.prop('disabled', true);
      //     this.$el.html('Unfollowing...');
      //     break;
      // }
      switch (this.follwState) {
        case 'followed':
          this.$el.html('Unfollow!')
          break
        case 'unfollowed':
          this.$el.html('Follow!')
          break
        case ''
      }
    }

}


module.exports = FollowToggle
