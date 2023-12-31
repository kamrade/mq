import s from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { ScrambledText} from "~/uikit";

const navLinks = [
  { title: 'Home', href: '/main/' },
  { title: 'Contacts', href: '/main/contacts' },
  { title: 'About', href: '/main/about'}
]

export function Header() {

  return (
    <header className={s.Header}>

      <div className="container">

        <div className={s.Title}>
          <div>
            <div className={s.Description}>D. Mykhailov. Seasoned UX designer</div>
            <ScrambledText
              slideLength={2000}
              value={[
                '[ Product design ]',
                '[ Prototyping ]',
                '[ Infographic ]',
                '[ Design systems ]',
                '[ React/Angular components ]',
                '[ Business and system analytics ]',
              ]}
            />
          </div>

          <div className={s.Menu}>
            { navLinks.map((link, i) => (
              <div key={i}>
                <NavLink to={link.href} className={s.Link} >
                  {link.title}
                </NavLink>
              </div>
            ))}
          </div>

        </div>

      </div>
    </header>
  )
}
