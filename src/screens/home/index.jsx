import { FlatList, Text, View } from "react-native";

import { styles } from "./home.style.js";
import icon from "../../constants/icon.js";

import { doctors } from "../../constants/data.js";

import Doctor from "../../components/doctor/index.jsx";

export default function Home() {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Agende os seus serviços médico</Text>

            <FlatList
                data={doctors}
                keyExtractor={(doc) => doc.id_doctor}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    return <Doctor 
                                name={item.name} 
                                icon={item.icon === 'M' ? icon.male : icon.female}
                                specialty={item.specialty}
                            />
                }}
            />
        </View>
    );
}