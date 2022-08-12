import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import Emoji from "../../assets/Images/AvatarHeadMale.png";
import { Colors } from "../../Config";

const ButtonEmoji = (props) => {
  //   const [selected, setSelected] = useState(false);

  const press = () => {
    props.setSelected(props.Text);
  };

  return (
    <Pressable onPress={() => press()}>
      <View
        style={[
          styles.container,
          props.Selected == props.Text ? styles.containerSelect : "",
        ]}
      >
        <Image source={props.Image} style={styles.image} resizeMode="contain" />
        <Text style={styles.text}>{props.Text}</Text>
      </View>
    </Pressable>
  );
};

export default ButtonEmoji;

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 150,
    borderStyle: "solid",
    borderColor: Colors.Gray[200],
    borderWidth: 2,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 22,
    margin: 5,
  },
  containerSelect: {
    borderColor: Colors.Success,
  },
  image: {
    height: 60,
    width: 60,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 5,
  },
});
