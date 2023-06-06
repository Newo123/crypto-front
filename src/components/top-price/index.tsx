import { FC } from 'react';
import { ITablePriceData } from '../../common/types/assets';
import AssetsTableComponent from '../assets-table';

const TopPriceComponent: FC<ITablePriceData> = ({
	assets,
}: ITablePriceData): JSX.Element => {
	return <AssetsTableComponent assets={assets} />;
};

export default TopPriceComponent;
