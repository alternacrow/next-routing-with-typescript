export type UserId = string;

export type User = {
  id: UserId;
  name: string;
  age: number;
};

export type BlogId = number;

export type Blog = {
  id: BlogId;
  userId: UserId;
  title: string;
  content: string;
};

export const USER_LIST: User[] = [
  {
    id: "abc1234",
    name: "John",
    age: 26,
  },
  {
    id: "def5678",
    name: "Emma",
    age: 18,
  },
];

export const BLOG_LIST: Blog[] = [
  {
    id: 1,
    userId: "abc1234",
    title: "I",
    content: "I received a heavy fine but it failed to crush my spirit.",
  },
  {
    id: 2,
    userId: "abc1234",
    title: "Despite",
    content: "Despite multiple complications and her near-death experience",
  },
  {
    id: 3,
    userId: "abc1234",
    title: "The",
    content: "The crowd yells and screams for more memes.",
  },
  {
    id: 4,
    userId: "abc1234",
    title: "The",
    content:
      "The toy brought back fond memories of being lost in the rain forest.",
  },
  {
    id: 5,
    userId: "def5678",
    title: "Blue",
    content:
      "Blue sounded too cold at the time and yet it seemed to work for gin.",
  },
  {
    id: 6,
    userId: "def5678",
    title: "When",
    content:
      "When motorists sped in and out of traffic, all she could think of was those in need of a transplant.",
  },
  {
    id: 7,
    userId: "def5678",
    title: "I've",
    content:
      "I've traveled all around Africa and still haven't found the gnu who stole my scarf.",
  },
  {
    id: 8,
    userId: "abc1234",
    title: "If",
    content:
      "If you like tuna and tomato sauce- try combining the two. It’s really not as bad as it sounds.",
  },
  {
    id: 9,
    userId: "def5678",
    title: "He",
    content:
      "He picked up trash in his spare time to dump in his neighbor's yard.",
  },
  {
    id: 10,
    userId: "abc1234",
    title: "It",
    content: "It had been sixteen days since the zombies first attacked.",
  },
];
