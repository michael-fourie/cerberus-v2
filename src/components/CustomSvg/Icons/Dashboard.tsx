import React from 'react';

import { CustomSvg } from '../index';
import { SvgProps } from '../../../core/interfaces/Svg';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <CustomSvg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" { ...props }>
      <path d="M9.99219 17.6172C10.5312 17.6172 10.9609 17.2031 10.9609 16.6719V9.72656C11.7344 9.35938 12.2734 8.57031 12.2734 7.66406C12.2734 6.75781 11.7344 5.96875 10.9609 5.60156V3.46094C10.9609 2.95312 10.5156 2.53906 9.99219 2.53906C9.48438 2.53906 9.02344 2.95312 9.02344 3.46094V5.60156C8.25 5.96875 7.71875 6.75781 7.71875 7.66406C7.71875 8.5625 8.25 9.35938 9.02344 9.72656V16.6719C9.02344 17.1953 9.47656 17.6172 9.99219 17.6172ZM13.3516 12.4766C13.3516 13.3828 13.8828 14.1719 14.6562 14.5391V16.6875C14.6562 17.1953 15.1094 17.6172 15.625 17.6172C16.1562 17.6172 16.5938 17.2031 16.5938 16.6875V14.5391C17.3672 14.1719 17.9062 13.3906 17.9062 12.4766C17.9062 11.5703 17.3672 10.7812 16.5938 10.4141V3.47656C16.5938 2.95312 16.1484 2.53906 15.625 2.53906C15.1172 2.53906 14.6562 2.95312 14.6562 3.47656V10.4219C13.8828 10.7812 13.3516 11.5703 13.3516 12.4766ZM2.08594 12.4766C2.08594 13.3828 2.625 14.1719 3.39844 14.5391V16.6875C3.39844 17.1953 3.84375 17.6172 4.36719 17.6172C4.89844 17.6172 5.33594 17.2031 5.33594 16.6875V14.5391C6.10938 14.1719 6.64062 13.3906 6.64062 12.4766C6.64062 11.5703 6.10938 10.7812 5.33594 10.4219V3.47656C5.33594 2.95312 4.89062 2.53906 4.36719 2.53906C3.85938 2.53906 3.39844 2.95312 3.39844 3.47656V10.4141C2.625 10.7812 2.08594 11.5703 2.08594 12.4766ZM8.94531 7.66406C8.94531 7.08594 9.41406 6.61719 9.99219 6.61719C10.5938 6.61719 11.0469 7.08594 11.0469 7.66406C11.0469 8.25781 10.5938 8.71094 9.99219 8.71094C9.41406 8.71094 8.94531 8.25781 8.94531 7.66406ZM14.5781 12.4766C14.5781 11.8984 15.0469 11.4297 15.625 11.4297C16.2266 11.4297 16.6797 11.8984 16.6797 12.4766C16.6797 13.0703 16.2266 13.5312 15.625 13.5312C15.0469 13.5312 14.5781 13.0703 14.5781 12.4766ZM3.3125 12.4766C3.3125 11.8984 3.78125 11.4297 4.36719 11.4297C4.96094 11.4297 5.41406 11.8984 5.41406 12.4766C5.41406 13.0703 4.96094 13.5312 4.36719 13.5312C3.78125 13.5312 3.3125 13.0703 3.3125 12.4766Z"/>
    </CustomSvg>
  );
};

export default Icon;
