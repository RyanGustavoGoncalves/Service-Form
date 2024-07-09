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
import { ResponsiveSideBar, SideBar } from "../components/sidebar/SideBar"



export function HomePage() {
    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <SideBar />
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <ResponsiveSideBar />
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
