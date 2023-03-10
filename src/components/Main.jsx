import React from 'react'
import { View } from 'react-native'
import AppBar from './AppBar'
import { Redirect, Route, Switch } from 'react-router-native'
import ListBank from '../pages/ListBank.jsx'

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Switch>
        <Route path='/' exact>
          <ListBank />
        </Route>
        <Redirect to='/' />
      </Switch>
    </View>
  )
}

export default Main
