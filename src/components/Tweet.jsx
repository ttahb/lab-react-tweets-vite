import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

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
          <User name={user.name} handle={user.handle} />
          <Timestamp timestamp={tweet.timestamp}/>
        </div>

        <Message message={tweet.message}/>
        <Actions/>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
