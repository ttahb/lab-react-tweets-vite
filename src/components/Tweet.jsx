import ProfileImage from "./ProfileImage";

function Tweet(props) {
  //console.log('props', props);
  const {tweet} = props;
  // console.log('tweet', tweet);
  const {user} = tweet;
  // console.log('user', user);
  // console.log('user', props.tweet.user);

  return (
    <div className="tweet">
      {/* iteration-4 */}
      <ProfileImage image={user.image}/>

      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">{user.name}</span>
            <span className="handle">@{user.handle}</span>
          </span>

          <span className="timestamp">{tweet.timestamp}</span>
        </div>

        <p className="message">
          {tweet.message} 🚀
        </p>

        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment" data-testid="comment-icon"></i>
          <i className="fas fa-retweet" data-testid="retweet-icon"></i>
          <i className="far fa-heart" data-testid="heart-icon"></i>
          <i className="fas fa-share" data-testid="share-icon"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
