export type IconNamesType = {
  name:
    | 'search'
    | 'frown'
    | 'smile'
    | 'plus-circle'
    | 'settings'
    | 'hash'
    | 'image'
    | 'map'
    | 'plus'
    | 'x'
    | 'mail'
    | 'key'
    | 'user'
    | 'credit-card'
    | 'chevron-down'
    | 'clipboard'
    | 'log-in';
};

export type IconType = IconNamesType & {
  color: 'white' | 'black' | 'green';
  size: 'small' | 'large';
};
