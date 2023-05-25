export interface ISidebar {
  isNonMobile: boolean;
  drawerWidth: string;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}
