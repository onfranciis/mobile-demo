import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

const Countdown = () => {
  const [countdown, setCountdown] = useState(60);
  useEffect(() => {
    setCountdown(countdown - 1);
  }, [true]);

  useEffect(() => {
    setCountdown(countdown - 1);
  }, []);

  return (
    <View>
      <Text>{countdown}</Text>
    </View>
  );
};

export default Countdown;

const styles = StyleSheet.create({});
