import React, { useState, useEffect } from 'react';
import StyledText from '../components/StyledText'
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  StatusBar,
  Image,
  Text
} from 'react-native';

export default function ListBank() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)

  const url = "https://dev.obtenmas.com/catom/api/challenge/banks"

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [])

  const Item = ({ title, description, prmurl }) => (
    <View style={styles.item}>
      <View style={{ paddingRight: 10 }}>
        <Image style={styles.logo} source={{ uri: prmurl }} />
      </View>
      <View style={{ flex: 1 }}>
        <StyledText fontWeight='bold'>{title}</StyledText>
        <StyledText color='secondary'>{description}</StyledText>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {
        loading ? <Text>Loading ....</Text> :
          <SafeAreaView style={styles.container}>
            <FlatList
              data={data}
              renderItem={({ item }) => <Item title={item.bankName} description={item.description} prmurl={item.url} />}
              keyExtractor={item => item.age}
            />
          </SafeAreaView>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  logo: {
    width: 50,
    height: 50,
  },
  item: {
    backgroundColor: '#F1EFEE',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 12,
    flexDirection: 'row',
    paddingBottom: 2,
    height: 90
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 15,
    color: 'blue',
  },

});