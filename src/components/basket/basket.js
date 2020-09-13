import React, { useEffect, useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  Animated,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../styles/styling";
import { useDispatch, useSelector } from "react-redux";
import GestureRecognizer from "react-native-swipe-gestures";
import Order from "./Order";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { FontAwesome5 } from "@expo/vector-icons";
import { confirmOrder } from "../../slices/order";
const Basket = () => {
  //---Animation---
  const basketAnimationState = useRef(new Animated.Value(0)).current;

  openBasket = () => {
    Animated.timing(basketAnimationState, {
      toValue: open ? -400 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  //--------------
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order);
  const category = useSelector((state) => state.category);
  const company = useSelector((state) => state.company);
  const [open, setOpen] = useState(false);

  const calculateTotal = () => {
    let total = 0;
    order.products?.forEach((p) => {
      total += Number(p.price);
      p?.extras?.forEach((e) => {
        total += Number(e.price);
      });
    });
    return total;
  };

  useEffect(() => {
    if (open) openBasket();
    else openBasket();
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [category.selectedCategory]);

  return (
    <Animated.View
      style={[
        styles.basket,
        {
          transform: [{ translateY: basketAnimationState }],
        },
      ]}
    >
      <GestureRecognizer
        onSwipeUp={() => setOpen(true)}
        onSwipeDown={() => setOpen(false)}
      >
        <TouchableWithoutFeedback onPress={() => setOpen(!open)}>
          <Text style={styles.basketText}>
            Total:{" € "}
            {calculateTotal().toFixed(2)}
          </Text>
        </TouchableWithoutFeedback>
      </GestureRecognizer>

      <FlatList
        style={styles.orders}
        data={order.products}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return <Order order={item} />;
        }}
      />
      <TouchableOpacity
        style={styles.confirmBtn}
        onPress={() =>
          dispatch(confirmOrder(order.products, company.selectedCompany.id))
        }
      >
        <Text style={styles.confirm}>Confirm order</Text>
        <FontAwesome5 name="shopping-basket" color="white" size={18} />
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  basket: {
    width: "96%",
    backgroundColor: "black",
    paddingVertical: 15,
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    marginHorizontal: "2%",
    top: "90%",
    position: "absolute",
    height: "80%",
  },
  basketText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 30,
  },
  orders: {
    height: 350,
  },
  confirmBtn: {
    height: 40,
    borderColor: colors.darkGray,
    borderTopWidth: 1,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  confirm: {
    color: colors.white,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 16,
    paddingRight: 25,
    fontWeight: "bold",
  },
});

export default Basket;
