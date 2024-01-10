import alexPhoto from './../../src/assets/img/alex.png';
import nastyaPhoto from './../../src/assets/img/nastya.png';
import katyaPhoto from './../../src/assets/img/katya.png';
import { DevelopersData } from '../types/types';
import { Role } from '../types/enum';

const developersRu: DevelopersData[] = [
  {
    name: 'Анастасия',
    image: nastyaPhoto,
    role: Role.developer,
    github: 'nyurasheva',
    contribution: ['Приветствие', 'Дизайн', 'Редактор', 'Подвал'],
  },
  {
    name: 'Александр',
    image: alexPhoto,
    role: Role.lead,
    github: 'forsyterun',
    contribution: ['Описание', 'Схема', 'Видео', 'Тесты'],
  },
  {
    name: 'Екатерина',
    image: katyaPhoto,
    role: Role.developer,
    github: 'massaracsh7',
    contribution: ['Заголовки', 'Запрос', 'Переменные', 'Авторизация', 'АПИ'],
  },
];

const developersEn: DevelopersData[] = [
  {
    name: 'Anastasiia',
    image: nastyaPhoto,
    role: Role.developer,
    github: 'nyurasheva',
    contribution: ['Welcome', 'Design', 'Editor', 'Footer'],
  },
  {
    name: 'Aleksandr',
    image: alexPhoto,
    role: Role.lead,
    github: 'forsyterun',
    contribution: ['Readme', 'Docs', 'Video', 'Tests'],
  },
  {
    name: 'Katsiaryna',
    image: katyaPhoto,
    role: Role.developer,
    github: 'massaracsh7',
    contribution: ['Headers', 'Query', 'Variables', 'Endpoint', 'Auth'],
  },
];

export { developersRu, developersEn };
