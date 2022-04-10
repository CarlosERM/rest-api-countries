import React, { useCallback, useState } from 'react';
import { FilterBody, Options, OptionsItem, WrapperFilter } from './style';

const Filter = () => {
  const [show, setShow] = useState(false);
  const [option, setOption] = useState<string | null>();

  const handleClick = useCallback(() => {
    setShow(!show);
  }, [show]);

  const handleClickOption = useCallback(
    (e: EventTarget & HTMLLIElement) => {
      setOption(e.dataset.filter);
    },
    [option],
  );
  return (
    <WrapperFilter>
      <FilterBody onClick={handleClick}>{option || 'Filter by region'}</FilterBody>
      {show && (
        <Options>
          <OptionsItem
            onClick={(e) => {
              handleClickOption(e.currentTarget);
            }}
            data-filter="Africa"
          >
            Africa
          </OptionsItem>
          <OptionsItem
            onClick={(e) => {
              handleClickOption(e.currentTarget);
            }}
            data-filter="America"
          >
            America
          </OptionsItem>
          <OptionsItem
            onClick={(e) => {
              handleClickOption(e.currentTarget);
            }}
            data-filter="Asia"
          >
            Asia
          </OptionsItem>
          <OptionsItem
            onClick={(e) => {
              handleClickOption(e.currentTarget);
            }}
            data-filter="Europe"
          >
            Europe
          </OptionsItem>
          <OptionsItem
            onClick={(e) => {
              handleClickOption(e.currentTarget);
            }}
            data-filter="Oceania"
          >
            Oceania
          </OptionsItem>
        </Options>
      )}
    </WrapperFilter>
  );
};

export default Filter;
