import { HtmlHTMLAttributes } from 'react';
import { FilterIcon, SearchIcon } from '../icons';

import { Container } from './SearchInput.styles';

type SearchInputProps = {} & HtmlHTMLAttributes<HTMLInputElement>;

export function SearchInput(props: SearchInputProps) {
  return (
    <Container>
      <SearchIcon />
      <input type="text" placeholder="Search..." {...props} />
      <FilterIcon />
    </Container>
  );
}
