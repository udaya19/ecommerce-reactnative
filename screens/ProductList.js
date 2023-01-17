import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import { getProducts } from "../services/ProductService";
import Product from "../components/Product";

function ProductList({ navigation }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(getProducts());
  }, []);
  return (
    <FlatList
      style={styles.productList}
      contentContainerStyle={styles.productsListContainer}
      data={products}
      renderItem={({ item }) => (
        <Product
          name={item.name}
          price={item.price}
          image={item.image}
          onPress={() => {
            navigation.navigate("ProductDetails", { productId: item.id });
          }}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  productsList: {
    backgroundColor: "#eeeeee",
  },
  productsListContainer: {
    backgroundColor: "#eeeeee",
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});

export default ProductList;
