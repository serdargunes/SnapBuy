import React,{useState} from 'react'
import { FlatList } from 'react-native'
import ProductsList from '../../../assets/ProductsList';
import ProductsDetail from '../ProductsDetail/ProductsDetail';


function Products() {
  const [list, setList] = useState(ProductsList);
  const renderProduct = ({ item }: { item: any }) => <ProductsDetail product={item} />;
  return (
    <FlatList
    data={list}
    renderItem={renderProduct}
    keyExtractor={item => item.id}
    numColumns={2}
    />
  );
}

export default Products