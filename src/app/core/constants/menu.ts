import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'User Dashboard',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'Dashboard',
          route: '/',
          children: [
            { label: 'Dashboard', route: '/layout' },
            { label: 'Apply for Tourist Guide', route: '/layout/tourist-guide/register' },
            { label: 'Apply for Hotel', route: '/layout/hotel/register' },
            { label: 'Apply for Resturant', route: '/layout/resturant/register' },
            { label: 'Apply for Travel Agency', route: '/layout/travel-agency/register' },
            // { label: 'Apply for Travel Agenct', route: '/dashboard/nfts' },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/cog.svg',
          label: 'My Applications',
          route: '/layout/my-registrations',
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
            // { label: 'Change Password', route: '/auth/forgot-password' },
            // { label: 'New Password', route: '/auth/new-password' },
            { label: 'Profile', route: '/layout/profile' },
          ],
        },
      ],
    },

    // {
    //   group: 'Config',
    //   separator: false,
    //   items: [
    //     {
    //       icon: 'assets/icons/heroicons/outline/cog.svg',
    //       label: 'Settings',
    //       route: '/settings',
    //     },
    // {
    //   icon: 'assets/icons/heroicons/outline/bell.svg',
    //   label: 'Notifications',
    //   route: '/gift',
    // },
    // {
    //   icon: 'assets/icons/heroicons/outline/folder.svg',
    //   label: 'Folders',
    //   route: '/folders',
    //   children: [
    //     { label: 'Current Files', route: '/folders/current-files' },
    //     { label: 'Downloads', route: '/folders/download' },
    //     { label: 'Trash', route: '/folders/trash' },
    //   ],
    // },
    //   ],
    // },
  ];

  public static DptControllerpages: MenuItem[] = [
    {
      group: 'D. Controller Dashboard',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'Dashboard',
          route: '/layout/dashboard',
          children: [
            { label: 'Dashboard', route: '/layout/dptcontroller-dashboard' },
            // { label: ' User Application', route: '/dashboard/tourist-guide/register' },
            // { label: 'Inspector Check', route: '/dashboard/hotel/register' },

            // { label: 'Apply for Travel Agenct', route: '/dashboard/nfts' },
          ],
        },
      ],
    },
  ];

  public static Controllerpages: MenuItem[] = [
    {
      group: 'Controller Dashboard',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'Dashboard',
          route: '/layout/controller-dashboard',
          children: [
            { label: 'Dashboard', route: '/layout/controller-dashboard' },

            // { label: 'Apply for Travel Agenct', route: '/dashboard/nfts' },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'Applications',
          route: '',
          children: [
            { label: 'New Application', route: '/layout/controller-dashboard/application-listing' },
            // { label: 'Pending Applications', route: '/layout/controller-dashboard/application-listing' },
            // { label: 'Submitted Applications', route: '/layout/controller-dashboard/application-listing' },
            // { label: 'Apply for Travel Agenct', route: '/dashboard/nfts' },
          ],
        },
      ],
    },
  ];
  public static InspectorControllerpages: MenuItem[] = [
    {
      group: 'Inspector Dashboard',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'Dashboard',
          route: '/layout/inspector-dashboard',
          children: [
            { label: 'Dashboard', route: '/layout/inspector-dashboard' },

            // { label: 'Apply for Travel Agenct', route: '/dashboard/nfts' },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'User Application',
          route: '/layout/inspector-dashboard',
          children: [
            { label: 'User Application', route: '/layout/inspector-dashboard/all-applications' },

            // { label: 'Apply for Travel Agenct', route: '/dashboard/nfts' },
          ],
        },
      ],
    },
  ];

  public static Reviewer: MenuItem[] = [
    {
      group: 'Reviewer Dashboard',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'User Dashboard',
          route: '/layout/reviewer-dashboard',
          children: [
            { label: 'Dashboard', route: '/layout/reviewer-dashboard' },

            // { label: 'Apply for Travel Agenct', route: '/dashboard/nfts' },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'Applications',
          route: '',
          children: [
            { label: 'Application', route: '/layout/reviewer-dashboard' },
            // { label: 'Apply for Travel Agenct', route: '/dashboard/nfts' },
          ],
        },
      ],
    },
  ];
  public static astDashboard: MenuItem[] = [
    {
      group: 'A. Controller Dashboard',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'A. Controller Dashboard',
          route: '/layout/astcontroller-dashboard',
          children: [{ label: 'Dashboard', route: '/layout/astcontroller-dashboard' }],
        },
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'Applications',
          route: '',
          children: [{ label: 'Application', route: '/layout/astcontroller-dashboard' }],
        },
      ],
    },
  ];
}
