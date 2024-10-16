import { colors, fontSizes } from "../../constants/theme.js";

export const styles = {
    container: {
        backgroundColor: colors.white,
        flex: 1,
        padding: 50,
        justifyContent: "space-between"
    },
    containerLogo: {
        alignItems: "center"
    },
    logo: {
        marginTop: 10,
        width: 151,
        height: 40
    },
    containerInput: {
        marginBottom: 15
    },
    input: {
        backgroundColor: colors.gray5,
        padding: 10,
        borderRadius: 8
    },
    footer: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "colum",
        gap: 14
    },
    footerLink: {
        color: colors.green,
        backgroundColor: colors.gray1,
        padding: 14,
        borderRadius: 8
    }

}