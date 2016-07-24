import React from'react';
import SignIn from './signin.jsx';
import SignUp from './signup.jsx';
import NewSpot from './addSpot.jsx';

export const SignInPanel = (props) => {

	var signIn;
	var signUp;
  var newSpot;

	if (props.mode === 2) {
		signIn = <h3 className='display'>
      Sign In
      <SignIn signin={props.signin} />
		  </h3>
	}
	if (props.mode === 1) {
		signIn = <h3 className='display'>
      Sign Up
		  <SignUp signup={props.signup} user={props.user}/>
		  </h3>
	}
  if (props.mode === 3) {
    newSpot = <h3 className='display'>
    Add a spot using my location 
    <NewSpot userLocation={props.userLocation} skateSpots={props.skateSpots} getSkateSpots={props.getSkateSpots}/>
    </h3>
  }

	return (
		<div>
		{signIn}
		{signUp}
    {newSpot}
		</div>
	);

};
