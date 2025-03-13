export type DisplayDataType = {
  info: {
    name: string;
    email: string;
    text: string;
  };
};

export type StateType = {
  name: string;
  email: string;
  text: string;
};

export type EventType = {
  target: { value: string; name: string };
};
