import * as React from "react"
import {
    Home,
    LineChart,
    Package,
    Package2,
    PanelLeft,
    Search,
    ShoppingCart,
    User,
    Users2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle"
import { Link } from "react-router-dom"


export function HomePage() {
    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
                <nav className="flex flex-col items-center justify-between h-full gap-4 px-2 sm:py-4">
                    <div className="grid gap-5">
                        <Link
                            href="#"
                            className="flex items-center gap-4 px-2.5 text-foreground hover:text-foreground"
                        >
                            <Home className="h-5 w-5" />
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                        >
                            <ShoppingCart className="h-5 w-5" />
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                        >
                            <Package className="h-5 w-5" />
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                        >
                            <Users2 className="h-5 w-5" />
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                        >
                            <LineChart className="h-5 w-5" />
                        </Link>
                    </div>
                    <ModeToggle />
                </nav>
            </aside>
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size="icon" variant="outline" className="sm:hidden">
                                <PanelLeft className="h-5 w-5" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="sm:max-w-xs">
                            <nav className="grid gap-6 text-lg font-medium">
                                <Link
                                    href="#"
                                    className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                                >
                                    <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                                    <span className="sr-only">Acme Inc</span>
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-foreground hover:text-foreground"
                                >
                                    <Home className="h-5 w-5" />
                                    Dashboard
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                >
                                    <ShoppingCart className="h-5 w-5" />
                                    Orders
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                >
                                    <Package className="h-5 w-5" />
                                    Products
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                >
                                    <Users2 className="h-5 w-5" />
                                    Customers
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                >
                                    <LineChart className="h-5 w-5" />
                                    Settings
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <div className="relative ml-auto flex-1 md:grow-0">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search..."
                            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
                        />
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="overflow-hidden rounded-full"
                            >
                                <User className="h-5 w-5" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </header>
                <main className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                    <Card>
                        <CardHeader className="bg-secondary text-secondary-foreground py-3 px-4">
                            <h2 className="text-lg font-semibold">Receita Total</h2>
                        </CardHeader>
                        <CardContent className="p-4">
                            <div className="text-4xl font-bold">R$ 125.000,00</div>
                            <div className="text-muted-foreground text-sm">+12% em relação ao mês anterior</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="bg-secondary text-secondary-foreground py-3 px-4">
                            <h2 className="text-lg font-semibold">Novos Clientes</h2>
                        </CardHeader>
                        <CardContent className="p-4">
                            <div className="text-4xl font-bold">1.250</div>
                            <div className="text-muted-foreground text-sm">+8% em relação ao mês anterior</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="bg-secondary text-secondary-foreground py-3 px-4">
                            <h2 className="text-lg font-semibold">Pedidos Concluídos</h2>
                        </CardHeader>
                        <CardContent className="p-4">
                            <div className="text-4xl font-bold">3.500</div>
                            <div className="text-muted-foreground text-sm">+15% em relação ao mês anterior</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="bg-secondary text-secondary-foreground py-3 px-4">
                            <h2 className="text-lg font-semibold">Tickets Abertos</h2>
                        </CardHeader>
                        <CardContent className="p-4">
                            <div className="text-4xl font-bold">125</div>
                            <div className="text-muted-foreground text-sm">-5% em relação ao mês anterior</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="bg-secondary text-secondary-foreground py-3 px-4">
                            <h2 className="text-lg font-semibold">Produtos Mais Vendidos</h2>
                        </CardHeader>
                        <CardContent className="p-4">
                            <ul className="space-y-2">
                                <li className="flex justify-between">
                                    <span>Produto A</span>
                                    <span>1.250 unidades</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Produto B</span>
                                    <span>950 unidades</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Produto C</span>
                                    <span>750 unidades</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="bg-secondary text-secondary-foreground py-3 px-4">
                            <h2 className="text-lg font-semibold">Clientes Mais Valiosos</h2>
                        </CardHeader>
                        <CardContent className="p-4">
                            <ul className="space-y-2">
                                <li className="flex justify-between">
                                    <span>Cliente A</span>
                                    <span>R$ 25.000,00</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Cliente B</span>
                                    <span>R$ 18.000,00</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Cliente C</span>
                                    <span>R$ 15.000,00</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </main>
            </div>
        </div>
    )
}
