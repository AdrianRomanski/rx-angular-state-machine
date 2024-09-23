export interface BorderUI {
  size: string;
  color: string;
  type: string;
}

export interface BackgroundUI {
  position: string;
  firstColor: string;
  secondColor: string;
}

export interface BoxUI {
  border: BorderUI;
  background: BackgroundUI;
}
