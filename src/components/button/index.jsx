import { Text, TouchableOpacity } from "react-native";

import { Link } from "expo-router";

import { styles } from "./button.style.js";

function Button(props) {

    return (
        <TouchableOpacity 
            style={[styles.btn, props.tema === "danger" ? styles.danger : styles.primary]}
        >
            <Text style={[styles.text, props.tema === "danger" ? styles.dangerText : styles.primaryText]}>
                {props.text}
            </Text>
        </TouchableOpacity>
    );

}

export default Button;