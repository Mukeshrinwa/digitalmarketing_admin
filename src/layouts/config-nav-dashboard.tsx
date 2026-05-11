import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';
import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor src={`${CONFIG.site.basePath}/assets/icons/navbar/${name}.svg`} />
);

const ICONS = {
  job: icon('ic-job'),
  blog: icon('ic-blog'),
  chat: icon('ic-chat'),
  mail: icon('ic-mail'),
  user: icon('ic-user'),
  file: icon('ic-file'),
  lock: icon('ic-lock'),
  tour: icon('ic-tour'),
  order: icon('ic-order'),
  label: icon('ic-label'),
  blank: icon('ic-blank'),
  export const navData = [
    {
      subheader: 'Admin',
      items: [
        { title: 'Dashboard', path: paths.dashboard.root, icon: ICONS.dashboard },
        { title: 'CMS', path: paths.dashboard.cms.root, icon: ICONS.file },
        { title: 'Services', path: paths.dashboard.services.root, icon: ICONS.label },
        { title: 'Blogs', path: paths.dashboard.blogs.root, icon: ICONS.blog },
        { title: 'Team', path: paths.dashboard.team.root, icon: ICONS.user },
        { title: 'Portfolio', path: paths.dashboard.portfolio.root, icon: ICONS.folder },
        { title: 'Testimonials', path: paths.dashboard.testimonials.root, icon: ICONS.blog },
        { title: 'Gallery', path: paths.dashboard.gallery.root, icon: ICONS.gallery || ICONS.file },
        { title: 'Leads', path: paths.dashboard.leads.root, icon: ICONS.chat },
        { title: 'SEO Settings', path: paths.dashboard.seo.root, icon: ICONS.analytics },
        { title: 'Website Settings', path: paths.dashboard.website.settings, icon: ICONS.parameter },
      ],
    },
  ];
        icon: ICONS.menuItem,
        caption:
          'Quisque malesuada placerat nisl. In hac habitasse platea dictumst. Cras id dui. Pellentesque commodo eros a enim. Morbi mollis tellus ac sapien.',
      },
      {
        title: 'Params',
        path: '/dashboard/params?id=e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
        icon: ICONS.parameter,
      },
      {
        title: 'External link',
        path: 'https://www.google.com/',
        icon: ICONS.external,
        info: <Iconify width={18} icon="prime:external-link" />,
      },
      { title: 'Blank', path: paths.dashboard.blank, icon: ICONS.blank },
    ],
  },
];
