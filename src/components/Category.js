import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons';
import colors from '../../assets/colors';

export default function Category({ item }) {
  return (
    <View style={[styles.categoryItemWrapper, {
      backgroundColor: item.selected ? colors.primary : colors.background,
      marginLeft: item.id == 1 ? 20 : 0,
    }]}>
      <Image style={styles.categoryItemImage} source={item.image} />
      <Text style={styles.categoryItemTitle}>{item.title}</Text>
      <View style={[styles.categorySelectWrapper, {
        backgroundColor: item.selected ? colors.background : colors.secondary,
      }]}>
        <Feather name='chevron-right' size={8} style={styles.categorySelectIcon} color={item.selected ? '#000' : '#FFF'}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  categoryItemWrapper: {
    backgroundColor: colors.primary,
    marginRight: 20,
    borderRadius: 20,
  },
  categoryItemImage: {
    width: 60,
    height: 60,
    marginTop: 25,
    alignSelf: 'center',
    marginHorizontal: 20,
  },
  categoryItemTitle: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    marginTop: 10
  },
  categorySelectWrapper: {
    alignSelf: 'center',
   
    justifyContent: 'center',
    marginTop: 20,
    width: 26,
    height: 26,
    borderRadius: 26,
    marginBottom: 20,
  },
  categorySelectIcon: {
    alignSelf: 'center'
  }
})
