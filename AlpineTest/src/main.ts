import './main.scss';

import { Alpine } from '@rubenbimmel/alpine-class-component';

import Dropdown from './components/dropdown/dropdown';
import Person from './components/person';

Alpine.data('dropdown', Dropdown);
Alpine.data('person', Person);

Alpine.start();
