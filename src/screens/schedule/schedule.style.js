import { colors, fontSizes } from "../../constants/theme.js";

export const styles = {
    container: {
        backgroundColor: colors.gray1,
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 50,
        paddingBottom: 40,
        justifyContent: 'space-between'
    },
    text: {
        color: colors.green,
        fontSize: fontSizes.lg,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20,
    },
    theme:{
        backgroundColor: colors.green,
        calendarBackground: colors.gray1,
        textSectionTitleColor: colors.green,
        selectedDayBackgroundColor: colors.green,
        selectedDayTextColor: colors.gray1,
        todayTextColor: colors.green,
        dayTextColor: colors.gray4,
        textDisabledColor: colors.gray2,
        arrowColor: colors.green,
        monthTextColor: colors.green
    },
    selectHour:{
        backgroundColor: colors.green,
        color: colors.gray1,
    }
}