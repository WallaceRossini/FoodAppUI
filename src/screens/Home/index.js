import { Feather } from '@expo/vector-icons';
import React from 'react';
import { FlatList, Image, KeyboardAvoidingView, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import colors from '../../../assets/colors';
import categories from '../../../assets/data/categories';
import popular from '../../../assets/data/popular';
import Category from '../../components/Category';
import Popular from '../../components/Popular';
import styles from './styles';


export default function Home({ navigation }) {


  const renderCategoryItem = ({ item }) => {
    return <Category item={item} />
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <ScrollView
          contentInsetAdjustmentBehavior='automatic'
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <SafeAreaView>
            <View style={styles.headerWrapper}>
              <Image source={require('../../../assets/images/person.jpg')} style={styles.profileImage} />
              <Feather name='menu' size={24} color={colors.text_dark} />
            </View>

            {/* Titles */}
            <View style={styles.titlesWrapper}>
              <Text style={styles.titlesSubtitle}>Food</Text>
              <Text style={styles.titlesTitle}>Delivery</Text>
            </View>

            {/* Search */}
            <View style={styles.searchWrapper}>
              <Feather name='search' size={16} color={colors.text_dark} />
              <View style={styles.search}>
                <TextInput
                  style={styles.searhText}
                  placeholder='Search...' />
              </View>
            </View>

            {/* Categories */}
            <View style={styles.categoriesWrapper}>
              <Text style={styles.categoriesTitle}>Categories</Text>
              <View style={styles.categoriesListWrapper}>
                <FlatList
                  data={categories}
                  renderItem={renderCategoryItem}
                  keyExtractor={(item, index) => item.id.toString()}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            </View>
            {/* Popular */}
            <View style={styles.popularWrapper}>
              <Text style={styles.popularTitle}>
                {popular.map(item => {
                  return (
                    <TouchableOpacity
                      key={item.id}
                      onPress={() =>
                        navigation.navigate('Details', {
                          item: item,
                        })
                      }>
                      <Popular key={item.id} item={item} />
                    </TouchableOpacity>
                  )
                })}
              </Text>
            </View>
          </SafeAreaView>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  )
}
