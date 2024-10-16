import { Image, TouchableOpacity, Text, View } from 'react-native';

import { styles } from './doctor.style';

export default function Doctor(props) {
    return (
    <TouchableOpacity style={styles.doctor}>
        <Image
            style={styles.icon}
            source={props.icon}
        />

        <View>
            <Text style={styles.name}>
                {props.name}
            </Text>
            <Text style={styles.specialty}>
                {props.specialty}
            </Text>
        </View>
    </TouchableOpacity>
    );
}