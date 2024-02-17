// components/DropdownMenu.tsx
import type { ReactNode } from 'react';

type DropdownMenuProps = {
  children: ReactNode; // Dropdown items
};

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ children }) => {
  return (
    <div className="translate transform overflow-hidden hiddenx">
      <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">{children}</ul>
    </div>
  );
};
