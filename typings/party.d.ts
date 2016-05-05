interface Party {
  _id?: string;
  name: string;
  description?: string;
  location: string;
  owner?: string;
  invited?: Array<string>;
  public: boolean;
}

interface RSVP {
  userId: string;
  response: string;
}

declare var Fake: {
    sentence(words: number): string;
}
