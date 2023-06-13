import { useState } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { Button, TextInput } from "react-native-paper";
import { RootState } from "../../redux-duck/store";

const EditProduct = (props: any) => {
  const id = props.route.params?.id;

  const editedProduct = useSelector((state: RootState) =>
    state.products.userProducts.find((product) => product.id === id)
  );

  const [title, setTitle] = useState(editedProduct ? editedProduct.title : "");
  const [imageUrl, setImageUrl] = useState(
    editedProduct ? editedProduct.imageUrl : ""
  );
  const [price, setPrice] = useState(
    editedProduct ? editedProduct.price.toString() : ""
  );
  const [description, setDescription] = useState(
    editedProduct ? editedProduct.description : ""
  );

  return (
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.formControl}>
          <TextInput
            error={title ? false : true}
            mode="outlined"
            style={styles.input}
            label="Title"
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
        </View>
        <View style={styles.formControl}>
          <TextInput
            mode="outlined"
            label="Image URL"
            style={styles.input}
            value={imageUrl}
            onChangeText={(text) => setImageUrl(text)}
          />
        </View>
        <View style={styles.formControl}>
          <TextInput
            mode="outlined"
            style={styles.input}
            label="Price"
            value={price}
            onChangeText={(text) => setPrice(text)}
          />
        </View>

        <View style={styles.formControl}>
          <TextInput
            label="Description"
            mode="outlined"
            style={styles.input}
            value={description}
            onChangeText={(text) => setDescription(text)}
          />
        </View>
        <View>
          <Button mode="contained-tonal">Save</Button>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 20,
  },
  formControl: {
    width: "100%",
  },

  input: {
    fontSize: 16,
    paddingHorizontal: 2,
    marginBottom: 20,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
});

export default EditProduct;
