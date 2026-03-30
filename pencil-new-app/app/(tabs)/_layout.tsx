import { Ionicons } from '@expo/vector-icons';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Tabs } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { palette } from '@/components/huxuebao-ui';

function TabBarIcon({
  color,
  focused,
  label,
  icon,
}: {
  color: string;
  focused: boolean;
  label: string;
  icon: React.ComponentProps<typeof Ionicons>['name'];
}) {
  return (
    <View style={[styles.tabItem, focused && styles.tabItemActive]}>
      <Ionicons color={color} name={icon} size={16} />
      <Text style={[styles.tabLabel, { color }]}>{label}</Text>
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        sceneStyle: { backgroundColor: '#E9E6DF' },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '首页',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon color={color} focused={focused} icon={focused ? 'home' : 'home-outline'} label="首页" />
          ),
        }}
      />
      <Tabs.Screen
        name="course"
        options={{
          title: '学习',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              color={color}
              focused={focused}
              icon={focused ? 'book' : 'book-outline'}
              label="学习"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="practice"
        options={{
          title: '演练',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              color={color}
              focused={focused}
              icon={focused ? 'sparkles' : 'sparkles-outline'}
              label="演练"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="report"
        options={{
          title: '我的',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              color={color}
              focused={focused}
              icon={focused ? 'stats-chart' : 'stats-chart-outline'}
              label="我的"
            />
          ),
        }}
      />
    </Tabs>
  );
}

function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <View pointerEvents="box-none" style={styles.tabBarOuter}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          const { options } = descriptors[route.key];
          const label =
            typeof options.title === 'string' ? options.title : route.name;

          const iconMap: Record<string, React.ComponentProps<typeof Ionicons>['name']> = {
            index: isFocused ? 'home' : 'home-outline',
            course: isFocused ? 'book' : 'book-outline',
            practice: isFocused ? 'sparkles' : 'sparkles-outline',
            report: isFocused ? 'stats-chart' : 'stats-chart-outline',
          };

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <Pressable
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              onPress={onPress}
              style={styles.tabBarItem}>
              <TabBarIcon
                color={isFocused ? '#FFFFFF' : '#9C9B99'}
                focused={isFocused}
                icon={iconMap[route.name]}
                label={label}
              />
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBarOuter: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 21,
    alignItems: 'center',
    paddingHorizontal: 21,
  },
  tabBar: {
    width: '100%',
    maxWidth: 360,
    height: 62,
    borderRadius: 36,
    paddingHorizontal: 4,
    paddingTop: 4,
    paddingBottom: 4,
    backgroundColor: '#FFFFFF',
    shadowColor: '#1A1918',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
  },
  tabBarItem: {
    flex: 1,
    height: 54,
  },
  tabItem: {
    flex: 1,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
  },
  tabItemActive: {
    backgroundColor: palette.green,
  },
  tabLabel: {
    fontSize: 11,
    fontWeight: '600',
  },
});
