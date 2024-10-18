import { colors, fontSizes } from "../../constants/theme.js";

export const styles = {
    container: {
        backgroundColor: colors.white,
        flex: 1,
    },
    title: {
        fontSize: fontSizes.sm,
        color: colors.gray3,
    },
    text: {
        fontSize: fontSizes.md,
        color: colors.gray1,
        marginTop: 10,
        marginLeft: 15,
    },
    item: {
        borderWidth: 1,
        borderColor: colors.gray4,
        padding: 15
    }
}