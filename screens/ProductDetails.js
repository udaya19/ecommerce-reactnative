import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  Button,
} from "react-native";

function ProductDetails(props) {
  return (
    <View style={styles.container}>
      <Text>Product Details</Text>
    </View>
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
