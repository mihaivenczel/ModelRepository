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
    tag: 'scaun',
  },
  {
    id: 1,
    title: 'Sofa 1',
    description: 'Lorem ipsum sit amet',
    fileName: 'sofa1.obj',
    tag: 'sofa',
  },
  {
    id: 2,
    title: 'Chair 1',
    description: 'Lorem ipsum sit amet',
    fileName: 'chair2.obj',
    tag: 'scaun',
  },
  {
    id: 3,
    title: 'Chair 1',
    description: 'Lorem ipsum sit amet',
    fileName: 'chair2.obj',
    tag: 'scaun',
  },
  {
    id: 4,
    title: 'Chair 1',
    description: 'Lorem ipsum sit amet',
    fileName: 'chair2.obj',
    tag: 'scaun',
  },
  {
    id: 5,
    title: 'Chair 1',
    description: 'Lorem ipsum sit amet',
    fileName: 'chair2.obj',
    tag: 'scaun',
  },
  {
    id: 6,
    title: 'Chair 1',
    description: 'Lorem ipsum sit amet',
    fileName: 'chair2.obj',
    tag: 'scaun',
  },
  {
    id: 7,
    title: 'Chair 1',
    description: 'Lorem ipsum sit amet',
    fileName: 'chair2.obj',
    tag: 'scaun',
  },
  {
    id: 8,
    title: 'Chair 1',
    description: 'Lorem ipsum sit amet',
    fileName: 'chair2.obj',
    tag: 'scaun',
  },
  {
    id: 9,
    title: 'Chair 1',
    description: 'Lorem ipsum sit amet',
    fileName: 'chair2.obj',
    tag: 'scaun',
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

  const [fullData, setFullData] = useState([]);

  const renderHeader = () => {
    return (
      <View
        style={{
          backgroundColor: '#fff',
          padding: 10,
          marginVertical: 10,
          borderRadius: 20,
        }}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={modalSearch}
          onChangeText={test => handleSearch(test)}
          placeholder="Search"
          style={{backgroundColor: '#fff', paddingHorizontal: 20}}
        />
      </View>
    );
  };

  const handleSearch = text => {
    const formattedQuery = text.toLowerCase();
    const filteredData = filter(examples, fileName => {
      return contains(fileName, formattedQuery);
    });
    setData(filteredData);
    setModalSearch(text);
  };

  const contains = query => {
    if (
      first.includes(query) ||
      last.includes(query) ||
      email.includes(query)
    ) {
      return true;
    }

    return false;
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
            key={examples.id}
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
              key={examples.id}
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
