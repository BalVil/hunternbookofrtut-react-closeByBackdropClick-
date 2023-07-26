import {
  TfiLinkedin,
  TfiTwitter,
  TfiFacebook,
  TfiYoutube,
  TfiInstagram,
} from 'react-icons/tfi';
import { Tooltip } from 'react-tooltip';

import styles from './Social.module.scss';

function Social() {
  const socialMediaData = [
    {
      icon: <TfiLinkedin />,
      link: 'https://www.linkedin.com',
      label: 'LinkedIn',
    },
    {
      icon: <TfiYoutube />,
      link: 'https://www.youtube.com/',
      label: 'YouTube',
    },
    {
      icon: <TfiFacebook />,
      link: 'https://www.facebook.com',
      label: 'Facebook',
    },
    { icon: <TfiTwitter />, link: 'https://www.twitter.com', label: 'Twitter' },
    {
      icon: <TfiInstagram />,
      link: 'https://www.instagram.com/',
      label: 'Instagram',
    },
  ];

  return (
    <ul className={styles.social}>
      {socialMediaData.map(({ icon, link, label }) => (
        <li key={label}>
          <a
            href={link}
            aria-label={label}
            target="_blank"
            rel="noreferrer"
            className={styles.socialLink}
            data-tooltip-id="social-link"
            data-tooltip-content={label}
          >
            {icon}
          </a>
        </li>
      ))}
      <Tooltip id="social-link" className={styles.tooltip} />
    </ul>
  );
}

export default Social;
