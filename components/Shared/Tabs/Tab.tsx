import { useMemo } from 'react';
import { colorText, TabProps } from './Tab.props';

export function Tab({ children, activeTab, currentTab, setActiveTab }: TabProps) {
  const className = useMemo(
    () =>
      `font-lato leading-5 text-lg mx-5 cursor-pointer transition ease-in-out duration-200 ${
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
