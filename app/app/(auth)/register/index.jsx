import { View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import BaseText from "@/components/Text";
import Input from "@/components/Input";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

const Register = () => {
  const router = useRouter();
  const [agreed, setAgreed] = useState(false);

  return (
    <View className="flex-1 bg-[#0a0a0a] px-6 justify-center">
      <LinearGradient
        colors={["rgba(88, 28, 135, 0.4)", "transparent"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: "50%",
        }}
      />
      {/* Back Button */}
      <TouchableOpacity
        onPress={() => router.back()}
        className="absolute top-12 left-6 z-10 w-10 h-10 bg-gray-800 rounded-full justify-center items-center"
      >
        <MaterialIcons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      {/* Header / Logo Area */}
      <View className="items-center mb-8 mt-10">
        <View className="w-16 h-16 bg-purple-600 rounded-full justify-center items-center mb-4">
          <MaterialIcons name="movie" size={32} color="white" />
        </View>
        <BaseText className="text-3xl font-bold tracking-wider">
          Create Account
        </BaseText>
        <BaseText className="text-gray-400 mt-2 text-sm">
          Track your cinematic journey.
        </BaseText>
      </View>

      {/* Form Card */}
      <View className="bg-[#121212] p-6 rounded-3xl border border-gray-900 shadow-lg">
        <Input icon="person" placeholder="Full Name" />
        <Input icon="email" placeholder="Email Address" />
        <Input icon="lock" placeholder="Password" isPassword />

        <TouchableOpacity
          className="flex-row items-center mb-6"
          onPress={() => setAgreed(!agreed)}
        >
          <MaterialIcons
            name={agreed ? "check-circle" : "radio-button-unchecked"}
            size={24}
            color={agreed ? "#9333ea" : "#666"}
          />
          <BaseText className="text-gray-400 text-xs ml-2">
            I agree to the{" "}
            <BaseText className="text-purple-400 font-bold">Terms</BaseText> and{" "}
            <BaseText className="text-purple-400 font-bold">
              Privacy Policy
            </BaseText>
          </BaseText>
        </TouchableOpacity>

        <TouchableOpacity
          className="w-full"
          onPress={() => router.replace("/(app)")}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={["#9333ea", "#7e22ce"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            className="flex-row justify-center items-center py-4 rounded-xl mb-6 shadow-lg shadow-purple-500/30"
          >
            <BaseText className="font-bold text-lg mr-2 uppercase">
              Create Account
            </BaseText>
          </LinearGradient>
        </TouchableOpacity>

        <View className="flex-row justify-center mt-2">
          <BaseText className="text-gray-500 text-sm">
            Already a member?{" "}
          </BaseText>
          <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
            <BaseText className="text-purple-400 font-bold text-sm">
              Sign In
            </BaseText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Register;
