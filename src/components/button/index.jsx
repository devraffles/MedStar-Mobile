import { Alert, Text, TouchableOpacity } from "react-native";
import { styles } from "./button.style.js";

function Button(props) {

    function TesteClick() {
        Alert.alert("Clicou no nosso botão");
    }

    return (
        <TouchableOpacity 
            onPress={TesteClick} 
            style={[styles.btn, props.tema === "danger" ? styles.danger : styles.primary]}
        >
            <Text style={[styles.text, props.tema === "danger" ? styles.dangerText : styles.primaryText]}>
                {props.text}
            </Text>
        </TouchableOpacity>
    );

}

export default Button;