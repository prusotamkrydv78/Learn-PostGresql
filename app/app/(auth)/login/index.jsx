import { View, TouchableOpacity, Image } from "react-native";
import React from "react";
import BaseText from "@/components/Text";
import Input from "@/components/Input";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

const Login = () => {
  const router = useRouter();

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
      {/* Header / Logo Area */}
      <View className="items-center mb-10">
        <View className="w-16 h-16 bg-purple-600 rounded-full justify-center items-center mb-4">
          <MaterialIcons name="movie" size={32} color="white" />
        </View>
        <BaseText className="text-3xl font-bold tracking-wider">
          CINE-TRACK
        </BaseText>
        <BaseText className="text-purple-400 mt-2 tracking-widest text-xs uppercase font-bold">
          Welcome Back, Director
        </BaseText>
      </View>

      {/* Form Card */}
      <View className="bg-[#121212] p-6 rounded-3xl border border-gray-900 shadow-lg">
        <Input icon="email" placeholder="Email Address" />
        <Input icon="lock" placeholder="Password" isPassword />

        <TouchableOpacity className="items-end mb-6">
          <BaseText className="text-gray-500 text-xs">
            Forgot Password?
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
              Sign In
            </BaseText>
            <MaterialIcons name="arrow-forward" size={20} color="white" />
          </LinearGradient>
        </TouchableOpacity>

        <View className="flex-row justify-center mt-2 gap-1">
          <BaseText className="text-gray-500 text-sm">
            Don't have an account?
          </BaseText>
          <TouchableOpacity
            className="ml-1"
            onPress={() => router.push("/(auth)/register")}
          >
            <BaseText className="text-purple-400 font-bold text-sm">
              Register Now
            </BaseText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
