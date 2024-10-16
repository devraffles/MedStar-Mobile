import { setStatusBarBackgroundColor } from "expo-status-bar";
import { colors, fontSizes } from "../../constants/theme.js";

export const styles = {
    doctor: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 8,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: colors.gray4,
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
        color: colors.gray1,
        marginTop: 3,
    },
    specialty: {
        fontSize: fontSizes.sm,
        color: colors.gray3,
        marginTop: 3,
    },
}