import { FlatList, Text, View } from "react-native";

import { styles } from "./calendar.style.js";
import icon from "../../constants/icon.js";

import { appointments } from "../../constants/data.js";

import Appointments from "../../components/appointments/index.jsx";

export default function Calendar() {
    return(
        <View style={styles.container}>
            <FlatList
                data={appointments}
                keyExtractor={(appoint) => appoint.id_appointment}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    return <Appointments
                                service={item.service}
                                doctor={item.doctor}
                                specialty={item.specialty}
                                booking_date={item.booking_date}
                                booking_hour={item.booking_hour}
                            />
                }}
            />
        </View>
    );
}