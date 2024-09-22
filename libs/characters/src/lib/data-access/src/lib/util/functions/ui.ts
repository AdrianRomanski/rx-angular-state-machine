/**INTERNALS*/
import {
  BORDER_STYLE_11_20,
  BORDER_STYLE_1_10,
  BORDER_STYLE_21_30,
  BORDER_STYLE_31_40,
  BORDER_STYLE_41_50,
  BORDER_STYLE_51_60,
  BORDER_STYLE_61_70,
  BORDER_STYLE_71_80,
  BORDER_STYLE_81_90,
  BORDER_STYLE_91_100
} from '../const/border';

/**SHARED*/
import { BorderUI } from '@shared/util/model';
import { ALLIANCE_ACCENT, EQUALITY_ACCENT, HORDE_ACCENT } from '../const/accent';

export function listBorder(level: number): BorderUI {
  switch (true) {
    case level <= 10: {
      return BORDER_STYLE_1_10;
    }
    case level <= 20: {
      return BORDER_STYLE_11_20;
    }
    case level <= 30: {
      return BORDER_STYLE_21_30;
    }
    case level <= 40: {
      return BORDER_STYLE_31_40;
    }
    case level <= 50: {
      return BORDER_STYLE_41_50;
    }
    case level <= 60: {
      return BORDER_STYLE_51_60;
    }
    case level <= 70: {
      return BORDER_STYLE_61_70;
    }
    case level <= 80: {
      return BORDER_STYLE_71_80;
    }
    case level <= 90: {
      return BORDER_STYLE_81_90;
    }
    case level <= 100: {
      return BORDER_STYLE_91_100;
    }
    default: {
      return BORDER_STYLE_91_100;
    }
  }
}

export function listAccent(hordeCount: number, allianceCount: number): string {
  if (hordeCount > allianceCount) {
    return HORDE_ACCENT;
  } else if (allianceCount > hordeCount) {
    return ALLIANCE_ACCENT;
  } else {
    return EQUALITY_ACCENT;
  }
}
