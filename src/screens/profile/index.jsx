import { Text, View } from 'react-native';

import { styles } from './profile.style';

export default function Profile() {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.title}>
                    Nome:
                </Text>
                <Text style={styles.text}>
                    Rafael dos Santos Giorgi
                </Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.title}>
                    Email:
                </Text>
                <Text style={styles.text}>
                    devraffles@gmail.com
                </Text>
            </View>
        </View>
    );
}