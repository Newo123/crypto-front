// import { Search } from '@mui/icons-material';
import { Autocomplete, Stack, TextField } from '@mui/material';
import { FC } from 'react';
import { ISingleAsset } from '../../common/types/assets';
import { useAppSelector } from '../../utils/hooks';

const SearchBarComponent: FC = () => {
  const assetsArray: ISingleAsset[] = useAppSelector(
    (state) => state.assets.assets,
  );
  return (
    <Stack spacing={2} sx={{ maxWidth: '300px', width: '100%' }}>
      <Autocomplete
        freeSolo
        renderInput={(element) => (
          <TextField
            {...element}
            label="Поиск"
            InputProps={{
              ...element.InputProps,
              type: 'search',
            }}
          />
        )}
        options={assetsArray.map((element: { name: string }) => element.name)}
      />
    </Stack>
  );
};

export default SearchBarComponent;
