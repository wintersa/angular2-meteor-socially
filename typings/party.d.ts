interface Party {
  _id?: string;
  name: string;
  description?: string;
  location: string;
  owner?: string;
  invited?: Array<string>;
}

// interface Party {
//   _id?: string;
//   name: string;
//   public: boolean;
//   description?: string;
//   // location: string;
//   location: {
//     name: string;
//     // lat?: number;
//     // lng?: number;
//   };
//   invited?: Array<string>;
//   rsvps?: Array<RSVP>;
// }
//
// interface RSVP {
//   userId: string;
//   response: string;
// }
declare var Fake: {
    sentence(words: number): string;
}
