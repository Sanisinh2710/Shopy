import { useEffect, useState } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Button, TextInput } from "react-native-paper";
import { RootState } from "../../redux-duck/store";
import {
  createProduct,
  editProduct,
} from "../../redux-duck/slices/productsSlice";
import { log } from "react-native-reanimated";

const EditProduct = (props: any) => {
  const id = props.route.params?.id;
  const dispatch = useDispatch();

  const [loading, setloading] = useState<boolean>(false);
  const [disabled, setdisabled] = useState<boolean>(true);

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

  useEffect(() => {
    if (title && imageUrl && price && description) {
      setdisabled(false);
    } else {
      setdisabled(true);
    }
  }, [title, imageUrl, price, description]);

  const submithandler = () => {
    if (disabled) {
      setloading(true);

      setTimeout(() => {
        if (!editedProduct) {
          console.log("hellasdjfghj");

          dispatch(createProduct({ title, imageUrl, price, description }));
          setloading(false);
        } else {
          dispatch(editProduct({ id, title, imageUrl, price, description }));
          setloading(false);
        }
      }, 1500);
    }
  };

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
            error={imageUrl ? false : true}
            style={styles.input}
            value={imageUrl}
            onChangeText={(text) => setImageUrl(text)}
          />
        </View>
        <View style={styles.formControl}>
          <TextInput
            error={price ? false : true}
            mode="outlined"
            style={styles.input}
            label="Price"
            keyboardType="number-pad"
            value={price}
            onChangeText={(text) => setPrice(text)}
          />
        </View>

        <View style={styles.formControl}>
          <TextInput
            label="Description"
            error={description ? false : true}
            mode="outlined"
            style={styles.input}
            value={description}
            onChangeText={(text) => setDescription(text)}
          />
        </View>
        <View>
          <Button
            mode="contained-tonal"
            loading={loading ? true : false}
            disabled={disabled}
            onPress={submithandler}
          >
            Save
          </Button>
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
