import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';

const HEADER_SEARCH_KEY = 'header-search';
const HEADER_FILTER_KEY = 'header-filter';
const EMPTY_LIST_KEY = 'list-empty';
async function generateData(page: number) {
  const now = new Date().valueOf();
  const data = [];
  for (let i = 1; i < 11; i++) {
    data.push({
      key: `${now}-${i}`,
      label: `item-${page}-${i}`,
    });
  }
  await new Promise((resolve) => setTimeout(resolve, 500));
  return data;
}

function FLView() {
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Record<string, any>[]>([]);

  useEffect(() => {
    (async () => {
      const newData = await generateData(0);
      setData([
        {key: HEADER_SEARCH_KEY},
        {key: HEADER_FILTER_KEY},
        ...(newData.length === 0 ? [{key: EMPTY_LIST_KEY}] : newData),
      ]);
    })();
  }, []);

  const handleEndReach = async () => {
    const newData = await generateData(page + 1);
    setData((prevState) => [...prevState, ...newData]);
    setPage((prevState) => prevState + 1);
  };
  const handleRefresh = async () => {
    setLoading(true);
    const newData = await generateData(0);
    setData([
      {key: HEADER_SEARCH_KEY},
      {key: HEADER_FILTER_KEY},
      ...(newData.length === 0 ? [{key: EMPTY_LIST_KEY}] : newData),
    ]);
    setPage(0);
    setLoading(false);
  };

  return (
    <FlatList
      style={{flex: 1}}
      onEndReached={handleEndReach}
      stickyHeaderIndices={[1]}
      removeClippedSubviews={false} // https://github.com/facebook/react-native/issues/25157
      refreshing={loading}
      onRefresh={handleRefresh}
      alwaysBounceVertical={false}
      ListHeaderComponent={() => (
        <View
          style={{
            padding: 8,
            backgroundColor: '#f008',
            borderBottomWidth: 1,
            borderBottomColor: '#ddd',
          }}>
          <Text>This is a header</Text>
          <Text>{new Date().valueOf()}</Text>
        </View>
      )}
      data={data}
      renderItem={({item, index}) => {
        switch (item.key) {
          case HEADER_SEARCH_KEY:
            return (
              <View
                style={{
                  padding: 8,
                  backgroundColor: '#0f08',
                  borderBottomWidth: 1,
                  borderBottomColor: '#ddd',
                }}>
                <Text>This is the search</Text>
              </View>
            );
          case HEADER_FILTER_KEY:
            return (
              <View
                style={{
                  padding: 8,
                  backgroundColor: '#00f8',
                  borderBottomWidth: 1,
                  borderBottomColor: '#ddd',
                }}>
                <Text>This is the filter</Text>
              </View>
            );
          case EMPTY_LIST_KEY:
            return (
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text>This list is empty</Text>
              </View>
            );
          default:
            return (
              <View
                style={{
                  padding: 8,
                  backgroundColor: '#fff',
                  borderBottomColor: '#ddd',
                  borderBottomWidth: 1,
                }}>
                <Text>index: {index}</Text>
                <Text>key: {item.key}</Text>
                <Text>label: {item.label}</Text>
              </View>
            );
        }
      }}
    />
  );
}

export default FLView;
