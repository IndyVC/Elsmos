import React, { useState, useEffect } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { FlatList } from "react-native-gesture-handler";
import { fetchCompany } from "../slices/company";
import ListButton from "../components/ListButton";
//stylings
import { inputStyling, colors } from "../styles/styling";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons";

const Company = ({ navigation }) => {
  const dispatch = useDispatch();
  const company = useSelector(state => state.company);
  const [companyInput, setCompanyInput] = useState("");
  const [companies, setCompanies] = useState(company.companies);

  useEffect(() => {
    setCompanies(company.companies.filter(c => c.includes(companyInput) || companyInput == ""));
  }, [companyInput]);

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
        <FontAwesome5 name="search" size={24} color={colors.elmos_dark} style={inputStyling.icon} />
      </View>
      <View style={styles.suggestions} >
        <FlatList data={companies} keyExtractor={item => item} renderItem={({ item }) => {
          const action = () => dispatch(fetchCompany(item, navigation));
          return <ListButton func={action} item={item} />
        }}>
        </FlatList>
      </View >
    </LinearGradient >
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
    backgroundColor: colors.gray
  }
});

export default Company;
