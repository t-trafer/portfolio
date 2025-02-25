import { PERSONAL_INFO } from '../personal-info.constants';

const LD_JSON = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: PERSONAL_INFO.NAME,
  jobTitle: PERSONAL_INFO.JOB_TITLE,
  url: PERSONAL_INFO.LINKS.WEBSITE,
  sameAs: [PERSONAL_INFO.LINKS.LINKEDIN, PERSONAL_INFO.LINKS.GITHUB],
};

export default LD_JSON;
