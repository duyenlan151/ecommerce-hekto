import { ReactNode } from 'react';
import { Tab } from './Tab';
import { Tabs } from './Tabs';

export interface Tab {
  value: string | number;
  component?: string;
  title: string;
}

export interface ITabsListProps {
  children?: ReactNode;
  activeTab: string | number;
  setActiveTab?: (value: string | number) => void;
  tabs: Tab[];
}

export function TabsList({ tabs, setActiveTab, activeTab }: ITabsListProps) {
  return (
    <Tabs activeTab={activeTab} setActiveTab={setActiveTab}>
      {tabs.map((tab) => (
        <Tab key={tab.value} currentTab={activeTab} component={tab.component}>
          {tab.title}
        </Tab>
      ))}
    </Tabs>
  );
}
