import { colors, fontSizes } from "../../constants/theme.js";

export const styles = {
    doctor: {
        flex: 1,
        backgroundColor: colors.gray1,
        padding: 8,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: colors.white,
        marginTop: 3,
        marginBottom: 3,
        borderRadius: 8
    },
    icon: {
        width: 50,
        height: 50,
        marginRight: 8,
    },
    name: {
        fontSize: fontSizes.md,
        color: colors.green,
        marginTop: 3,
    },
    specialty: {
        fontSize: fontSizes.sm,
        color: colors.gray3,
        marginTop: 3,
    },
}