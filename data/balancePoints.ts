export interface BalancePoint {
  key: 'value' | 'direction' | 'exchange' | 'operate';
  label: string;
  stakeholders: string;
  description: string;
  effects: {
    low: string;
    high: string;
    balanced: string;
  };
}

export const balancePoints: BalancePoint[] = [
  {
    key: 'value',
    label: 'VALUE',
    stakeholders: 'Wall Street ↔ Customers',
    description: 'Balance between investor expectations and customer needs.',
    effects: {
      low: 'Heavy Wall Street focus. Investors happy but customers may feel neglected.',
      high: 'Strong customer value focus, but Wall Street may not understand strategy.',
      balanced: 'Balanced value proposition between investor and customer needs.'
    }
  },
  {
    key: 'direction',
    label: 'DIRECTION',
    stakeholders: 'Wall Street ↔ Employees',
    description: 'Alignment of strategic direction between investors and employees.',
    effects: {
      low: 'Strategy too investor-focused. Employee engagement suffering.',
      high: 'Employee-driven strategy may lack market alignment.',
      balanced: 'Strategic alignment balances investor expectations and employee capabilities.'
    }
  },
  {
    key: 'exchange',
    label: 'EXCHANGE',
    stakeholders: 'Customers ↔ Market',
    description: 'Balance between customer focus and market trends.',
    effects: {
      low: 'Customer focus without market context. May miss emerging trends.',
      high: 'Market-driven but not addressing specific customer needs.',
      balanced: 'Value exchange optimized between customer needs and market conditions.'
    }
  },
  {
    key: 'operate',
    label: 'OPERATE',
    stakeholders: 'Employees ↔ Market',
    description: 'How operational capabilities align employees with market dynamics.',
    effects: {
      low: 'Operating model too employee-centric, disconnected from market realities.',
      high: 'Market-driven operations without employee engagement.',
      balanced: 'Operating model aligns employee capabilities with market dynamics.'
    }
  }
];
