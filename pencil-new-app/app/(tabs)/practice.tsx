import { Feather } from '@expo/vector-icons';
import { Text, View } from 'react-native';

import { AppScreen, HeaderBlock, PrimaryButton, Tag, WhiteCard, palette } from '@/components/huxuebao-ui';

export default function PracticeScreen() {
  return (
    <AppScreen>
      <HeaderBlock title="AI 情景演练" />

      <View
        style={{
          borderRadius: 20,
          padding: 18,
          gap: 10,
          backgroundColor: '#F7ECE5',
        }}>
        <Tag text="场景 02 · 急诊" tone="peach" />
        <Text style={{ color: palette.text, fontSize: 18, fontWeight: '700', letterSpacing: -0.2 }}>
          患者女性，56 岁，突发皮疹、气促、血压下降。
        </Text>
        <Text style={{ color: palette.muted, fontSize: 13, fontWeight: '500' }}>
          请先完成首轮评估，再决定下一步处置。
        </Text>
      </View>

      <View style={{ gap: 12 }}>
        <WhiteCard style={{ padding: 16, gap: 8 }}>
          <Text style={{ color: palette.green, fontSize: 12, fontWeight: '700' }}>AI 考官</Text>
          <Text style={{ color: palette.text, fontSize: 14, fontWeight: '600', lineHeight: 22 }}>
            患者主诉胸闷、喉头紧缩。你第一步准备做什么？
          </Text>
        </WhiteCard>

        <View
          style={{
            borderRadius: 16,
            padding: 16,
            gap: 8,
            backgroundColor: palette.greenTint,
          }}>
          <Text style={{ color: '#5C946F', fontSize: 12, fontWeight: '700' }}>我的回答</Text>
          <Text style={{ color: palette.text, fontSize: 14, fontWeight: '600', lineHeight: 22 }}>
            先判断气道和呼吸循环状态，同时呼叫医生并准备吸氧。
          </Text>
        </View>
      </View>

      <View
        style={{
          borderRadius: 14,
          borderWidth: 1,
          borderColor: palette.line,
          paddingHorizontal: 16,
          paddingVertical: 14,
          backgroundColor: '#FFFFFF',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{ color: palette.text, fontSize: 14, fontWeight: '500' }}>继续输入处置步骤</Text>
        <Feather color="#9C9B99" name="chevron-right" size={16} />
      </View>

      <PrimaryButton text="提交本轮回答" />
    </AppScreen>
  );
}
