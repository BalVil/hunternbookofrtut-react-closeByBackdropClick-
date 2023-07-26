import { Helmet } from 'react-helmet-async';

const TITLE = 'Hunternbookofrtut.com';
const CONTENT = 'Free social game to play. Entertain yourself with us.';

function HelmetHead() {
  return (
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={CONTENT} />
    </Helmet>
  );
}

export default HelmetHead;
