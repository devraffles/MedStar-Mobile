import { FlatList, Text, View, Image } from "react-native";

import { styles } from "./services.style.js";
import icon from "../../constants/icon.js";

import Service from "../../components/service";

import { doctors_services } from "../../constants/data.js";
import { doctors } from "../../constants/data.js";

export default function Services() {
    return(
        <View style={styles.container}>

            <View style={styles.banner}>
                <Image
                    source={icon.female}
                />

                <Text style={styles.name}>{doctors[0].name}</Text>
                <Text style={styles.specialty}>{doctors[0].specialty}</Text>
            </View>


            <FlatList
                data={doctors_services}
                keyExtractor={(serv) => serv.id_service}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    return <Service
                                description={item.description}
                                price={item.price}
                           />
                }}
            />
        </View>
    );
}