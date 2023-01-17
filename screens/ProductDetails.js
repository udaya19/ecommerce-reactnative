import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  Button,
} from "react-native";

import { getProduct } from "../services/ProductService";

function ProductDetails({ route }) {
  const [product, setProduct] = useState({});
  const { productId } = route.params;
  useEffect(() => {
    setProduct(getProduct(productId));
  }, []);
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={product.image} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Button title="Add to Basket" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: "400",
    color: "#787878",
    marginBottom: 16,
  },
});

export default ProductDetails;
