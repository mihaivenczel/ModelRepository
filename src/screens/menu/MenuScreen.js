import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  FlatList,
} from 'react-native';

import {MenuScreenStyles as styles} from './styles';
import {getAllModels} from '../../api';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {roots} from '../../navigation';
import {BASE_DEV_URL} from '../../core/constants/url';

const MenuScreen = ({navigation}) => {
  const [itemViewList, setItemViewList] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showCategory, setShowCategory] = useState(false);

  const [categories, setCategories] = useState([]);

  const [fullData, setFullData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const fetchAllModels = async () => {
    const tempData = await getAllModels();
    setFullData(tempData);
    setFilteredData(tempData);
  };

  useEffect(() => {
    fetchAllModels();
  }, []);

  useEffect(() => {
    pushUniqueCategories();
  }, [fullData]);

  const pushUniqueCategories = () => {
    const tempCategoriesArr = [];
    fullData.map(item => {
      tempCategoriesArr.push(item.category);
    });
    const tempSetArr = [...new Set(tempCategoriesArr)];
    setCategories(tempSetArr);
  };

  const handleSearch = value => {
    const tempData = [];
    fullData.map(item => {
      item.searchTag.toLowerCase().includes(value) || item.category === value
        ? tempData.push(item)
        : null;
    });
    setFilteredData(tempData);
  };

  const showItemsInCategory = () => {
    return (
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          onPress={() => {
            setShowCategory(prevstate => !prevstate);
          }}>
          <Text style={styles.searchText}>Search by category</Text>
        </TouchableOpacity>
        {showCategory === true ? (
          <View style={styles.categoryContainer}>
            {categories.map(item => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    handleSearch(item);
                  }}
                  style={styles.categoryObject}>
                  <Text style={styles.categoryText}>{item}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ) : null}
      </View>
    );
  };

  const showSearchModal = () => {
    return (
      <View style={styles.searchContainer}>
        <TouchableOpacity
          onPress={() => {
            setShowModal(prevstate => !prevstate);
          }}>
          <Text style={styles.searchText}>Search by filename</Text>
        </TouchableOpacity>
        {showModal === true ? (
          <View style={styles.modalContainer}>
            <TextInput
              style={styles.modalInput}
              placeholder={'Search model by filename'}
              onChangeText={text => handleSearch(text)}
            />
          </View>
        ) : null}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>{showItemsInCategory()}</View>
        <View style={styles.headerRight}>{showSearchModal()}</View>
      </View>
      <View style={styles.menu}>
        {itemViewList === false ? (
          <FlatList
            style={styles.listObjectContainer}
            data={filteredData}
            numColumns={3}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.listObject}
                onPress={() =>
                  navigation.navigate(roots.detailsScreen, {
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    fileName: item.fileName,
                    tag: item.tag,
                  })
                }>
                <Image
                  style={styles.imageGridView}
                  source={{uri: BASE_DEV_URL + `/model/${item.thumbnail}`}}
                />
              </TouchableOpacity>
            )}
          />
        ) : (
          <View>
            <FlatList
              style={styles.listObjectContainer}
              data={filteredData}
              numColumns={1}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(roots.detailsScreen, {
                      id: item.id,
                      title: item.title,
                      description: item.description,
                      fileName: item.fileName,
                      tag: item.tag,
                    })
                  }
                  key={item.id}>
                  <View style={styles.menuOptionList}>
                    <View style={styles.menuOptionListLeft}>
                      <Text style={styles.text}>{item.title}</Text>
                    </View>
                    <View style={styles.menuOptionListRight}>
                      <Image
                        style={styles.imageListView}
                        source={{
                          uri: BASE_DEV_URL + `/model/${item.thumbnail}`,
                        }}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        )}
      </View>
      <TouchableOpacity
        style={styles.gridButton}
        onPress={() => {
          setItemViewList(prevstate => !prevstate);
        }}>
        {itemViewList === true ? (
          <MaterialCommunityIcons
            style={styles.gridIcon}
            name="view-grid"
            size={40}
            color={'#663bf5'}
          />
        ) : (
          <MaterialCommunityIcons
            style={styles.gridIcon}
            name="format-list-bulleted"
            size={40}
            color={'#663bf5'}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default MenuScreen;
