import React from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View, FlatList, ScrollView } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
import colors from '../../../assets/colors';
import Ingredient from '../../components/Ingredient';

export default function Details({ route, navigation }) {

  const { item } = route.params;

  const renderIngredientsItem = ({ item }) => {
    return <Ingredient item={item} />
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.headerLeft}>
              <Feather name='chevron-left' size={14} color={colors.text_dark} />
            </View>
          </TouchableOpacity>
          <View style={styles.headerRight}>
            <MaterialCommunityIcons
              name='star'
              size={14}
              color="#FFF"
            />
          </View>
        </View>
      </SafeAreaView>

      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        showsVerticalScrollIndicator={false}
      >

        {/* Titles */}
        <View style={styles.titlesWrapper}>
          <Text style={styles.title}>{item.title}</Text>
        </View>

        {/* Price */}
        <View style={styles.priceWrapper}>
          <Text style={styles.priceText}>${item.price}</Text>
        </View>

        {/* Info Pizza */}
        <View style={styles.infoWrapper}>
          <View style={styles.infoLeftWrapper}>
            <View style={styles.infoItemWrapper}>
              <Text style={styles.infoItemTitle}>Size</Text>
              <Text style={styles.infoItemText}>
                {item.sizeName} {item.sizeNumber}
              </Text>
            </View>

            <View style={styles.infoItemWrapper}>
              <Text style={styles.infoItemTitle}>Crust</Text>
              <Text style={styles.infoItemText}>
                {item.crust}
              </Text>
            </View>

            <View style={styles.infoItemWrapper}>
              <Text style={styles.infoItemTitle}>Delivery in</Text>
              <Text style={styles.infoItemText}>
                {item.deliveryTime} min
              </Text>
            </View>
          </View>
          <View>
            <Image source={item.image} style={styles.itemImage} />
          </View>
        </View>
        {/* Ingredients */}
        <View style={styles.ingredientsWrapper}>
          <Text style={styles.ingredientsTitle}>Ingredients</Text>
          <View style={styles.ingredientsListWrapper}>
            <FlatList
              data={item.ingredients}
              renderItem={renderIngredientsItem}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        {/* Place an order */}
        <TouchableOpacity onPress={() => alert('Your order has been placed!')}>
          <View style={styles.orderWrapper}>
            <Text style={styles.orderText}>Place an order</Text>
            <Feather name='chevron-right' size={18} color="#000" />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}