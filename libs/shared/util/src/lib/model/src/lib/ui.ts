export interface BorderUI {
  size: string;
  color: string;
  type: string;
  radius: string;
}

export interface BackgroundUI {
  position: string;
  firstColor: string;
  secondColor: string;
  fontColor: string;
}

export interface BoxUI {
  border: BorderUI;
  background: BackgroundUI;
}
