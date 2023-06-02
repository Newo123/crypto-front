// import { Search } from '@mui/icons-material';
import { Autocomplete, Stack, TextField } from '@mui/material';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ISingleAsset } from '../../common/types/assets';
import { useAppSelector } from '../../utils/hooks';

const SearchBarComponent: FC = (): JSX.Element => {
	const [selectedItem, setSelectedItem] = useState<string | null>('');
	const navigate = useNavigate();
	const assetsArray: ISingleAsset[] = useAppSelector(
		state => state.assets.assets,
	);

	return (
		<Stack spacing={2} sx={{ maxWidth: '300px', width: '100%' }}>
			<Autocomplete
				value={selectedItem}
				onChange={(e: any, value: string | null) => {
					navigate(`assets/${value}`);
					setSelectedItem(null);
				}}
				renderInput={element => (
					<TextField
						{...element}
						label='Поиск'
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
