import { ProgramData } from "./types";

export const programData: ProgramData = {
  total: {
    now: {
      applied: 3122,
      recommended: 2164,
      interview: 443,
      offer: 183,
      hired: 98,
    },
    previous: {
      applied: 1590,
      recommended: 90,
      interview: 90,
      offer: 71,
      hired: 167,
    },
  },
  qualified: {
    applied: 3122,
    recommended: 2164,
    interview: 443,
    offer: 183,
    hired: 98,
  },
  disqualified: {
    applied: 1445,
    recommended: 958,
    interview: 1721,
    offer: 260,
    hired: 65,
  },
  employers: {
    google: {
      name: "google",
      employerTotal: {
        now: {
          applied: 95,
          recommended: 57,
          interview: 39,
          offer: 33,
          hired: 15,
          rejected: 60,
        },
        previous: {
          applied: 20,
          recommended: 20,
          interview: 4,
          offer: 3,
          hired: 3,
          rejected: 4,
        },
      },
      // qualified: {
      //   applied: 20,
      //   recommended: 20,
      //   interview: 4,
      //   offer: 3,
      //   hired: 3,
      // },
      // disqualified: {
      //   applied: 20,
      //   recommended: 20,
      //   interview: 4,
      //   offer: 3,
      //   hired: 3,
      // },
      opportunities: {
        UXInternship: {
          label: "UX internship",
          qualified: {
            applied: 20,
            recommended: 17,
            interview: 4,
            offer: 3,
            hired: 1,
          },
          disqualified: {
            applied: 7,
            recommended: 4,
            interview: 1,
            offer: 1,
            hired: 1,
          },
          total: {
            now: {
              applied: 27,
              recommended: 21,
              interview: 5,
              offer: 4,
              hired: 2,
            },
            previous: {
              applied: 20,
              recommended: 20,
              interview: 4,
              offer: 3,
              hired: 3,
            },
          },
        },
        ArtInternship: {
          label: "art internship",

          qualified: {
            applied: 44,
            recommended: 32,
            interview: 21,
            offer: 19,
            hired: 10,
          },
          disqualified: {
            applied: 24,
            recommended: 4,
            interview: 7,
            offer: 8,
            hired: 3,
          },
          total: {
            now: {
              applied: 68,
              recommended: 36,
              interview: 28,
              offer: 27,
              hired: 13,
            },
            previous: {
              applied: 20,
              recommended: 20,
              interview: 4,
              offer: 3,
              hired: 3,
            },
          },
        },
      },
    },
    microsoft: {
      name: "microsoft",
      employerTotal: {
        now: {
          applied: 54,
          recommended: 42,
          interview: 22,
          offer: 12,
          hired: 4,
          rejected: 19,
        },
        previous: {
          applied: 20,
          recommended: 20,
          interview: 4,
          offer: 3,
          hired: 3,
          rejected: 4,
        },
      },
      // qualified: {
      //   applied: 20,
      //   recommended: 20,
      //   interview: 4,
      //   offer: 3,
      //   hired: 3,
      // },
      // disqualified: {
      //   applied: 20,
      //   recommended: 20,
      //   interview: 4,
      //   offer: 3,
      //   hired: 3,
      // },
      opportunities: {
        UXInternship: {
          label: "UX internship",
          qualified: {
            applied: 20,
            recommended: 17,
            interview: 4,
            offer: 3,
            hired: 1,
          },
          disqualified: {
            applied: 7,
            recommended: 4,
            interview: 1,
            offer: 1,
            hired: 1,
          },
          total: {
            now: {
              applied: 27,
              recommended: 21,
              interview: 5,
              offer: 4,
              hired: 2,
            },
            previous: {
              applied: 20,
              recommended: 20,
              interview: 4,
              offer: 3,
              hired: 3,
            },
          },
        },
        ArtInternship: {
          label: "Art internship",
          qualified: {
            applied: 20,
            recommended: 17,
            interview: 4,
            offer: 3,
            hired: 1,
          },
          disqualified: {
            applied: 7,
            recommended: 4,
            interview: 1,
            offer: 1,
            hired: 1,
          },
          total: {
            now: {
              applied: 27,
              recommended: 21,
              interview: 5,
              offer: 4,
              hired: 2,
            },
            previous: {
              applied: 20,
              recommended: 20,
              interview: 4,
              offer: 3,
              hired: 3,
            },
          },
        },
      },
    },
  },
};

export const chartData = [
  { month: "January", disqualified: 280, qualified: 320 },
  { month: "February", disqualified: 350, qualified: 710 },
  { month: "March", disqualified: 300, qualified: 575 },
  { month: "April", disqualified: 350, qualified: 500 },
  { month: "May", disqualified: 400, qualified: 450 },
  { month: "June", disqualified: 310, qualified: 350 },
  { month: "July", disqualified: 500, qualified: 550 },
  // { month: "August", disqualified: 2, qualified: 4 },
  // { month: "September", disqualified: 2, qualified: 4 },
  // { month: "October", disqualified: 2, qualified: 4 },
  // { month: "November", disqualified: 2, qualified: 4 },
  // { month: "December", disqualified: 2, qualified: 4 },
];

export const stages = [
  "applied",
  "recommended",
  "interview",
  "offer",
  "hired",
  "rejected",
] as const;
