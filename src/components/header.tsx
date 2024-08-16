import { Button, buttonVariants } from "./ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "./ui/navigation-menu";

type NavigationMenuItemType = {
    label: string;
};

const navigationMenuItems: Array<NavigationMenuItemType> = [
    {
        label: 'Home',
    },
    {
        label: 'About'
    },
    {
        label: 'Skills'
    },
    {
        label: 'Personal projects'
    },
    {
        label: 'Contact'
    }
];

export default (): React.ReactElement => {
    return (
        <header className="sticky p-[2%] border-2">
            <div className="grid grid-cols-2">
                <div className="justify-self-start">
                    <h1 className="text-2xl">MarkedOne - Portfolio</h1>
                </div>
                <div className="justify-self-end">
                    <NavigationMenu >
                        <NavigationMenuList>
                            {navigationMenuItems.map((item) => (
                                <NavigationMenuItem key={crypto.randomUUID()}>
                                    <Button className={buttonVariants({ variant: 'ghost' })}>{item.label}</Button>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
        </header>
    );
}
