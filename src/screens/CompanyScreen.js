import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { FlatList } from "react-native-gesture-handler";
import { selectCompany, fetchCompanies } from "../slices/company";
import ListButton from "../components/searchbar/Option";
import MyOrders from "../screens/MyOrdersScreen";
//stylings
import { inputStyling, colors } from "../styles/styling";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons";

const Company = ({ navigation }) => {
  const dispatch = useDispatch();
  const company = useSelector((state) => state.company);
  const [companyInput, setCompanyInput] = useState("");

  useEffect(() => {
    dispatch(fetchCompanies());
  }, []);

  return (
    <LinearGradient
      style={styles.container}
      colors={[colors.elmos_light, colors.elmos_dark]}
    >
      <View style={inputStyling.container}>
        <TextInput
          placeholder="Enter company name..."
          style={inputStyling.input}
          placeholderTextColor={colors.elmos_light}
          onChangeText={(value) => {
            setCompanyInput(value);
          }}
        />
        <FontAwesome5
          name="search"
          size={24}
          color={colors.elmos_dark}
          style={inputStyling.icon}
        />
      </View>
      <View style={styles.suggestions}>
        <FlatList
          data={company.companies.filter((c) => {
            return c.title.includes(companyInput) || companyInput === "";
          })}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            const action = () => dispatch(selectCompany(item, navigation));
            return <ListButton func={action} item={item} />;
          }}
        ></FlatList>
      </View>
      <TouchableOpacity style={styles.btn} onPress={() => {
        navigation.navigate("Orders")
      }}>
        <Text style={styles.txt}>My orders</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "#FFF",
  },
  suggestions: {
    width: "80%",
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    marginTop: -12,
    backgroundColor: colors.gray,
  },
  myOrders: {
    width: "80%"
  },
  btn: {
    width: "80%",
    backgroundColor: colors.white,
    borderRadius: 15,
    height: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  txt: {
    color: colors.elmos_dark,
    fontSize: 16
  }
});

export default Company;
