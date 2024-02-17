// components/MenuGroup.tsx
import type { ReactNode } from 'react';

type MenuGroupProps = {
  title: string;
  children: ReactNode;
};

export const MenuGroup: React.FC<MenuGroupProps> = ({ title, children }) => {
  return (
    <div>
      <h3 className="mb-4 ml-4 text-sm font-medium text-bodydark2">{title}</h3>
      <ul className="mb-6 flex flex-col gap-1.5">{children}</ul>
    </div>
  );
};
