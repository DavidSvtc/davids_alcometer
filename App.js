import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  ScrollView,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import NumericInput from "react-native-numeric-input";
import Styles, { MyDarkTheme, MyLightTheme } from "./styles/Styles";
import {
  Button,
  Headline,
  RadioButton,
  Switch,
  Text,
  TextInput,
} from "react-native-paper";
import { useFonts } from "expo-font";

export default function App() {
  //DarkMode or WhiteMode
  const [isDarkMode, setIsDarkMode] = useState(false);
  const myStyle = isDarkMode ? MyDarkTheme : MyLightTheme;

  //Consts for calculation and error handling
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState(0);
  const [error, setError] = useState(false);

  //Calculation Formula
  const calculate = () => {
    //Error Alert
    if (!weight) {
      setError(true);
      Alert.alert("Error", "Please enter weight");
      return;
    } else {
      setError(false);
    }

    //Error Infinity solved
    if (weight < 40) {
      setError(true);
      Alert.alert("Error", "Weight under 40kg is not possible");
      return;
    } else {
      setError(false);
    }

    //Calculation
    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = grams - burning * time;
    let result = 0;
    if (gender === "male") {
      result = gramsLeft / (weight * 0.7);
    } else {
      result = gramsLeft / (weight * 0.6);
    }
    if (result < 0) {
      result = 0;
    } else {
      setResult(result);
    }
  };

  //Showing result using a color
  const resultStyle = {
    color: result < 0.5 ? "green" : result < 1 ? "orange" : "red",
    fontSize: 30,
    padding: 10,
    textAlign: "center",
  };

  //fonts
  const [loaded] = useFonts({
    AntonRegular: require("./fonts/Anton-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <ScrollView style={myStyle.container}>
      <Switch
        style={myStyle.switch}
        value={isDarkMode}
        onValueChange={() => setIsDarkMode(!isDarkMode)}
        thumbColor="black"
        trackColor={{ false: "#579BB1", true: "#ECB365" }}
      />
      <Text style={myStyle.headline}> My Alcometer 🍺 </Text>

      <Text style={myStyle.smallheadline}>Weight</Text>
      <TextInput
        style={myStyle.input}
        label="Your Weight"
        keyboardType="number-pad"
        mode="flat"
        onChangeText={(w) => setWeight(w)}
      />

      <Text style={myStyle.smallheadline}>Bottles</Text>
      <NumericInput
        style={myStyle.numInp}
        value={bottles}
        onChange={(b) => setBottles(b)}
        step={1}
        minValue={1}
        maxValue={20}
        type="plus-minus"
        rounded
        editable={false}
        textColor={"#ffffff"}
        leftButtonBackgroundColor={myStyle.numInp.buttoncolor}
        rightButtonBackgroundColor={myStyle.numInp.buttoncolor}
        borderColor={myStyle.numInp.buttoncolor}
      />

      <Text style={myStyle.smallheadline}>Hours</Text>
      <NumericInput
        style={myStyle.numInp}
        value={time}
        onChange={(h) => setTime(h)}
        step={1}
        minValue={0}
        maxValue={48}
        editable={false}
        type="plus-minus"
        rounded
        textColor={"#ffffff"}
        leftButtonBackgroundColor={myStyle.numInp.buttoncolor}
        rightButtonBackgroundColor={myStyle.numInp.buttoncolor}
        borderColor={myStyle.numInp.buttoncolor}
      />

      <Text style={myStyle.smallheadline}>Your Gender: </Text>
      <RadioButton.Group
        onValueChange={(newGender) => setGender(newGender)}
        value={gender}
      >
        
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <RadioButton value="male" color={myStyle.button.backgroundColor} />
          <Text style={myStyle.rbtext}> Male </Text>
          <RadioButton value="female" color={myStyle.button.backgroundColor} />
          <Text style={myStyle.rbtext}> Female </Text>
        </View>
      </RadioButton.Group>

      <Text style={resultStyle}> {result.toFixed(2)}</Text>
      <TouchableOpacity onPress={calculate}>
        <Button
          style={myStyle.button}
          mode="contained"
          textColor={myStyle.button.textColor}
        >
          Calculate!
        </Button>
      </TouchableOpacity>
    </ScrollView>
  );
}
