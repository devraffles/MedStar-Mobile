import { colors, fontSizes } from "../../constants/theme.js";

export const styles = {
    container: {
        backgroundColor: colors.gray1,
        flex: 1,
    },
    banner: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 25,
        paddingBottom: 25,
    },
    name: {
        fontSize: fontSizes.md,
        color: colors.gray1,
        fontWeight: 'bold',
        marginTop: 10
    },
    specialty: {
        fontSize: fontSizes.sm,
        color: colors.gray2,
        marginTop: 3
    },
}