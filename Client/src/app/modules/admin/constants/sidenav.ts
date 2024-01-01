export interface SubMenu {
    icon: string;
    name: string;
    url?: string;
    children?: SubMenu[];
  }

export const SIDENAV_DATA: SubMenu[] = [
    {
      icon: 'dashboard',
      name: 'Dashboard',
      url: '/admin/dashboard'
    },
    {
      icon: 'category',
      name: 'Products',
      children: [
        {
          icon: 'radio_button_checked',
          name: 'List Products'
        }, 
        {
          icon: 'radio_button_checked',
          name: 'Add New'
        }
      ],
    },
    {
      icon: 'group',
      name: 'Customers',
      children: [
        {
          icon: 'radio_button_checked',
          name: 'List Customers',
          url: 'customer/list'
        }, 
        {
          icon: 'radio_button_checked',
          name: 'Add New'
        }],
    },
  ];