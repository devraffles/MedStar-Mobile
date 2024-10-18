import { Text, View } from 'react-native';

import Button from '../../components/button'

import { styles } from './service.style';

export default function Service(props) {
    return (
        <View style={styles.service}>
            <View style={styles.containerText}>
                <Text style={styles.description}>
                    {props.description}
                </Text>
                <Text style={styles.price}>

                    {
                        new Intl.NumberFormat("pt-BR", {
                            style: "currency", 
                            currency: "BRL"
                        }).format(props.price)
                    }
                </Text>
            </View>
            <View style={styles.containerBtn}>
                <Button
                    text="Agendar"
                />
            </View>
        </View>
    );
}