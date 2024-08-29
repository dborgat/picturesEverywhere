import { ColorScheme } from "@/constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', gap: 20 },
    text: { textAlign: 'center', color: ColorScheme.MODAL_BACKGROUND, fontSize: 20, fontWeight: 'bold' },
});

export default styles;