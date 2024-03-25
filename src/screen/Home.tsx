import { StatusBar } from "expo-status-bar";
import { View,Text } from "react-native";
import styles from "./Style";
import { BatLogo } from "../components/BatLogo/BatLogo";
import { BatButtonSignal } from "../components/BatButtonSignal/BatButtonSignal";

export default function Home(){
    return (
        <View style={styles.appContainer}>
            <View style={styles.logoContainer}>
                <BatLogo/>
            </View>
            <View>
                <BatButtonSignal/>
            </View>

            <StatusBar style="auto"></StatusBar>
        </View>
    )
}