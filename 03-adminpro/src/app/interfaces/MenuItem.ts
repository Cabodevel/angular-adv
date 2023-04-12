export interface MenuItem{
    title:string;
    icon: string;
    submenu: SubMenu[]
}

export interface SubMenu{
    title:string;
    url:string;
}