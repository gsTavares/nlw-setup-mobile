import { View, Text, ScrollView } from "react-native";
import { Checkbox } from "./Checkbox";

interface ProgressBarProps {
    progress?: number
}

export function ProgressBar({ progress = 0 }) {
    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
            <View className="w-full h-3 rounded-xl bg-zinc-700 mt-4">
                <View className="h-3 rounded-xl bg-violet-600"
                    style={{ width: `${progress}%` }} />
            </View>

            <View className="mt-6" >
                <Checkbox title="Beber 2L de água" checked={false} />
                <Checkbox title="Caminhar" checked={true} />
            </View>
        </ScrollView>
    )
}