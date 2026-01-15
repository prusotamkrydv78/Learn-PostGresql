import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import React from "react";
import BaseText from "@/components/Text";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

const index = () => {
  const router = useRouter();
  return (
    <View className="flex-1 bg-[#0a0a0a]">
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

      <View className="flex-1 justify-between items-center px-6">
        <View className="h-1/2 justify-end items-center">
          <View className="items-center">
            <View className="w-20 h-20 bg-purple-600 rounded-2xl justify-center items-center mb-6 shadow-lg shadow-purple-500/50">
              <MaterialIcons name="movie-filter" size={40} color="white" />
            </View>
            <BaseText className="text-5xl font-bold uppercase tracking-widest text-[#ffffff]">
              cineverse
            </BaseText>
            <BaseText className="text-gray-400 tracking-[0.5em] text-xs mt-2 uppercase">
              The Cinematic Universe
            </BaseText>
          </View>

          <View className="flex-row mt-12 gap-x-2">
            {["track", "watch", "discover"].map((item, index) => (
              <View key={item} className="flex-row items-center">
                <Text className="text-lg font-bold uppercase text-purple-400 tracking-wider">
                  {item}
                </Text>
                {index !== 2 && (
                  <View className="w-1.5 h-1.5 rounded-full bg-gray-600 mx-2" />
                )}
              </View>
            ))}
          </View>
        </View>

        <View className="w-full pb-12 gap-y-4">
          <TouchableOpacity
            onPress={() => router.push("/(auth)/register")}
            className="w-full rounded-full"
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={["#9333ea", "#7e22ce"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{ borderRadius: 12 }}
              className="flex-row justify-center items-center py-4  shadow-lg shadow-purple-500/30 rounded-full"
            >
              <Text className="text-white font-bold text-lg uppercase tracking-wider mr-2">
                Get Started
              </Text>
              <MaterialIcons name="arrow-forward" size={24} color="white" />
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/(auth)/login")}
            className="w-full flex-row justify-center items-center py-4 rounded-2xl border border-gray-800 bg-[#ffffff05]"
            activeOpacity={0.8}
          >
            <Text className="text-white font-bold text-lg uppercase tracking-wider">
              Login
            </Text>
          </TouchableOpacity>

          <View className="mt-4">
            <Text className="text-gray-500 text-center text-xs leading-5">
              By continuing, you agree to our{"\n"}
              <Text className="text-purple-400 font-bold">
                Terms of Service
              </Text>{" "}
              and{" "}
              <Text className="text-purple-400 font-bold">Privacy Policy</Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
