export type Theme = {
  sizes: {
    10: number;
    20: number;
    30: number;
    40: number;
    50: number;
    60: number;
    70: number;
    80: number;
    90: number;
    100: number;
    quarter: string;
    half: string;
    semiFull: string;
    full: string;
  };
  colors: {
    white: string;
    text: string;
    primary: string;
    secondary: string;
    transparent: string;
    gray: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };

    warning: string;
    success: string;
    info: string;
    error: string;
  };
  spaces: {
    2: string;
    4: string;
    6: string;
    8: string;
    10: string;
    12: string;
    14: string;
    16: string;
    18: string;
    20: string;
    22: string;
  };
  fontSizes: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    '2xl': number;
    '3xl': number;
  };
  fontWeights: {
    100: number;
    200: number;
    300: number;
    400: number;
    500: number;
    600: number;
    700: number;
    800: number;
    900: number;
  };
  fonts: {
    poppins: string;
    jost: string;
    mulish: string;
    nunito: string;
    josefinSans: string;
    josefinSlab: string;
    montserrat: string;
  };
  borders: Array<string | number>;
  radii: {
    0: number;
    2: number;
    4: number;
    6: number;
    8: number;
    10: number;
    20: number;
    30: number;
    full: string;
  };
  zIndex: {
    1: number;
    5: number;
    10: number;
    15: number;
    20: number;
    30: number;
    40: number;
    50: number;
    60: number;
    70: number;
    80: number;
    90: number;
    100: number;
  };
  shadows: {
    normal: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
};

export const theme: Theme = {
  colors: {
    transparent: 'rgba(0,0,0,0)',
    white: '#ffffff',
    text: '#212529',
    primary: '#3366FF',
    secondary: '#EE5149',
    success: '#74d815',
    error: '#FF3838',
    warning: '#F5CE45',
    info: '#6BCDFB',
    gray: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },
  },
  spaces: {
    2: '2px',
    4: '4px',
    6: '6px',
    8: '8px',
    10: '10px',
    12: '12px',
    14: '14px',
    16: '16px',
    18: '18px',
    20: '20px',
    22: '22px',
  },
  borders: [
    0,
    '1px solid',
    '2px solid',
    '3px solid',
    '4px solid',
    '5px solid',
    '6px solid',
    '7px solid',
    '8px solid',
  ],
  fonts: {
    poppins: 'Poppins, sans-serif',
    jost: 'Jost ,sans-serif',
    mulish: 'Mulish ,sans-serif',
    nunito: 'Nunito, sans-serif',
    josefinSans: '"Josefin Sans",sans-serif',
    josefinSlab: '"Josefin Slab", sans-serif',
    montserrat: 'Montserrat, sans-serrif',
  },
  fontSizes: {
    xs: 8,
    sm: 16,
    md: 20,
    lg: 40,
    xl: 50,
    '2xl': 70,
    '3xl': 100,
  },
  fontWeights: {
    100: 100,
    200: 200,
    300: 300,
    400: 400,
    500: 500,
    600: 600,
    700: 700,
    800: 800,
    900: 900,
  },
  shadows: {
    normal: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },
  zIndex: {
    1: 1,
    5: 5,
    10: 10,
    15: 15,
    20: 20,
    30: 30,
    40: 40,
    50: 50,
    60: 60,
    70: 70,
    80: 80,
    90: 90,
    100: 100,
  },
  radii: {
    0: 0,
    2: 2,
    4: 4,
    6: 6,
    8: 8,
    10: 10,
    20: 20,
    30: 30,
    full: '50%',
  },
  sizes: {
    10: 10,
    20: 20,
    30: 30,
    40: 40,
    50: 50,
    60: 60,
    70: 70,
    80: 80,
    90: 90,
    100: 100,
    quarter: '25%',
    half: '50%',
    semiFull: '75%',
    full: '100%',
  },
};
