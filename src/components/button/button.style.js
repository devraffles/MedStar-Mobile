import { colors, fontSizes } from "../../constants/theme.js";

export const styles = {

    btn: {
        width: "100%",
        borderRadius: 8,
        padding: 12
    },
    primary:{
        backgroundColor: colors.green,
    },
    danger:{
        backgroundColor: colors.red,
    },
    text: {
        color: colors.gray1,
        fontSize: fontSizes.md,
        textAlign: "center"
    },
    primaryText:{
        color: colors.gray1,
    },
    dangerText:{
        color: colors.white,
    },
}