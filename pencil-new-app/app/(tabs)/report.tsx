import { Text, View } from 'react-native';

import { AppScreen, HeaderBlock, WhiteCard, palette } from '@/components/huxuebao-ui';

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <WhiteCard style={{ flex: 1, padding: 16, gap: 6 }}>
      <Text style={{ color: palette.muted, fontSize: 12, fontWeight: '500' }}>{label}</Text>
      <Text style={{ color: palette.text, fontSize: 28, fontWeight: '700' }}>{value}</Text>
    </WhiteCard>
  );
}

export default function ReportScreen() {
  return (
    <AppScreen>
      <HeaderBlock title="学习报告" />

      <View
        style={{
          borderRadius: 20,
          padding: 20,
          gap: 10,
          backgroundColor: palette.green,
        }}>
        <Text style={{ color: '#EAF7EE', fontSize: 12, fontWeight: '700' }}>本周综合评分</Text>
        <Text style={{ color: '#FFFFFF', fontSize: 40, fontWeight: '700', letterSpacing: -1 }}>89 分</Text>
        <Text style={{ color: '#F3FBF6', fontSize: 13, fontWeight: '500', lineHeight: 18 }}>
          超过同阶段 81% 学员，AI 演练得分提升 9 分
        </Text>
      </View>

      <View style={{ flexDirection: 'row', gap: 12 }}>
        <MetricCard label="学习时长" value="6.5 h" />
        <MetricCard label="正确率" value="84%" />
      </View>

      <WhiteCard style={{ padding: 18, gap: 10 }}>
        <Text style={{ color: palette.text, fontSize: 16, fontWeight: '700' }}>系统建议</Text>
        <Text style={{ color: palette.muted, fontSize: 13, lineHeight: 18 }}>
          优先补强呼吸循环判断和沟通顺序，建议明天先完成 1 次 AI 演练，再刷 20 题专项练习。
        </Text>
      </WhiteCard>
    </AppScreen>
  );
}
