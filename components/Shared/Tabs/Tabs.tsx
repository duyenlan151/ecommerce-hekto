import { ReactNode } from 'react';
import { Tab } from './Tab';

export interface TabProps {
  children?: ReactNode;
  activeTab: string | number;
  setActiveTab?: (value: string | number) => void;
}

// const findActiveTab = (a) => {
//   return a.reduce((accumulator, currentValue, i) => {
//     if (currentValue.props.active) {
//       return currentValue.key;
//     }

//     return currentValue.key;
//   }, 0);
// };

export function Tabs({ children, activeTab, setActiveTab }) {
  const tabValidator = (tab) => {
    return tab.type.name === 'Tab' ? true : false;
  };

  return (
    <>
      <div className="flex border border-grey-3 !border-y-0 border-r-0">
        {children.map((item, i) => {
          return (
            <div key={`tab-${i}`}>
              {/* {tabValidator(item) && ( */}
              <Tab
                key={`tab-${i}`}
                currentTab={item.key}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              >
                {item.props.children}
              </Tab>
              {/* )} */}
            </div>
          );
        })}
      </div>
      {children && (
        <div className="">
          {children.map((item, i) => {
            return <div key={`tab-${i}`}>{item.props.component}</div>;
          })}
        </div>
      )}
    </>
  );
}
