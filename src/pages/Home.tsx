import { H2, Button } from '~/uikit';
import { Link } from 'react-router-dom';
import { portfolio } from "~/pages/portfolio/portfolio.ts";
import { ProgressiveImage } from "~/uikit/progressive-image";

export default function Home() {

  return (
    <div className={'container'}>
      <H2>Home</H2>

      <div className="row pb-5">

        <div className="mb-3 d-flex gap-1">
          <Button theme={'base'} variant={'light'}>Test 1</Button>
          <Button theme={'base'} variant={'light'}>Test 2</Button>
        </div>

        { portfolio.map((portfolioItem, i) => (
          <div className="col-lg-8" key={i}>
            <Link to={portfolioItem.link}>
              <ProgressiveImage
                preview={portfolioItem.preview}
                image={portfolioItem.src}
                alt={portfolioItem.alt}
                interactive={portfolioItem.interactive}
                description={portfolioItem.description}
              />
            </Link>
          </div>
        ))}

      </div>
    </div>
  );
}