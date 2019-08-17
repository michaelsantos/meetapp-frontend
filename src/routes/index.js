import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';

import Meetup from '~/pages/Meetup';
import MeetupForm from '~/pages/MeetupForm';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" isPrivate component={Dashboard} />
      <Route path="/profile" isPrivate component={Profile} />

      <Route path="/meetup" exact isPrivate component={MeetupForm} />
      <Route path="/meetup/:id" exact isPrivate component={Meetup} />
      <Route path="/meetup/edit/:id" isPrivate component={MeetupForm} />
    </Switch>
  );
}
