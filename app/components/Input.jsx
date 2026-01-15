import { View, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

const Input = ({
  icon,
  placeholder,
  value,
  onChangeText,
  isPassword = false,
  className,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View
      className={`flex-row items-center bg-[#1e1e1e] border border-gray-800 rounded-xl px-4 py-3 mb-4 space-x-3 ${className}`}
    >
      {icon && (
        <MaterialIcons
          name={icon}
          size={22}
          color="#888"
          style={{ marginRight: 10 }}
        />
      )}

      <TextInput
        className="flex-1 text-white text-base font-system"
        placeholder={placeholder}
        placeholderTextColor="#666"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isPassword && !showPassword}
      />

      {isPassword && (
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <MaterialIcons
            name={showPassword ? "visibility" : "visibility-off"}
            size={22}
            color="#888"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;
