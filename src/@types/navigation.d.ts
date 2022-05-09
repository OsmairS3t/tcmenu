export type MenuNavitagionProps = {
    tp?: string;
}

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            approutes: undefined;
            menu: MenuNavitagionProps;
            registermenu: undefined;
            conferencemenu: undefined;
            buylist: undefined;
        }
    }
}