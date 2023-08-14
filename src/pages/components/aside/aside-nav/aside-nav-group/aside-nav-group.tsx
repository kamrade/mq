import { Accordion } from '~/pages/components/aside/accordion';
import { AsideNavGroupHead } from '~/pages/components/aside/aside-nav';
import { AsideNavItem } from '~/pages/components/aside/aside-nav/aside-nav-item';

export interface IAsideNavGroupProps {
  navState: any;
  group: any;
  foldAll: (id: string) => void;
  onChange: (groupId: string, value: boolean) => void;
  level?: number;
}

export const AsideNavGroup = ({navState, onChange, foldAll, group, level}: IAsideNavGroupProps) => {

  const groupLevel = level ? level : 0;

  const handleChange = (groupId: string, value: boolean) => {
    onChange(groupId, value);
  }

  return (
    <>
      <Accordion
        accordionState={navState[ group.id ].folded}
        id={group.id}
        foldAll={foldAll}
        onChange={handleChange}
      >
        {{
          toggler:
            <AsideNavGroupHead
              active={navState[group.id].active}
              innerPadding={(level || 0) * 16}
              groupState={navState[ group.id ].folded}
              title={group.togglerTitle} />,

          content:
            group.nav.map((item: any, j: number) => {
              if (item.id) {
                return <AsideNavGroup
                  level={groupLevel+1}
                  navState={navState}
                  key={j}
                  foldAll={foldAll}
                  group={item}
                  onChange={handleChange}/>
              }
              return <AsideNavItem
                key={j}
                title={item.title}
                link={item.link}
                innerPadding={(level || 0) * 16}/>
            })
        }}
      </Accordion>
    </>
  );
}
