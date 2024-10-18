import { View, Text } from 'react-native';
import { useState } from 'react';

import { styles } from './schedule.style';

import { Calendar, LocaleConfig } from 'react-native-calendars';
import { Picker } from '@react-native-picker/picker';
import Button from '../../components/button'

import { ptBR } from '../../constants/calendar'; 

export default function Schedule() {
    LocaleConfig.locales["pt-br"] = ptBR;
    LocaleConfig.defaultLocale = "pt-br";

    const [selectDate, setSelectDate] = useState(new Date().toISOString().slice(0, 10));
    const [selectHour, setSelectHour] = useState('');

    return (
        <View style={styles.container}>
            <View>
                <Calendar
                    theme={styles.theme}
                    onDayPress={(day) => {
                        setSelectDate(day.dateString)
                    }}
                    markedDates={{
                        [selectDate]: {selected: true}
                    }}
                    minDate={new Date().toDateString()}
                />

                <View>
                    <Text style={styles.text}>
                        Horário
                    </Text>

                    <Picker 
                        selectedValue={selectHour}
                        onValueChange={(itemValue, itemIndex) => setSelectHour(itemValue)}
                        style={styles.selectHour}
                    >
                        <Picker.Item
                            label='09:00'
                            value='09:00'
                        />
                        <Picker.Item
                            label='09:30'
                            value='09:30'
                        />
                        <Picker.Item
                            label='10:00'
                            value='10:00'
                        />
                        <Picker.Item
                            label='10:30'
                            value='10:30'
                        />
                    </Picker>
                </View>
            </View>

            <View>
                <Button
                    text="Confirmar Reserva"
                />
            </View>
        </View>
    );
}