import React from 'react';
import SignIn from './signin.jsx';
import SignUp from './signup.jsx';
import { haversineDistance } from '../helper.js';

export default class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newComment : '',
      username: this.props.userObj.username,
      locationId: this.props.currentSpot._id,
      userWithinDistance: undefined
    };
  } 

  checkin() {
    //use haversine helper to compute the distance between user and spot
    var distance = haversineDistance({lat: this.props.currentSpot.lat, lng: this.props.currentSpot.lng}, this.props.userLocation);
    if (distance < 0.5) {
      this.props.checkIn({locationId: this.props.currentSpot._id});    
    } else {
      this.setState({
        userWithinDistance: false
      });
    }
  }

  handleComment(e) {
    this.setState({
      newComment: e.target.value
    });
  }

  postComment(e) {
    e.preventDefault();
    var message = this.state;
    message.locationId = this.props.currentSpot._id;
    if (this.state.username === 'anonymous' || this.state.newComment.length < 1) {
      console.log('nope');
      //done- tell user to login in
    } else {
      this.props.postComment(this.state);
      this.setState({
        newComment: ''
      });
    }
  }

  render() {
    var checkin;
    var checkinHeader;
    var checkedInUser;
    var postedComment;
    var checkedIn = false;

    if (this.props.currentSpot.checkin.length > 0) {
      checkinHeader = <p className="bold-italic">Skaters currently at this spot!</p>;
      checkedInUser = this.props.currentSpot.checkin.map((user, index) => {
        if (user._id === this.props.userObj._id) {
          checkedIn = true;
        }

        return (<p>{user.username}</p>);
      });
    } else {
      checkinHeader = <p className="bold-italic">Wanna check in at the spot?</p>;
    }

    if (this.props.userObj._id && checkedIn === false) {
      if (this.state.userWithinDistance === false) {
        checkin = <p>You are too far away.</p>;
      } else {
        checkin = <button className="btn btn-sm" onClick={ () => this.checkin() }>Check In</button>;
      }
    }

    if (!this.props.userObj._id && this.state.newComment.length > 0) {
      postedComment = <p>User has to be signed in to leave comments</p>;
    }

    return (<div className='infoPanel'>
              <div className="bubble-div">
                <h3 className='display'>{this.props.currentSpot.name}</h3>
                <p className="bold-italic">Address:</p>
                <p>{this.props.currentSpot.address}</p>
                <p className="bold-italic">Description:</p>
                <p>{this.props.currentSpot.detailedDescription}</p>
                <p><span className="bold-italic">Bust?</span> : {this.props.currentSpot.bust}</p>
              </div>
              <div className="bubble-div">
                {checkinHeader}
                {checkedInUser}
                {checkin}
              </div>
              <div className="bubble-div">
                <div className="center-div">
                  <h5>RECENT COMMENTS</h5>
                </div>
                {this.props.currentSpot.comments.map((comment, index)=> {
                  return (<div key={comment._id || index} className="comment-div">
                            <span className="img-span">
                              <img src="img/skateboarder.png" alt="User Image" height="90" width="120" className="comment-image"/>
                            </span>
                            <span className="comment-span">
                              <p className="bold-italic">{comment.username} :</p> 
                              <p>{comment.comment}</p>
                            </span>
                          </div>);
                })}
                <form onSubmit={this.postComment.bind(this)}>
                  <div className="form-group">
                      <label className="sr-only" >Detailed description</label>
                      <textarea type="text" placeholder='Leave a Comment' value={this.state.newComment} 
                      onChange={this.handleComment.bind(this)} className="form-control" ></textarea>
                  </div>
                  <button className="btn btn-sm send-button" >Send</button>
                </form>
                {postedComment}
              </div>
            </div>);
  }
}

