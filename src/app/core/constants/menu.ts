import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Dashboard',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'Dashboard',
          route: '/dashboard',
          children: [
            { label: 'Dashboard', route: '/dashboard' },
            { label: 'Apply for Tourist Guide', route: '/dashboard/tourist-guide/register' },
            { label: 'Apply for Hotel', route: '/dashboard/hotel/register' },
            { label: 'Apply for Resturant', route: '/dashboard/resturant/register' },
            { label: 'Apply for Travel Agency', route: '/travel-agency/register' },
            // { label: 'Apply for Travel Agenct', route: '/dashboard/nfts' },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/cog.svg',
          label: 'My Applications',
          route: '/dashboard/my-registrations',
          // children: [
          // { label: 'Sign up', route: '/auth/sign-up' },
          // { label: 'Sign in', route: '/auth/sign-in' },
          // { label: 'Change Password', route: '/auth/forgot-password' },
          // { label: 'New Password', route: '/auth/new-password' },
          // { label: 'Profile', route: '/dashboard/profiles' },
          // ],
        },
        {
          icon: 'assets/icons/heroicons/outline/cog.svg',
          label: 'Profile',
          route: '/auth',
          children: [
            // { label: 'Sign up', route: '/auth/sign-up' },
            // { label: 'Sign in', route: '/auth/sign-in' },
            { label: 'Change Password', route: '/auth/forgot-password' },
            // { label: 'New Password', route: '/auth/new-password' },
            { label: 'Profile', route: '/dashboard/profiles' },
          ],
        },
      ],
    },

    {
      group: 'Config',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/cog.svg',
          label: 'Settings',
          route: '/settings',
        },
        // {
        //   icon: 'assets/icons/heroicons/outline/bell.svg',
        //   label: 'Notifications',
        //   route: '/gift',
        // },
        {
          icon: 'assets/icons/heroicons/outline/folder.svg',
          label: 'Folders',
          route: '/folders',
          children: [
            { label: 'Current Files', route: '/folders/current-files' },
            { label: 'Downloads', route: '/folders/download' },
            { label: 'Trash', route: '/folders/trash' },
          ],
        },
      ],
    },
  ];

  public static DptControllerpages: MenuItem[] = [
    {
      group: 'Dashboard',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'Dashboard',
          route: '/dashboard',
          children: [
            { label: 'Dashboard', route: '/dashboard' },
            { label: ' User Application', route: '/dashboard/tourist-guide/register' },
            { label: 'Inspector Check', route: '/dashboard/hotel/register' },

            // { label: 'Apply for Travel Agenct', route: '/dashboard/nfts' },
          ],
        },
      ],
    },
  ];

  public static Controllerpages: MenuItem[] = [
    {
      group: 'Dashboard',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'Dashboard',
          route: '/controller-dashboard',
          children: [
            { label: 'Dashboard', route: '/controller-dashboard' },

            // { label: 'Apply for Travel Agenct', route: '/dashboard/nfts' },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'Applications',
          route: '',
          children: [
            { label: 'New Application', route: '/controller-dashboard/application-listing' },
            { label: 'Pending Applications', route: '/controller-dashboard/application-listing' },
            { label: 'Submitted Applications', route: '/controller-dashboard/application-listing' },
            // { label: 'Apply for Travel Agenct', route: '/dashboard/nfts' },
          ],
        },
      ],
    },
  ];
  public static InspectorControllerpages: MenuItem[] = [
    {
      group: 'Dashboard',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'Dashboard',
          route: '/inspector-dashboard',
          children: [
            { label: 'Dashboard', route: '/inspector-dashboard' },

            // { label: 'Apply for Travel Agenct', route: '/dashboard/nfts' },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'User Application',
          route: '/inspector-dashboard',
          children: [
            { label: 'User Application', route: '/inspector-dashboard/all-applications' },

            // { label: 'Apply for Travel Agenct', route: '/dashboard/nfts' },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'Application Submitted',
          route: '/inspector-dashboard',
          children: [
            { label: 'Application Submitted', route: '/inspector-dashboard/all-applications' },

            // { label: 'Apply for Travel Agenct', route: '/dashboard/nfts' },
          ],
        },
      ],
    },
  ];
}
