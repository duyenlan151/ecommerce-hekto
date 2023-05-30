import { useMemo } from 'react';
import { colorText, TabProps } from './Tab.props';

export function Tab({ children, activeTab, currentTab, setActiveTab }: TabProps) {
  const className = useMemo(
    () =>
      `font-lato border border-l-0 border-color-border leading-5 text-sm py-2 px-3 cursor-pointer transition ease-in-out duration-200 ${
        colorText[String(activeTab === currentTab)]
      }`,
    [activeTab]
  );

  return (
    <div className={className} onClick={() => setActiveTab && setActiveTab(currentTab)}>
      {children}
    </div>
  );
}
