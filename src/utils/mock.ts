import { ProgramData } from "./types";

export const mockData: ProgramData = {
  total: {
    now: { applied: 20, recommended: 20, interview: 4, offer: 3, hired: 3 },
    previous: {
      applied: 20,
      recommended: 20,
      interview: 4,
      offer: 3,
      hired: 3,
    },
  },
  active: {
    applied: 20,
    recommended: 20,
    interview: 4,
    offer: 3,
    hired: 3,
  },
  disqualified: {
    applied: 20,
    recommended: 20,
    interview: 4,
    offer: 3,
    hired: 3,
  },
  employers: {
    google: {
      total: {
        now: {
          applied: 20,
          recommended: 20,
          interview: 4,
          offer: 3,
          hired: 3,
          rejected: 4,
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
      active: {
        applied: 20,
        recommended: 20,
        interview: 4,
        offer: 3,
        hired: 3,
      },
      disqualified: {
        applied: 20,
        recommended: 20,
        interview: 4,
        offer: 3,
        hired: 3,
      },
      opportunities: {
        UXInternship: {
          active: {
            applied: 20,
            recommended: 20,
            interview: 4,
            offer: 3,
            hired: 3,
          },
          disqualified: {
            applied: 20,
            recommended: 20,
            interview: 4,
            offer: 3,
            hired: 3,
          },
          total: {
            now: {
              applied: 20,
              recommended: 20,
              interview: 4,
              offer: 3,
              hired: 3,
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
          active: {
            applied: 20,
            recommended: 20,
            interview: 4,
            offer: 3,
            hired: 3,
          },
          disqualified: {
            applied: 20,
            recommended: 20,
            interview: 4,
            offer: 3,
            hired: 3,
          },
          total: {
            now: {
              applied: 20,
              recommended: 20,
              interview: 4,
              offer: 3,
              hired: 3,
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
      total: {
        now: {
          applied: 20,
          recommended: 20,
          interview: 4,
          offer: 3,
          hired: 3,
          rejected: 4,
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
      active: {
        applied: 20,
        recommended: 20,
        interview: 4,
        offer: 3,
        hired: 3,
      },
      disqualified: {
        applied: 20,
        recommended: 20,
        interview: 4,
        offer: 3,
        hired: 3,
      },
      opportunities: {
        UXInternship: {
          active: {
            applied: 20,
            recommended: 20,
            interview: 4,
            offer: 3,
            hired: 3,
          },
          disqualified: {
            applied: 20,
            recommended: 20,
            interview: 4,
            offer: 3,
            hired: 3,
          },
          total: {
            now: {
              applied: 20,
              recommended: 20,
              interview: 4,
              offer: 3,
              hired: 3,
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
          active: {
            applied: 20,
            recommended: 20,
            interview: 4,
            offer: 3,
            hired: 3,
          },
          disqualified: {
            applied: 20,
            recommended: 20,
            interview: 4,
            offer: 3,
            hired: 3,
          },
          total: {
            now: {
              applied: 20,
              recommended: 20,
              interview: 4,
              offer: 3,
              hired: 3,
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
    { month: "January", qualified: 2, disqualified: 4 },
    { month: "February", qualified: 2, disqualified: 4 },
    { month: "March", qualified: 2, disqualified: 4 },
    { month: "April", qualified: 2, disqualified: 4 },
    { month: "May", qualified: 2, disqualified: 4 },
    { month: "June", qualified: 2, disqualified: 4 },
    { month: "July", qualified: 2, disqualified: 4 },
    // { month: "August", qualified: 2, disqualified: 4 },
    // { month: "September", qualified: 2, disqualified: 4 },
    // { month: "October", qualified: 2, disqualified: 4 },
    // { month: "November", qualified: 2, disqualified: 4 },
    // { month: "December", qualified: 2, disqualified: 4 },
];
