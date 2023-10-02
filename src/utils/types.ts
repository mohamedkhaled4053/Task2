export interface Istages {
  applied: number;
  recommended: number;
  interview: number;
  offer: number;
  hired: number;
  rejected?: number;
}

export interface total {
  now: Istages;
  previous: Istages;
}

export interface ProgramData {
  qualified: Istages;
  disqualified: Istages;
  total: total;

  employers: {
    [key: string]: {
      // qualified: stages;
      // disqualified: stages;
      name:string;
      employerTotal: total;
      opportunities: {
        [key: string]: {
          label: string;
          qualified: Istages;
          disqualified: Istages;
          opportunitytotal: total;
        };
      };
    };
  };
}
