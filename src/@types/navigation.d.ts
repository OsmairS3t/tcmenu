export type MenuNavigationProps = {
    tp?: string;
}

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            dashboard: undefined;
            approutes: undefined;
            menu: MenuNavigationProps;
            registermenu: undefined;
            conferencemenu: undefined;
            buylist: undefined;
        }
    }
}