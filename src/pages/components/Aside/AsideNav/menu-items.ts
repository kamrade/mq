export interface IMenuLink {
  title: string;
  link: string;
}

export interface IMenuItem {
  id: string;
  togglerTitle: string;
  nav: (IMenuLink | IMenuItem)[];
}

export const menuItems: (IMenuItem | IMenuLink)[] = [{

  id: 'applications',
  togglerTitle: 'Applications',

  nav: [{
    title: 'Line chart',
    link: '/showcase/line-chart'
  }],

}, {
  id: 'components',
  togglerTitle: 'Components',
  nav: [{
    id: 'helpers',
    togglerTitle: 'Helpers',
    nav: [{
      title: 'Spacers',
      link: '/showcase/spacers'
    }]
  }, {
    title: 'Grid',
    link: '/showcase/grid'
  }, {
    title: 'Buttons',
    link: '/showcase/buttons'
  }, {
    title: 'Badges',
    link: '/showcase/badges'
  }]
}];
