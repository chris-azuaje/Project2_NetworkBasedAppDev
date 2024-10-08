// const { DateTime } = require('luxon');
// const { v4: uuidv4 } = require('uuid');

const events = [
  {
    id: 1,
    category: 'Meetup',
    title: 'Oslo, Norway Meetup',
    hostName: '#',
    startDate: '05/10/2025',
    endDate: '05/10/2025',
    details: 'Walk along Torggata, very close to the Youngstorget plaza',
    image: '#',
  },
  {
    id: 2,
    category: 'Workshop',
    title: 'Barcelona, Spain Workshop',
    hostName: '#',
    startDate: '07/25/2025',
    endDate: '07/26/2025',
    details: 'Barcelona detail section',
    image: '#',
  },
  {
    id: 3,
    category: 'Meetup',
    title: 'Zurich, Switzerland Meetup',
    hostName: '#',
    startDate: '08/11/2025',
    endDate: '08/11/2025',
    details: 'Zurich details sections',
    image: '#',
  },
  {
    id: 4,
    category: 'Meetup',
    title: '#',
    hostName: '#',
    startDate: '09/25/2025',
    endDate: '09/25/2025',
    details: '#',
    image: '#',
  },
  {
    id: 5,
    category: 'Workshop',
    title: '#',
    hostName: '#',
    startDate: '10/14/2025',
    endDate: '10/15/2025',
    details: '#',
    image: '#',
  },
  {
    id: 6,
    category: 'Workshop',
    title: '#',
    hostName: '#',
    startDate: '11/28/2025',
    endDate: '11/29/2025',
    details: '#',
    image: '#',
  },
];

// const stories = [
//   {
//     id: '1',
//     title: 'My Life at Charlotte',
//     content:
//       ' My life at Charlotte is pretty ordinary. I go to school, work part time, and try to find things to do whenever I am not doing those things.',
//     author: 'Chris Azuaje',
// createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
//   },
//   {
//     id: '2',
//     title: 'Learning NBAD',
//     content:
//       ' NBAD has been a difficult class but I think it will be well worth it in the end. The material we are learning is up to date and relevant for our interests.',
//     author: 'Chris Azuaje',
//     createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
//   },
//   {
//     id: '3',
//     title: 'My Spring Break',
//     content: " What spring break? I haven't had a spring break since 1982! ",
//     author: 'Chris Azuaje',
//     createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
//   },
// ];

// exports.find = function () {
//   return stories;
// };

// exports.findById = function (id) {
//   return stories.find((story) => story.id === id);
// };

// exports.save = function (story) {
//   story.id = uuidv4();
//   story.createdAt = DateTime.now().toLocaleString(DateTime.DATETIME_SHORT);
//   stories.push(story);
// };

// exports.updateById = function (id, newStory) {
//   let story = stories.find((story) => story.id === id);
//   if (story) {
//     story.title = newStory.title;
//     story.content = newStory.content;
//     return true;
//   } else {
//     return false;
//   }
// };

// exports.deleteById = function (id) {
//   let index = stories.findIndex((story) => story.id === id);
//   if (index !== -1) {
//     stories.splice(index, 1);
//     return true;
//   } else {
//     return false;
//   }
// };
