interface INR {
  rupees: number;
  paisa: number;
}

interface Product {
  id: number;
  name: string;
  cost: INR;
}

export type { Product, INR };
