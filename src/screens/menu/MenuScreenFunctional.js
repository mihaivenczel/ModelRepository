import React, {useState} from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  FlatList,
} from 'react-native';

import filter from 'lodash.filter';

import {MenuScreenStyles as styles} from './styles';
import {images} from '../../core/images';

const examples = [
  {
    id: 0,
    title: 'Chair 1',
    description: 'Lorem ipsum sit amet',
    fileName: 'chair2.obj',
    searchTag: 'scaun',
    category: 'mobila',
  },
  {
    id: 1,
    title: 'Sofa 1',
    description: 'Lorem ipsum sit amet',
    fileName: 'sofa1.obj',
    searchTag: 'sofa',
    category: 'mobila',
  },
  {
    id: 2,
    title: 'Chair 1',
    description: 'Lorem ipsum sit amet',
    fileName: 'chair2.obj',
    searchTag: 'scaun',
    category: 'mobila',
  },
  {
    id: 3,
    title: 'Chair 1',
    description: 'Lorem ipsum sit amet',
    fileName: 'chair2.obj',
    searchTag: 'ttt',
    category: 'mobila',
    
  },
  {
    id: 4,
    title: 'Chair 1',
    description: 'Lorem ipsum sit amet',
    fileName: 'chair2.obj',
    searchTag: 'ttt',
    category: 'mobila',
  },
  {
    id: 5,
    title: 'Chair 1',
    description: 'Lorem ipsum sit amet',
    fileName: 'chair2.obj',
    searchTag: 'ttt',
    category: 'mobila',
  },
  {
    id: 6,
    title: 'Chair 1',
    description: 'Lorem ipsum sit amet',
    fileName: 'chair2.obj',
    searchTag: 'ttt',
    category: 'mobila',
  },
  {
    id: 7,
    title: 'Chair 1',
    description: 'Lorem ipsum sit amet',
    fileName: 'chair2.obj',
    searchTag: 'ttt',
    category: 'mobila',
  },
  {
    id: 8,
    title: 'Chair 1',
    description: 'Lorem ipsum sit amet',
    fileName: 'chair2.obj',
    searchTag: 'ttt',
    category: 'mobila',
  },
  {
    id: 9,
    title: 'Chair 1',
    description: 'Lorem ipsum sit amet',
    fileName: 'chair2.obj',
    searchTag: 'ttt',
    category: 'mobila',
  },
];

const searchModelByfileName = (searchedTerm, fileName) => {
  return searchedTerm === fileName ? null : null;
};

const MenuScreenFunctional = ({navigation}) => {
  const [itemViewList, setItemViewList] = useState(true);

  const [modal, setModal] = useState(false);
  const [modalSearch, setModalSearch] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const [fullData, setFullData] = useState(examples);
  const [filteredData, setFilteredData] = useState();
  const [dataCopy, setDataCopy] = useState(fullData);

  const handleSearch = value => {
    const tempData = [];
    dataCopy.map(item => {
      console.log(item, 'item');
      console.log(value, 'value');
      item.searchTag.includes(value) ? tempData.push(item) : null;
    });
    console.log(tempData);
    setFilteredData(tempData);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>ModelRepository</Text>
        <View>
          <TouchableOpacity
            onPress={() => {
              setItemViewList(prevstate => !prevstate);
            }}>
            <Text>Grid/List</Text>
          </TouchableOpacity>
        </View>
      </View>

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

      <ScrollView style={styles.menu}>
        {itemViewList === false ? (
          <FlatList
            style={styles.listObjectContainer}
            data={examples}
            extraData={filteredData}
            numColumns={3}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.listObject}
                onPress={() =>
                  navigation.navigate('ModelDetailsScreen', {
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
              data={examples}
              extraData={filteredData}

              numColumns={1}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('ModelDetailsScreen', {
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
      </ScrollView>
    </View>
  );
};

export default MenuScreenFunctional;
