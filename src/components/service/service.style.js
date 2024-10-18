import { colors, fontSizes } from "../../constants/theme.js";

export const styles = {
    service: {
        backgroundColor: colors.gray1,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 14,
    },
    containerText:{
        
    },
    description: {
        fontSize: fontSizes.md,
        color: colors.gray4,
    },
    price: {
        fontSize: fontSizes.sm,
        color: colors.green,
        fontWeight: 'bold',
        marginTop: 3,
    }
}