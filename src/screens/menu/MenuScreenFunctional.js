import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  FlatList,
} from 'react-native';

import {MenuScreenStyles as styles} from './styles';
import {images} from '../../core/images';
import {getAllModels} from '../../api';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {roots} from '../../navigation';

const searchModelByfileName = (searchedTerm, fileName) => {
  return searchedTerm === fileName ? null : null;
};

const MenuScreenFunctional = ({navigation}) => {
  const [itemViewList, setItemViewList] = useState(true);
  const [modal, setModal] = useState(false);

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

  const handleSearch = value => {
    const tempData = [];
    fullData.map(item => {
      item.searchTag.includes(value) ? tempData.push(item) : null;
    });
    setFilteredData(tempData);
  };

  const searchModal = () => {
    return (
      <View style={styles.searchContainer}>
        <TouchableOpacity
          onPress={() => {
            setModal(prevstate => !prevstate);
          }}>
          <Text>Search...</Text>
        </TouchableOpacity>
        {modal === true ? (
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
        <Text style={styles.headerTitle}>ModelRepository</Text>
      </View>
      {searchModal()}
      <View style={styles.menu}>
        {itemViewList === false ? (
          <FlatList
            style={styles.listObjectContainer}
            data={filteredData}
            // ListHeaderComponent={searchModal()}
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
                <Image style={styles.imageGridView} source={images.OldChair} />
              </TouchableOpacity>
            )}
          />
        ) : (
          <View>
            <FlatList
              style={styles.listObjectContainer}
              data={filteredData}
              // ListHeaderComponent={searchModal()}
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
                    <Text style={styles.text}>{item.title}</Text>
                    <Image
                      style={styles.imageListView}
                      source={images.OldChair}
                    />
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

export default MenuScreenFunctional;
