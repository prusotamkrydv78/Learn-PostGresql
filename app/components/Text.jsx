import { Text, StyleSheet } from "react-native";

const BaseText = ({ className, children, ...props }) => {
  return (
    <Text
      className={`text-base text-white font-system ${className}`}
      style={[styles.text, props.style]}
      {...props}
    >
      {children}
    </Text>
  );
};
export default BaseText;
const styles = StyleSheet.create({
  text: { 
    color: "white",
    fontFamily: "System",
  },
});
