import React, { useState } from 'react'
import { Text, ActivityIndicator, Button, View, StyleSheet } from 'react-native'
import * as Color from '../utils/Color';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center"
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10
    }
  });

export default () => {

    return <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color={Color.primary()} />
    </View>
}