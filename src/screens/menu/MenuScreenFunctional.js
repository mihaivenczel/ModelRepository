import React, {useState} from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
} from 'react-native';

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
];

const MenuScreenFunctional = ({navigation}) => {
  const [itemViewList, setItemViewList] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalSearch, setModalSearch] = useState('');

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
              onTextInput={text => setModalSearch(text)}
            />
          </View>
        ) : null}
      </View>

      <ScrollView style={styles.menu}>
        {itemViewList === false ? (
          <View style={styles.menuOptionGrid}>
            {examples.map((item, i) => {
              // modalSearch === item.fileName
              return (
                
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
                  <Image
                    style={styles.imageGridView}
                    source={images.OldChair}
                  />
                </TouchableOpacity>
              
              );
            })}
          </View>
        ) : (
          <View>
            {examples.map(item => {
              return (
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
                    <Text style={styles.button}>{item.title}</Text>
                    <Image
                      style={styles.imageListView}
                      source={images.OldChair}
                    />
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default MenuScreenFunctional;
