import { Feather } from '@expo/vector-icons';
import { Text, View } from 'react-native';

import {
  AppScreen,
  HeaderBlock,
  IconCircle,
  PrimaryButton,
  RowMeta,
  SectionTitle,
  Tag,
  WhiteCard,
  palette,
} from '@/components/huxuebao-ui';

export default function HomeScreen() {
  return (
    <AppScreen>
      <HeaderBlock
        title="早安，林护士"
        subtitle="今天建议先复习气道备置，进度已完成 68%"
        right={
          <IconCircle>
            <Feather color={palette.text} name="bell" size={18} />
          </IconCircle>
        }
      />

      <View
        style={{
          borderRadius: 20,
          padding: 20,
          gap: 14,
          backgroundColor: palette.green,
        }}>
        <Tag text="今日学习主线" tone="light" />
        <Text style={{ color: '#FFFFFF', fontSize: 22, fontWeight: '700', letterSpacing: -0.3 }}>
          高危呼吸机报警处理
        </Text>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          <View
            style={{
              borderRadius: 999,
              backgroundColor: '#FFFFFF22',
              paddingHorizontal: 10,
              paddingVertical: 6,
            }}>
            <Text style={{ color: '#F3FBF6', fontSize: 12, fontWeight: '600' }}>15分钟精练</Text>
          </View>
          <View
            style={{
              borderRadius: 999,
              backgroundColor: '#FFFFFF22',
              paddingHorizontal: 10,
              paddingVertical: 6,
            }}>
            <Text style={{ color: '#F3FBF6', fontSize: 12, fontWeight: '600' }}>已解锁演练 6 轮</Text>
          </View>
        </View>
      </View>

      <View style={{ flexDirection: 'row', gap: 12 }}>
        <WhiteCard style={{ flex: 1, padding: 16, gap: 6 }}>
          <Text style={{ color: palette.muted, fontSize: 12, fontWeight: '500' }}>连续打卡</Text>
          <Text style={{ color: palette.text, fontSize: 32, fontWeight: '700' }}>21天</Text>
        </WhiteCard>
        <WhiteCard style={{ flex: 1, padding: 16, gap: 6 }}>
          <Text style={{ color: palette.muted, fontSize: 12, fontWeight: '500' }}>今日任务</Text>
          <Text style={{ color: palette.text, fontSize: 32, fontWeight: '700' }}>3项</Text>
        </WhiteCard>
      </View>

      <SectionTitle title="今日推荐" action="查看全部" />

      <WhiteCard style={{ padding: 18, gap: 12 }}>
        <Tag text="AI 演练优先" tone="green" />
        <Text style={{ color: palette.text, fontSize: 18, fontWeight: '700', letterSpacing: -0.2 }}>
          过敏性休克处理复盘
        </Text>
        <Text
          style={{
            color: palette.muted,
            fontSize: 13,
            lineHeight: 18,
          }}>
          从病情判断到沟通顺序，全流程 8 分钟，适合交班前完成。
        </Text>
        <RowMeta
          left="当前正确率 72%"
          right={<PrimaryButton text="立即开始" />}
        />
      </WhiteCard>
    </AppScreen>
  );
}
