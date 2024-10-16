import { Image, TouchableOpacity, Text, View } from 'react-native';

import { styles } from './appointments.style';
import icon from '../../constants/icon';

import Button from '../button';

export default function Appointments(props) {
    return (
        <View style={styles.appointment}>
            <Text style={styles.name}>
                {props.service} - {props.doctor}
            </Text>
            <Text style={styles.specialty}>
                {props.specialty}
            </Text>

            <View style={styles.container}>
                <View style={styles.containerBooking}>
                    <View style={styles.booking}> 
                        <Image
                            style={styles.icon}
                            source={icon.calendar}
                        />
                        <Text style={styles.bookingText}>
                            {props.booking_date}
                        </Text>
                    </View>
                    <View style={styles.booking}>
                        <Image
                            style={styles.icon}
                            source={icon.clock}
                        />
                        <Text style={styles.bookingText}>
                            {props.booking_hour}
                        </Text>
                    </View>
                </View>
                <View style={styles.containerBtn}>
                    <Button
                        text="Cancelar Reserva"
                        tema="danger"
                    />
                </View>
            </View>
        </View>
    );
}