export interface MenuItem {
    title: string;
    path?: string;
    badge?: string;
    single?: boolean;
    submenu?: MenuItem[];
}
