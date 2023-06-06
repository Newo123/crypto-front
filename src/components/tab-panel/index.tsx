import { Box } from '@mui/material';
import { FC } from 'react';
import { ITabPanel } from '../../common/types/tabs';

const TabPanel: FC<ITabPanel> = ({
	children,
	value,
	index,
	...other
}: ITabPanel): JSX.Element => {
	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</div>
	);
};

export default TabPanel;
