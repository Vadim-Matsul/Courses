import { SVGModule } from '../components/svg/types';
import { CATEGORY, MenuDataRoutes, MenuDataTitle } from '../const';

export interface Id {
    secondCategory: string;
}

export interface Page {
    alias: string;
    title: string;
    _id: string;
    category: string;
}

export interface MenuItem {
    _id: Id;
		isOpened: boolean;
    pages: Page[];
}

export interface MenuData {
    title: MenuDataTitle,
    route: MenuDataRoutes,
    id: CATEGORY,
    icon: SVGModule,
}
