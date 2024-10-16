import { colors, fontSizes } from "../../constants/theme.js";

export const styles = {
    appointment:{
        flex: 1,
        backgroundColor: colors.gray1,
        padding: 10,
        borderWidth: 1,
        borderColor: colors.gray4,
        borderRadius: 8,
        marginBottom: 8
    },
    name:{
        fontSize: fontSizes.lg,
        color: colors.white,
        marginBottom: 2
    },
    specialty:{
        fontSize: fontSizes.sm,
        color: colors.gray3,
        marginBottom: 10
    },
    container:{
        flexDirection: 'row',
    },
    containerBooking:{
        flex: 1,
    },
    booking:{
        flexDirection: 'row',
        marginBottom: 5,
        marginTop: 5,
    },
    bookingText:{
        marginTop: 3,
        fontSize: fontSizes.md,
        color: colors.green,
    },
    icon:{
        width: 25,
        height: 25,
        marginRight: 8
    },
    containerBtn:{
        marginTop: 14,
    },
}