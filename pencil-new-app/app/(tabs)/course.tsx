import { Text, View } from 'react-native';

import { AppScreen, HeaderBlock, Tag, WhiteCard, palette } from '@/components/huxuebao-ui';

function CourseCard({
  title,
  desc,
  tag,
  bordered,
}: {
  title: string;
  desc: string;
  tag?: string;
  bordered?: boolean;
}) {
  return (
    <WhiteCard bordered={bordered} style={{ padding: 16, gap: 8 }}>
      {tag ? <Tag text={tag} tone="peach" /> : null}
      <Text style={{ color: palette.text, fontSize: 18, fontWeight: '700', letterSpacing: -0.2 }}>
        {title}
      </Text>
      <Text style={{ color: palette.muted, fontSize: 12, fontWeight: '500' }}>{desc}</Text>
    </WhiteCard>
  );
}

export default function CourseScreen() {
  return (
    <AppScreen>
      <HeaderBlock title="ICU 专科课程" subtitle="按章节完成学习、练习和复盘" />

      <WhiteCard style={{ padding: 16, gap: 10 }}>
        <Text style={{ color: palette.green, fontSize: 12, fontWeight: '700' }}>当前进度 68%</Text>
        <View
          style={{
            height: 10,
            borderRadius: 999,
            backgroundColor: '#EDECEA',
            overflow: 'hidden',
          }}>
          <View
            style={{
              width: '68%',
              height: '100%',
              borderRadius: 999,
              backgroundColor: palette.green,
            }}
          />
        </View>
        <Text style={{ color: palette.muted, fontSize: 12, fontWeight: '500', lineHeight: 18 }}>
          已完成 17 / 25 节，建议今天完成 2 节并刷题 20 题
        </Text>
      </WhiteCard>

      <View style={{ gap: 12 }}>
        <CourseCard title="01 气道评估与基础处理" desc="视频 12 分钟 · 暂不支持下载 · 已完成" bordered />
        <CourseCard title="02 呼吸机报警分型" desc="图文 + 动画 · 当前学习到第 3 节" tag="本周重点" />
      </View>
    </AppScreen>
  );
}
