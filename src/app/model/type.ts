export interface Menu {
  title: string;
  path: string;
  icon: string;
  open?: boolean;
  selected?: boolean;
  children?: Menu[];
}

export interface TabModel {
  title: string;
  path: string;
}

export interface Circle {
  x: number;
  y: number;
  r: number;
  color: string;
  dx?: number;
  dy?: number;
}
